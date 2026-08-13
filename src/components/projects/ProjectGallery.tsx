import Image from "next/image";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  if (images.length === 0) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {images.map((image, index) => (
        <div
          key={image}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl glass"
        >
          <Image
            src={image}
            alt={`${title} screenshot ${index + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
