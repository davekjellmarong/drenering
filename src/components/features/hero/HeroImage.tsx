import Image from "next/image";

interface HeroImageProps {
  src: string;
  alt: string;
}

export default function HeroImage({ src, alt }: HeroImageProps) {
  return (
    <div className="absolute inset-0 -z-10">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        style={{ filter: "brightness(0.6) contrast(1.1)" }}
      />
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
}
