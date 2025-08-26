import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <header className="flex flex-col">
        <Navbar />

      </header>

      <main>
        <h1 className="text-8xl font-bold text-amber-500">Karelys ART.</h1>
        <h2 className="text-red-300 text-2xl font-semibold">Inspiración en el día a día</h2>
      </main>

      <Footer />
    </div>
  );
}
