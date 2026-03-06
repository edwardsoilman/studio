import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { books } from '@/lib/data';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import { BookCard } from '@/components/book-card';
import { Button } from '@/components/ui/button';

export default function Home() {
  const heroImage = getPlaceholderImage('hero-spectrum');
  const introImage = getPlaceholderImage('child-reading');
  const highlightedBooks = books.filter(b => b.status === 'Published').slice(0, 4);

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
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-end text-center pb-12 md:pb-24">
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary mb-4">
            Stories Across the Full Spectrum
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-foreground/80 mb-8">
            Bold, imaginative children’s books celebrating neurodiversity and curiosity.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
            <Link href="/books">
              Explore Our Books <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Highlighted Books Section */}
      <section className="py-16 md:py-24 bg-background">
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
      
      {/* Intro Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
               <Image
                src={introImage.imageUrl}
                alt={introImage.description}
                width={800}
                height={600}
                className="object-cover w-full h-full"
                data-ai-hint={introImage.imageHint}
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">
                Embracing Every Mind
              </h2>
              <p className="text-lg text-foreground/80">
                Meddlington Press is a small, independent publishing house focused on stories that embrace difference, imagination, and the brilliance of neurodivergent minds. We deliver children’s novels that entertain, inspire, and empower young readers.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
