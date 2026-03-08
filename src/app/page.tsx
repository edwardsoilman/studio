
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { books } from '@/lib/data';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import { BookCard } from '@/components/book-card';
import { Button } from '@/components/ui/button';

export default function Home() {
  const heroImage = getPlaceholderImage('hero-spectrum');
  const highlightedBooks = books.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh]">
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent to-50%" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-end text-center pb-8 md:pb-12">
          <h1 className="font-headline text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Stories Across the Full Spectrum
          </h1>
          <p className="max-w-2xl text-lg text-primary-foreground/80 mb-8 mt-2">
            Bold, imaginative children’s books celebrating neurodiversity and curiosity.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
            <Link href="/books">
              Explore Our Books <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-6">
            Welcome to Meddlington Press
          </h2>
          <div className="prose prose-lg max-w-none mx-auto text-foreground/80">
            <p>
              Meddlington Press is a small, independent publishing house focused on stories that embrace difference, imagination, and the brilliance of neurodivergent minds. We deliver children’s novels that entertain, inspire, and empower young readers.
            </p>
          </div>
        </div>
      </section>

      {/* Highlighted Books Section */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Featured Titles
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {highlightedBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}
