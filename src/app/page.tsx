
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';

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
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-end text-center pb-24 md:pb-28">
          <p className="max-w-2xl text-xl text-primary-foreground font-bold mb-16 [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]">
            Bold, imaginative children’s books celebrating neurodiversity and curiosity.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
            <Link href="/books">
              Explore Our Books <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <div className="mt-8 flex items-center justify-center text-xl text-primary-foreground [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]">
            <MapPin className="h-5 w-5 mr-2" />
            <span>Westport, Ireland</span>
          </div>
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

      {/* SEO Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Our Mission
          </h2>
          <div className="space-y-8 text-lg text-foreground/80 text-left">
            <div>
              <h3 className="font-headline text-2xl font-bold text-primary mb-2">Introducing the Publisher</h3>
              <p>At Meddlington Press, we are a neurodivergent-friendly publishing company dedicated to amplifying the voices of indie writers who might otherwise go unheard. Our mission is to provide a supportive platform for creative minds—writers, illustrators, and storytellers—who dream of sharing their adventures, insights, and imagination with the world. Whether you are a parent, teacher, student, or lifelong dreamer, Meddlington Press is here to nurture your voice and bring your stories to life.</p>
            </div>
            <div>
              <h3 className="font-headline text-2xl font-bold text-primary mb-2">Supporting Neurodivergent Creativity</h3>
              <p>We believe that creativity knows no bounds, and that neurodivergent writers have unique perspectives that deserve recognition. Meddlington Press celebrates these talents by creating a publishing environment where authors on the spectrum, or with other neurodivergent traits, can thrive. Our commitment is to help writers transform their ideas into professionally produced books while retaining the authenticity of their personal vision.</p>
            </div>
            <div>
               <h3 className="font-headline text-2xl font-bold text-primary mb-2">Opportunities for Indie Authors</h3>
               <p>Many indie writers struggle to find opportunities in traditional publishing. At Meddlington Press, we champion hidden mavericks—those creative individuals who may be overlooked by mainstream channels. From storyboarding and editing to illustration and marketing guidance, we provide the tools and expertise for indie authors to succeed. Every book we publish is a celebration of imagination, diversity, and unrecognized talent.</p>
            </div>
            <div>
              <h3 className="font-headline text-2xl font-bold text-primary mb-2">Celebrating Imagination and Adventures</h3>
              <p>Our catalogue spans a wide range of genres, emphasizing stories that ignite the imagination and capture the spirit of adventure. We focus on projects that inspire readers and writers alike, encouraging exploration, curiosity, and creativity. By supporting underrepresented voices, Meddlington Press ensures that stories from all backgrounds and perspectives reach the audience they deserve.</p>
            </div>
             <div>
              <h3 className="font-headline text-2xl font-bold text-primary mb-2">A Community for Writers and Readers</h3>
              <p>More than a publisher, Meddlington Press is a community for creators and dreamers. We connect authors with readers, educators, and other writers, building a network that celebrates creativity, innovation, and storytelling. Our website provides resources, news, and updates to help authors navigate the publishing world while inspiring readers to discover new adventures. Whether you are looking to publish your first book or simply explore imaginative worlds, Meddlington Press is your creative home.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-6">
            Get In Touch
          </h2>
          <div className="prose prose-lg max-w-none mx-auto text-foreground/80 mb-8">
            <p>
              Have a question, a submission, or a wholesale inquiry? We'd love to hear from you.
            </p>
          </div>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
            <Link href="/contact">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
