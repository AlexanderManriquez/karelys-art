import { Database } from "../database.types";

type ArtworkRow = Database['public']['Tables']['Artwork']['Row'];

export async function fetchArtworks(): Promise<ArtworkRow[]> {
  const res = await fetch('http://localhost:3000/artworks');
  if (!res.ok) throw new Error('Failed to fetch artworks');
  const data: ArtworkRow[] = await res.json();
  return data;
}

export async function fetchArtworkBySlug(slug: string) {
  try {
    const res = await fetch(`http://localhost:3000/artworks/slug/${slug}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      return null;
    }

    try {
      const data = await res.json();
      return data || null;
    } catch (e) {
      console.error('Error parsing JSON:', e);
      return null;
    }
  } catch (e) {
    console.error('Error fetching artwork:', e);
    return null;
  }
}