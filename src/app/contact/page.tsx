import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export const metadata = {
  title: 'Contact Us | Meddlington Press',
  description: 'Get in touch with Meddlington Press for inquiries, submissions, or wholesale questions.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-foreground/80">
            We’d love to hear from you.
          </p>
          <div className="mt-4 flex items-center justify-center text-muted-foreground">
            <MapPin className="h-5 w-5 mr-2" />
            <span>Westport, Ireland</span>
          </div>
        </div>

        <div className="bg-card p-8 rounded-lg shadow-sm">
          <p className="text-center text-muted-foreground mb-8">
            Use this form to get in touch with Meddlington Press. Your message will go directly to our inbox. We value your privacy and do not display our email publicly.
          </p>
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
            <Button type="submit" size="lg" className="w-full font-bold">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
