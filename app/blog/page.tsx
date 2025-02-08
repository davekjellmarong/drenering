import Link from "next/link"

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Drainage Blog</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Add blog post previews here */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Understanding Home Drainage Systems</h2>
          <p className="text-gray-600 mb-4">Learn about the different types of drainage systems for your home...</p>
          <Link href="/blog/understanding-home-drainage" className="text-blue-500 hover:underline">
            Read more
          </Link>
        </div>
        {/* Add more blog post previews as needed */}
      </div>
    </div>
  )
}

