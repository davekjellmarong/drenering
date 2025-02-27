export interface BlogPost {
  id: number;
  title: string;
  subtitle: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: string;
  slug: string;
  publishedAt: string;
  readingTime: number;
  tags: string[];
  featuredImage: string;
  relatedPosts: number[];
}

export const mockBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Hvorfor god drenering er viktig for ditt hjem",
    subtitle: "Beskytt ditt hjem mot fuktskader og strukturelle problemer",
    author: {
      name: "Ole Nordmann",
      role: "Seniorrådgiver innen drenering",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    },
    content: `God drenering er avgjørende for å beskytte fundamentet til hjemmet ditt og forhindre vannskader. Uten riktig drenering kan regnvann og smeltevann samle seg rundt grunnmuren, noe som kan føre til fuktproblemer, mugg og til og med strukturelle skader over tid.

I denne artikkelen vil vi utforske de viktigste årsakene til at god drenering er så viktig, og gi deg noen tips om hvordan du kan forbedre dreneringen rundt ditt hjem.

1. Beskyttelse mot fuktskader
En av de viktigste funksjonene til et godt dreneringssystem er å holde vann borte fra husets fundament. Når vann får lov til å samle seg rundt grunnmuren, kan det trenge inn i kjelleren eller krypkjelleren, noe som fører til fuktskader, mugg og råte.

2. Forebygging av setningsskader
Når jorden rundt huset ditt blir mettet med vann, kan det føre til at grunnen beveger seg eller synker. Dette kan resultere i setningsskader på huset, som kan være både kostbare og farlige å reparere.

3. Beskyttelse av landskapet
God drenering er ikke bare viktig for selve huset, men også for hagen og landskapet rundt. Riktig drenering kan forhindre erosjon, beskytte planter mot oversvømmelse og bidra til et sunnere utendørsmiljø.

4. Økt eiendomsverdi
Et hus med et velfungerende dreneringssystem er mer attraktivt for potensielle kjøpere. Det viser at eiendommen er godt vedlikeholdt og at risikoen for fremtidige problemer er redusert.

5. Forbedret inneklima
Ved å holde fuktighet borte fra huset, bidrar god drenering til et sunnere inneklima. Dette er spesielt viktig for personer med allergier eller respiratoriske problemer.

Konklusjon
Investering i god drenering er en av de viktigste tingene du kan gjøre for å beskytte hjemmet ditt på lang sikt. Ved å ta proaktive skritt for å forbedre dreneringen rundt huset ditt, kan du spare betydelige summer på reparasjoner og vedlikehold i fremtiden, samtidig som du sikrer et sunt og behagelig bomiljø for deg og din familie.`,
    slug: "hvorfor-god-drenering-er-viktig",
    publishedAt: "2023-05-15T10:00:00Z",
    readingTime: 5,
    tags: ["drenering", "huseier", "vedlikehold", "fuktskader"],
    featuredImage:
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    relatedPosts: [2, 3],
  },
  {
    id: 2,
    title: "5 tegn på at du trenger å forbedre dreneringen",
    subtitle: "Lær å gjenkjenne tidlige varselsignaler for dreneringsproblemer",
    author: {
      name: "Kari Nordmann",
      role: "Byggingeniør med spesialisering i vannskader",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    },
    content: `Mange huseiere overser tidlige tegn på dreneringsproblemer, noe som kan føre til kostbare reparasjoner senere. I denne artikkelen vil vi gå gjennom fem klare tegn på at dreneringen rundt huset ditt trenger forbedring. Ved å gjenkjenne disse problemene tidlig, kan du ta proaktive skritt for å beskytte hjemmet ditt og unngå større problemer i fremtiden.

1. Vannsamlinger i hagen
Hvis du merker at det dannes dammer eller vannsamlinger i hagen din etter regn, er dette et tydelig tegn på dårlig drenering. Disse vannsamlingene kan føre til at jorden blir overmettet, noe som kan skade planter og gress.

2. Fuktige kjellervegger
Fuktige eller våte kjellervegger er et alvorlig tegn på dreneringsproblemer. Hvis du merker fuktighet, mugg eller saltutslag på veggene i kjelleren, kan det bety at vann trenger inn gjennom fundamentet.

3. Sprekker i grunnmuren
Små sprekker i grunnmuren kan være normale, men hvis du merker at eksisterende sprekker vokser eller at nye sprekker dukker opp, kan dette være et tegn på at vann presser mot fundamentet.

4. Erosjon rundt husets fundament
Hvis du ser at jorden rundt husets fundament eroderer eller vaskes bort, er dette et tegn på at vannet ikke ledes effektivt bort fra huset.

5. Oversvømte takrenner og nedløpsrør
Hvis takrenner og nedløpsrør ofte blir oversvømt eller hvis vannet ikke ledes effektivt bort fra huset, kan dette føre til at vann samler seg rundt fundamentet.

Konklusjon
Å være oppmerksom på disse tegnene kan hjelpe deg med å identifisere dreneringsproblemer før de blir alvorlige. Hvis du merker noen av disse tegnene, er det viktig å handle raskt. Konsulter en profesjonell dreneringsekspert for å vurdere situasjonen og foreslå passende løsninger. Ved å ta tak i problemene tidlig, kan du spare betydelige summer på reparasjoner og beskytte hjemmet ditt mot langsiktige skader.`,
    slug: "5-tegn-pa-dreneringsproblemer",
    publishedAt: "2023-06-02T14:30:00Z",
    readingTime: 4,
    tags: ["drenering", "vedlikehold", "huseier", "vannskader"],
    featuredImage:
      "https://images.unsplash.com/photo-1585495036033-6d3a8b5b5d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    relatedPosts: [1, 3],
  },
  {
    id: 3,
    title: "DIY vs. profesjonell drenering: Hva bør du velge?",
    subtitle:
      "Fordeler og ulemper ved å gjøre det selv kontra å hyre eksperter",
    author: {
      name: "Per Hansen",
      role: "Erfaren entreprenør og DIY-entusiast",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    },
    content: `Når det kommer til å forbedre dreneringen rundt hjemmet ditt, står du overfor valget mellom å gjøre det selv eller hyre profesjonelle. Begge alternativene har sine fordeler og ulemper. I denne artikkelen vil vi sammenligne DIY-metoder med profesjonelle dreneringsløsninger, og hjelpe deg med å bestemme hvilken tilnærming som er best for ditt spesifikke behov og budsjett.

DIY Drenering:
Fordeler:
1. Kostnadsbesparende: Du kan spare penger på arbeidskostnader.
2. Fleksibilitet: Du kan jobbe i ditt eget tempo og tilpasse prosjektet etter behov.
3. Læring og erfaring: Du får verdifull kunnskap om ditt hjem og dets systemer.

Ulemper:
1. Tidkrevende: DIY-prosjekter kan ta mye lengre tid enn profesjonelle jobber.
2. Risiko for feil: Uten riktig kunnskap kan du gjøre feil som fører til større problemer.
3. Begrenset utstyr: Du har kanskje ikke tilgang til spesialisert utstyr som profesjonelle bruker.

Profesjonell Drenering:
Fordeler:
1. Ekspertise: Profesjonelle har omfattende kunnskap og erfaring.
2. Effektivitet: Jobben blir gjort raskere og mer effektivt.
3. Garantier: Mange profesjonelle tilbyr garantier på arbeidet sitt.
4. Avansert utstyr: De har tilgang til spesialisert utstyr for komplekse jobber.

Ulemper:
1. Høyere kostnader: Profesjonelle tjenester er generelt dyrere enn DIY.
2. Mindre kontroll: Du har mindre direkte kontroll over prosjektet.

Når bør du velge DIY?
- For mindre, enkle dreneringsprosjekter
- Hvis du har erfaring med lignende arbeid
- Når budsjettet er stramt og du har tid til rådighet

Når bør du velge profesjonell hjelp?
- For omfattende eller komplekse dreneringsprosjekter
- Hvis du mangler nødvendig kunnskap eller erfaring
- Når tiden er knapp og du vil ha jobben gjort raskt og effektivt
- Hvis prosjektet krever spesialisert utstyr eller ekspertise

Konklusjon
Valget mellom DIY og profesjonell drenering avhenger av prosjektets omfang, din erfaring, tilgjengelig tid og budsjett. For enkle oppgaver som å rense takrenner eller installere enkle overflatedrenering, kan DIY være et godt valg. For mer omfattende prosjekter som involverer graving eller installasjon av underjordiske dreneringssystemer, er det ofte best å stole på profesjonelle. Uansett hva du velger, er det viktig å prioritere kvalitet og sikkerhet for å beskytte ditt hjem på lang sikt.`,
    slug: "diy-vs-profesjonell-drenering",
    publishedAt: "2023-06-20T09:15:00Z",
    readingTime: 6,
    tags: ["drenering", "DIY", "profesjonell hjelp", "huseier"],
    featuredImage:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    relatedPosts: [1, 2],
  },
];
