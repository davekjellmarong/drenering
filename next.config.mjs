/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      "145975019.fs1.hubspotusercontent-eu1.net",
    ],
  },
  async redirects() {
    return [
      // The vision page was only ever a placeholder; its content now lives
      // on the "who's behind this" page.
      { source: "/om-oss/visjon", destination: "/om-oss/team", permanent: true },
    ];
  },
};

export default nextConfig;
