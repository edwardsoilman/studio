import Image from 'next/image';
import Link from 'next/link';

import type { Book } from '@/lib/types';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  const coverImage = getPlaceholderImage(book.coverImageId);

  return (
    <Link href={`/books/${book.slug}`} className="group block">
      <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1">
        <CardHeader className="p-0">
          <div
            className={cn(
              'relative w-full',
              book.format === 'portrait' ? 'aspect-[2/3]' : 'aspect-square'
            )}
          >
            <Image
              src={coverImage.imageUrl}
              alt={`Cover of ${book.title}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              data-ai-hint={coverImage.imageHint}
            />
            {book.status === 'Coming Soon' && (
              <Badge variant="secondary" className="absolute top-2 right-2">
                Coming Soon
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <h3 className="font-headline text-lg font-bold text-primary group-hover:text-accent transition-colors">
            {book.title}
          </h3>
          <p className="text-sm text-muted-foreground">{book.author}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
