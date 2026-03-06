import { Mail, Landmark, Newspaper } from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: 'Contact Us | Meddlington Press',
  description: 'Get in touch with Meddlington Press for inquiries, submissions, or wholesale questions.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
          Get in Touch
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          We'd love to hear from you! Whether you have a question, a manuscript, or just want to say hello, here's how you can reach us.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <h2 className="font-headline text-3xl font-bold text-primary">Contact Information</h2>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 pt-1">
              <Mail className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold font-headline text-lg">General Inquiries</h3>
              <p className="text-muted-foreground">For general questions and information.</p>
              <a href="mailto:info@meddlington.com" className="text-primary hover:underline">info@meddlington.com</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 pt-1">
              <Landmark className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold font-headline text-lg">Wholesale</h3>
              <p className="text-muted-foreground">For booksellers and retail partners.</p>
              <a href="mailto:sales@meddlington.com" className="text-primary hover:underline">sales@meddlington.com</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 pt-1">
              <Newspaper className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold font-headline text-lg">Press & Media</h3>
              <p className="text-muted-foreground">For media inquiries and press materials.</p>
              <a href="mailto:press@meddlington.com" className="text-primary hover:underline">press@meddlington.com</a>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-headline text-3xl font-bold text-primary mb-8">Send Us a Message</h2>
          <form action="https://formspree.io/f/mjgeqwnw" method="POST" className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" type="text" placeholder="Your Name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" name="email" type="email" placeholder="your@email.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" placeholder="Your message..." required rows={6} />
            </div>
            <Button type="submit" size="lg" className="w-full font-bold bg-accent hover:bg-accent/90 text-accent-foreground">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
