import Link from "next/link";
import { Button } from "@/src/components/ui/button";
// import UnderConstruction from "@/src/components/features/under-development/UnderDevelopment";
import { HubSpotMethods } from "@/src/queryFactory/HubSpot";
import {
  Calendar,
  CheckCircle,
  Droplet,
  Home,
  Info,
  Wrench,
} from "lucide-react";
import { Separator } from "@radix-ui/react-select";
import { Card, CardContent } from "@/src/components/ui/card";

export const metadata = {
  title:
    "Dreneringsrenne | Effektiv Vannhåndtering for Oppkjørsler og Uteområder",
  description:
    "Dreneringsrenner for oppkjørsler, terrasser og hager. Lær hvordan du installerer, hvilke typer som finnes, og hvilke du bør velge.",
};

const DreneringRundtHus = async () => {
  // Fetch the HubSpot content for this specific page
  const postId = "224941380852"; // This should be the correct ID for the drenering-rundt-hus content
  const post = await HubSpotMethods.getPostById(
    postId,
    String(process.env.HUBSPOT_TOKEN)
  );

  // Format the date if available
  const publishDate = post.publishDate ? new Date(post.publishDate) : null;
  const formattedDate = publishDate
    ? new Intl.DateTimeFormat("no-NO", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(publishDate)
    : "";

  // Use the HTML content as is to preserve all tags including <br>
  const postContent = post.postBody || "";

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="heading-1 text-blue-900 mb-6">
              Drenering Rundt Hus
            </h1>
            <p className="body-lg text-blue-700 max-w-3xl mx-auto">
              Profesjonell veiledning om hvordan du beskytter grunnmuren din mot
              fuktskader og sikrer et sunt hjemmemiljø.
            </p>
          </div>

          {/* Featured Image */}
          <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
            <img
              src={post.featuredImage}
              alt="Drenering rundt hus illustrasjon"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Author and Date */}
          <div className="flex items-center justify-between mb-8 text-sm text-gray-600">
            <div className="flex items-center">
              <span className="font-medium">Forfatter: {post.authorName}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <span>Publisert: {formattedDate}</span>
            </div>
          </div>

          <Separator className="mb-8" />

          {/* Key Benefits Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="border-blue-100 hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-100 p-3 rounded-full mb-4">
                    <Droplet className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold mb-2">Fuktbeskyttelse</h3>
                  <p className="text-gray-600">
                    Effektiv drenering forhindrer fuktskader og mugg i kjelleren
                    din.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-100 p-3 rounded-full mb-4">
                    <Home className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold mb-2">Økt Boligverdi</h3>
                  <p className="text-gray-600">
                    God drenering øker verdien på boligen din og gjør den mer
                    attraktiv for potensielle kjøpere.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-100 p-3 rounded-full mb-4">
                    <Wrench className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold mb-2">Forebyggende Vedlikehold</h3>
                  <p className="text-gray-600">
                    Regelmessig vedlikehold av dreneringssystemet forlenger
                    husets levetid.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="heading-2 text-blue-900 mb-4">
              Guide til Riktig Grunnmurdrenering
            </h2>

            <div className="bg-blue-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
              <h3 className="heading-4 text-blue-800 mb-2">
                Hvorfor er drenering viktig?
              </h3>
              <p className="body">
                Drenering rundt huset er kritisk for å lede vann bort fra
                grunnmuren. Uten tilstrekkelig drenering kan vann trenge inn i
                kjelleren eller under gulvet, noe som fører til fuktskader, mugg
                og råte.
              </p>
            </div>

            <div
              className="prose prose-lg max-w-none prose-blue prose-img:rounded-lg prose-headings:text-gray-900"
              dangerouslySetInnerHTML={{ __html: postContent }}
            />

            <h3 className="heading-3 text-blue-800 mt-8 mb-4">
              Vanlige tegn på dreneringsproblemer:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Fuktige områder eller vannsamlinger i kjelleren</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Mugglukt eller synlig muggvekst</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Sprekker i grunnmuren eller gulvet</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Avflassende maling eller tapeter som løsner</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Vannpytter som blir stående nær husets grunnmur</span>
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="bg-blue-100 rounded-lg p-8 text-center mb-12">
            <h3 className="heading-3 text-blue-900 mb-4">
              Trenger du hjelp med dreneringen rundt huset ditt?
            </h3>
            <p className="body-lg mb-6">
              Våre eksperter kan hjelpe deg med å finne den beste løsningen for
              ditt hjem. Få tilbud fra opptil 3 kvalifiserte avløpsselskaper i
              ditt område.
            </p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/quote">Få Gratis Tilbud</Link>
            </Button>
          </div>

          {/* Info Box */}
          <div className="flex items-start p-6 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
            <Info className="h-5 w-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-yellow-800 mb-1">Tips</h4>
              <p className="text-yellow-700">
                Vurder å installere en dreneringspumpe som ekstra sikkerhet ved
                områder med høy grunnvannstand eller kraftig nedbør.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreneringRundtHus;
