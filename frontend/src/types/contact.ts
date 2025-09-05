import { Database } from "@/database.types";

export type ContactRow = Database['public']['Tables']['ContactMessage']['Row'];

export type CreateContactDto = {
  name: string;
  email: string;
  message: string;
};  