import { fetchArtworkBySlug } from "@/lib/fetchArtworks";
import Image from "next/image";

export default async function ArtworkDetailPage({ params }: { params: { slug: string } }) {
  const artwork = await fetchArtworkBySlug(params.slug);

  if (!artwork) {
    return (
       <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Obra no encontrada</h1>
        <button onClick={() => window.location.href = '/gallery'}>Volver a la galería</button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
        <Image src={artwork.imageUrl} alt={artwork.title} className="w-full h-auto mb-6 rounded-lg shadow-md" />
        <h1 className="text-3xl font-bold mb-4">{artwork.title}</h1>
        <p className="text-gray-700 mb-4">{artwork.description}</p>
        {artwork.category && (
            <span className="mt-4 inline-block bg-blue-200 rounded-full px-3 py-1 text-sm">
                {artwork.category}
            </span>
        )}
    </div>
  );
}