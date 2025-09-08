// import { slugify } from 'transliteration'; // opción segura para caracteres latinos
import { slugify } from 'transliteration';
import { SupabaseClient } from '@supabase/supabase-js';
import { Database } from 'src/database.types';

export async function generateUniqueSlug(
  title: string,
  supabase: SupabaseClient<Database>,
): Promise<string> {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const base = slugify(title)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    .toLowerCase()
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    .replace(/[^a-z0-9]+/g, '-')
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    .replace(/^-+|-+$/g, '');

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  let slug = base;
  let suffix = 1;

  while (true) {
    const { data, error } = await supabase
      .from('Artwork')
      .select('id')
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      .eq('slug', slug)
      .maybeSingle();

    if (error) {
      const e = error as { message: string }; // forzamos tipado
      throw new Error(`Error verificando slug: ${e.message}`);
    }

    if (!data) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return slug; // slug único encontrado
    }

    slug = `${base}-${suffix}`;
    suffix++;
  }
}
