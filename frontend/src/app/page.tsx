import Footer from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import Navbar from "@/components/Navbar";
import { fetchArtworks } from "@/lib/fetchArtworks";


export default async function Home() {
  const artworks = await fetchArtworks();

  return (
    <div className="font-sans items-center justify-items-center min-h-screen p-4 pb-20 gap-16 sm:p-20">
      <header>
        <Navbar />
      </header>

      <main>
        <div className="titles flex items-end">
          <h1 className="text-4xl font-bold text-amber-500">Karelys ART.</h1>
          <h2 className="text-red-300 text-2xl font-semibold px-1">Inspiración en el día a día</h2>
        </div>
        

        <h2 className="text-2xl font-bold mx-4 p-2">Obras Destacadas</h2>
        <Gallery artworks={artworks} limit={4} />
        <div className="mt-6 text-right">
          <a href="/gallery" className="text-amber-600 hover:underline font-semibold" aria-label="Ver galería completa">Ver galería completa →</a>
          <p className="text-sm text-gray-600">Explora nuestra colección de arte y encuentra inspiración en cada pieza.</p>
        </div>
      </main>



      <Footer />
    </div>
  );
}
