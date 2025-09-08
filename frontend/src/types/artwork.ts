export interface Artwork {
  id: number;
  title: string;
  imageurl: string;
  description?: string;
  category: string;
  price: number;
  slug: string;
}