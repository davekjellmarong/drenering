import Image from "next/image";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { CalendarIcon, User, Clock, ArrowLeft } from "lucide-react";
import { HubSpotMethods } from "@/src/queryFactory/HubSpot";

export async function generateMetadata() {
  try {
    const postId = "224941380852"; // This should be the correct ID for the drenering-rundt-hus content
    const post = await HubSpotMethods.getPostById(
      postId,
      String(process.env.HUBSPOT_TOKEN)
    );

    return {
      title: post.htmlTitle || "Drenering Rundt Hus | DreneringsExperten",
      description:
        post.metaDescription ||
        "Lær om drenering rundt hus og hvordan det beskytter boligen din",
    };
  } catch {
    return {
      title: "Drenering Rundt Hus | DreneringsExperten",
      description:
        "Lær om drenering rundt hus og hvordan det beskytter boligen din",
    };
  }
}

export default async function DreneringRundtHus() {
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
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Hero section with featured image */}
      <div className="w-full h-[400px] relative">
        <Image
          src={post.featuredImage || "/placeholder.svg?height=400&width=1200"}
          alt={post.featuredImageAltText || post.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <div className="max-w-3xl text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {post.name || "Drenering Rundt Hus"}
              </h1>
              {post.metaDescription && (
                <p className="text-xl text-white/90">{post.metaDescription}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <div className="mb-6">
            <Button asChild variant="outline" size="sm">
              <Link href="/drenering" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Tilbake til drenering
              </Link>
            </Button>
          </div>

          {/* Article card */}
          <article className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Article header */}
            <div className="p-8 pb-0">
              {post.metaDescription && (
                <p className="text-xl text-gray-600 mb-6">
                  {post.metaDescription}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8 pb-6 border-b border-gray-100">
                {post.authorName && (
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-blue-500" />
                    <span>{post.authorName}</span>
                  </div>
                )}

                {formattedDate && (
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4 text-blue-500" />
                    <span>{formattedDate}</span>
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-blue-500" />
                  <span>5 min lesetid</span>
                </div>
              </div>
            </div>

            {/* Article content from HubSpot */}
            <div className="px-8 py-6">
              <div
                className="prose prose-lg max-w-none prose-blue prose-img:rounded-lg prose-headings:text-gray-900"
                dangerouslySetInnerHTML={{ __html: postContent }}
              />
            </div>
          </article>

          {/* CTA section */}
          <div className="mt-12 bg-blue-600 text-white rounded-xl p-8 shadow-lg">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">
                Trenger du hjelp med drenering rundt huset?
              </h2>
              <p className="mb-6 text-blue-100">
                Få gratis tilbud fra kvalifiserte dreneringsfirmaer i ditt
                område
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                <Link href="/fa-tilbud">Få gratis tilbud nå</Link>
              </Button>
            </div>
          </div>

          {/* Related articles section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Relaterte artikler</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200 relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Placeholder"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    <Link
                      href="/drenering/typer-drenering"
                      className="hover:text-blue-600"
                    >
                      Typer drenering
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    Lær om forskjellige typer dreneringssystemer og hvilken som
                    passer best for din eiendom.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200 relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Placeholder"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    <Link
                      href="/drenering/fordeler"
                      className="hover:text-blue-600"
                    >
                      Fordeler med god drenering
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    Forstå alle fordelene med å ha et godt dreneringssystem
                    rundt boligen din.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200 relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Placeholder"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    <Link
                      href="/drenering/drenerings-renne"
                      className="hover:text-blue-600"
                    >
                      Dreneringsrenne
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    Alt du trenger å vite om dreneringsrenner og hvordan de
                    fungerer sammen med ditt dreneringssystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
