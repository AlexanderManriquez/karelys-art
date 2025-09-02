"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CldImage } from "next-cloudinary";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen p-4 pb-20 gap-16 sm:p-20">
      <header>
        <Navbar />
      </header>

      <main>
        <h1 className="text-4xl font-bold text-amber-500">Karelys ART.</h1>
        <h2 className="text-red-300 text-2xl font-semibold">Inspiración en el día a día</h2>
         {/* <CldImage
          src="cld-sample-5" // Use this sample image or upload your own via the Media Explorer
          width="400" // Transform the image: auto-crop to square aspect_ratio
          height="400"
          crop={{
            type: 'auto',
            source: true
          }} alt={""}          /> */}
      </main>

      <Footer />
    </div>
  );
}
