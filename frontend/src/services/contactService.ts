import { ContactRow, CreateContactDto } from "@/types/contact";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export async function sendContactMessage(dto: CreateContactDto): Promise<ContactRow> {
  const res = await fetch(`${API_URL}/contact`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(dto),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'Failed to send contact message');
} 
  const data = await res.json();
  console.log("API response:", data);
  return data;
}