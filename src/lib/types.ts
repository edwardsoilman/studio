export interface Book {
  id: number;
  slug: string;
  title: string;
  author: string;
  coverImageId: string;
  description: string;
  longDescription: string;
  authorBio: string;
  genre: string;
  status: 'Published' | 'Coming Soon';
  amazonLink: string;
  ingramLink: string;
  format: 'portrait' | 'square';
  ageRange?: string;
}
