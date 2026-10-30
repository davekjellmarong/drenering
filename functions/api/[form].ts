// Cloudflare Pages Function: POST /api/tilbud and /api/partner.
// Validates a form submission and emails it to the site owner via Resend
// (free tier: 3 000 emails/month, 100/day). Nothing is stored here; the email
// is the record. Configure in Cloudflare Pages → Settings → Variables:
//   RESEND_API_KEY   (secret) Resend API key
//   LEAD_EMAIL_TO    where leads are sent
//   LEAD_EMAIL_FROM  optional, defaults to Resend's test sender, which can
//                    only deliver to the email the Resend account was made with

interface Env {
  RESEND_API_KEY: string;
  LEAD_EMAIL_TO: string;
  LEAD_EMAIL_FROM?: string;
}

interface Context {
  request: Request;
  env: Env;
  params: { form: string };
}

// Field order here is the order they appear in the email. The client
// (src/utils/submitForm.ts) must send these names.
const FORMS: Record<
  string,
  { subject: string; fields: Record<string, string>; required: string[] }
> = {
  tilbud: {
    subject: "Ny tilbudsforespørsel",
    fields: {
      firstname: "Fornavn",
      lastname: "Etternavn",
      email: "E-post",
      phone: "Telefon",
      address: "Adresse",
      zip: "Postnummer",
      city: "Sted",
      propertytype: "Boligtype",
      propertysize: "Boligstørrelse",
    },
    required: ["firstname", "lastname", "email", "phone", "address", "zip"],
  },
  partner: {
    subject: "Ny partnersøknad",
    fields: {
      companyName: "Firma",
      contactName: "Kontaktperson",
      email: "E-post",
      phone: "Telefon",
      website: "Nettside",
      address: "Adresse",
      postalCode: "Postnummer",
      city: "Sted",
    },
    required: ["companyName", "contactName", "email", "phone"],
  },
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export const onRequestPost = async ({ request, env, params }: Context) => {
  const form = FORMS[params.form];
  if (!form) return json({ error: "Ukjent skjema" }, 404);

  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return json({ error: "Ugyldig forespørsel" }, 400);
  }

  // Honeypot: real visitors never see or fill this field. Pretend success so
  // bots don't learn anything.
  if (data["bot-field"]) return json({ ok: true });

  const values: Record<string, string> = {};
  for (const name of Object.keys(form.fields)) {
    values[name] = String(data[name] ?? "").trim().slice(0, 500);
  }

  const missing = form.required.filter((name) => !values[name]);
  if (missing.length > 0 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    return json({ error: "Fyll ut alle obligatoriske felt med gyldige verdier." }, 400);
  }

  const text = Object.entries(form.fields)
    .map(([name, label]) => `${label}: ${values[name] || "-"}`)
    .join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.LEAD_EMAIL_FROM || "DinDrenering <onboarding@resend.dev>",
      to: [env.LEAD_EMAIL_TO],
      reply_to: values.email,
      subject: `${form.subject}: ${values.city || values.companyName || ""}`.trim(),
      text: `${text}\n\nSendt fra dindrenering.no ${new Date().toISOString()}`,
    }),
  });

  if (!response.ok) {
    console.error("Resend error", response.status, await response.text());
    return json({ error: "Kunne ikke sende" }, 502);
  }
  return json({ ok: true });
};
