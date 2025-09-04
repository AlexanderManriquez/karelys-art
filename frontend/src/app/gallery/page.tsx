import { Gallery } from "@/components/Gallery";
import Navbar from "@/components/Navbar";
import { fetchArtworks } from "@/lib/fetchArtworks";

export default async function GalleryPage() {
  const artworks = await fetchArtworks();

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <h1 className="text-2xl font-bold mb-4">Galería Completa</h1>
        <Gallery artworks={artworks} />
      </main>
    </>
  );
}
