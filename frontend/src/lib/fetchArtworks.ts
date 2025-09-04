import { Database } from "@/database.types";

type ArtworkRow = Database['public']['Tables']['Artwork']['Row'];

export async function fetchArtworks(): Promise<ArtworkRow[]> {
  const res = await fetch('http://localhost:3000/artworks');
  if (!res.ok) throw new Error('Failed to fetch artworks');
  const data: ArtworkRow[] = await res.json();
  return data;
}