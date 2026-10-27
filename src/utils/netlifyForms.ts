// Form submissions go to Netlify Forms (free tier, email notifications set up
// in the Netlify UI). Netlify only detects forms in static HTML, so every form
// name and field posted here must also exist in public/__forms.html.
export const submitNetlifyForm = async (
  formName: "tilbud" | "partner",
  fields: Record<string, string>
) => {
  const response = await fetch("/__forms.html", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ "form-name": formName, ...fields }).toString(),
  });

  if (!response.ok) {
    throw new Error(
      "Vi klarte ikke å sende skjemaet. Prøv igjen om litt, eller send oss en e-post."
    );
  }
};
