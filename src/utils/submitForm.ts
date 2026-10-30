// Forms post to the Cloudflare Pages Function in functions/api/[form].ts,
// which emails the submission to the owner. Field names must match the
// FORMS config there.
export const submitForm = async (
  formName: "tilbud" | "partner",
  fields: Record<string, string>
) => {
  const response = await fetch(`/api/${formName}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fields),
  });

  if (!response.ok) {
    throw new Error(
      "Vi klarte ikke å sende skjemaet. Prøv igjen om litt, eller send oss en e-post."
    );
  }
};
