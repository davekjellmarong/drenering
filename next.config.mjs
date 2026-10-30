/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site for Cloudflare Pages: `next build` writes plain HTML to
  // out/. Redirects live in public/_redirects and form handling in functions/,
  // since a static export has no Next.js server, middleware or redirects().
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
