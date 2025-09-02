"use client";


import { Card, CardContent } from "../components/ui/card";
import { Artwork } from "@/types/artwork";
import Image from "next/image";

interface GalleryProps {
    artworks: Artwork[];
    limit?: number;
}

export function Gallery({ artworks, limit }: GalleryProps) {
  const items = limit ? artworks.slice(0, limit) : artworks;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {items.map((artwork) => (
        <Card key={artwork.id} className="rounded-2xl shadow-lg overflow-hidden">
          <CardContent className="p-0">
            <Image 
              src={artwork.image_url}
              alt={artwork.title}
              className="w-full h-48 object-cover"
            />  
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-2">{artwork.title}</h2>
              {artwork.description && (
                <p className="text-sm text-gray-600">{artwork.description}</p>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}