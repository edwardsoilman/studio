import { BlurbGenerator } from "@/components/blurb-generator";

export const metadata = {
  title: 'AI Blurb Generator | Meddlington Reader',
  description: 'Use our AI-powered tool to generate compelling marketing blurbs for your books.',
};

export default function BlurbGeneratorPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
          AI-Assisted Book Blurb Generator
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
          Struggling with writer's block? Leverage the power of generative AI to create compelling and varied marketing blurbs for your books. Just provide a summary or a few keywords to get started.
        </p>
      </div>
      <BlurbGenerator />
    </div>
  );
}
