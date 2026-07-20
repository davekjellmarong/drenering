interface CityIssuesSectionProps {
  cityName: string;
}

const ISSUES = [
  {
    title: "Fuktige kjellervegger",
    description:
      "Ofte et tegn på at drenering rundt grunnmuren er mangelfull eller utdatert.",
  },
  {
    title: "Vannansamlinger på tomten",
    description:
      "Skjer når overvann ikke ledes bort raskt nok, spesielt etter mye nedbør.",
  },
  {
    title: "Setningsskader",
    description:
      "Ustabil grunn på grunn av vann kan over tid føre til sprekker i fundamentet.",
  },
  {
    title: "Muggdannelse og lukt",
    description:
      "Følger ofte av langvarig fukt i kjeller eller krypkjeller.",
  },
];

export function CityIssuesSection({ cityName }: CityIssuesSectionProps) {
  return (
    <section className="bg-brand-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-brand-900">
          Vanlige dreneringsproblemer i {cityName}
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {ISSUES.map((issue) => (
            <div
              key={issue.title}
              className="bg-white rounded-lg p-6 shadow-sm border border-brand-100"
            >
              <h3 className="font-semibold text-brand-800 mb-2">
                {issue.title}
              </h3>
              <p className="text-brand-700 text-sm">{issue.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
