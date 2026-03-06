import { books } from '@/lib/data';
import { BookList } from '@/components/book-list';

export const metadata = {
  title: 'Our Books | Meddlington Press',
  description: 'Browse our complete collection of published and upcoming books.',
};

export default function BooksPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
          Our Collection
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Discover a world of stories. Browse our full catalog of published works and get a sneak peek at what's coming soon.
        </p>
      </div>
      <BookList allBooks={books} />
    </div>
  );
}
