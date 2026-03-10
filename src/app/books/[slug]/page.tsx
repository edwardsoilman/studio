import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { books } from '@/lib/data';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface BookPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return books.map((book) => ({
    slug: book.slug,
  }));
}

export async function generateMetadata({ params }: BookPageProps) {
  const book = books.find((b) => b.slug === params.slug);

  if (!book) {
    return {
      title: 'Book Not Found',
    }
  }

  return {
    title: `${book.title} | Meddlington Press`,
    description: book.description,
  }
}

export default function BookPage({ params }: BookPageProps) {
  const book = books.find((b) => b.slug === params.slug);

  if (!book) {
    notFound();
  }

  const coverImage = getPlaceholderImage(book.coverImageId);

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        <div className="md:col-span-1">
          <div className="sticky top-24">
            <div
              className={cn(
                'w-full max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg',
                book.format === 'portrait' ? 'aspect-[2/3]' : 'aspect-square'
              )}
            >
              <Image
                src={coverImage.imageUrl}
                alt={`Cover of ${book.title}`}
                width={book.format === 'portrait' ? 400 : 400}
                height={book.format === 'portrait' ? 600 : 400}
                className="object-cover w-full h-full"
                data-ai-hint={coverImage.imageHint}
              />
            </div>
            <div className="mt-6 text-center">
              {book.status === 'Published' ? (
                <Button asChild size="lg" className="w-full max-w-sm font-bold bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href={book.amazonLink} target="_blank" rel="noopener noreferrer">
                    Order now
                  </Link>
                </Button>
              ) : (
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  Coming Soon
                </Badge>
              )}
            </div>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="prose prose-lg max-w-none prose-headings:font-headline prose-headings:text-primary prose-p:text-foreground/80">
            <Badge variant="outline" className="mb-2">{book.genre}</Badge>
            <h1>{book.title}</h1>
            <p className="text-xl !mt-0 text-muted-foreground">by {book.author}</p>
            
            <Separator className="my-8" />
            
            <h2>Description</h2>
            <p>{book.longDescription}</p>

            <Separator className="my-8" />

            <h2>About the Author</h2>
            <p>{book.authorBio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
