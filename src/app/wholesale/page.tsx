import Link from 'next/link';
import Image from 'next/image';

import { books } from '@/lib/data';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export const metadata = {
  title: 'Wholesale | Meddlington Reader',
  description: 'Information for our wholesale partners and booksellers.',
};

export default function WholesalePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
          Wholesale & Booksellers
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
          We love partnering with bookstores and retailers. Our titles are available for wholesale purchase through Ingram Spark. For direct inquiries, please use the form on our contact page.
        </p>
      </div>

      <Separator className="my-16" />

      <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary text-center mb-12">
        Available Titles
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => {
          const coverImage = getPlaceholderImage(book.coverImageId);
          return (
            <Card key={book.id} className="flex flex-col">
              <CardHeader>
                <div className="relative aspect-[2/3] w-full">
                  <Image
                    src={coverImage.imageUrl}
                    alt={`Cover of ${book.title}`}
                    fill
                    className="rounded-t-lg object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    data-ai-hint={coverImage.imageHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle className="font-headline text-primary text-xl">{book.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{book.author}</p>
              </CardContent>
              <CardFooter>
                {book.status === 'Published' ? (
                  <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
                    <Link href={book.ingramLink} target="_blank" rel="noopener noreferrer">
                      Stock this Title
                    </Link>
                  </Button>
                ) : (
                  <Badge variant="secondary" className="w-full justify-center py-2 text-sm">
                    Coming Soon
                  </Badge>
                )}
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
