"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Wand2, Loader2, Lightbulb } from "lucide-react";

import { generateBookBlurb, type GenerateBookBlurbOutput } from "@/ai/flows/generate-book-blurb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "./ui/badge";

const formSchema = z.object({
  summary: z.string().optional(),
  keywords: z.string().optional(),
}).refine(data => data.summary || data.keywords, {
  message: "Please provide either a summary or some keywords.",
  path: ["summary"],
});

type FormValues = z.infer<typeof formSchema>;

export function BlurbGenerator() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<GenerateBookBlurbOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      summary: "",
      keywords: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setResult(null);

    const keywordsArray = values.keywords?.split(',').map(k => k.trim()).filter(Boolean) || [];
    
    try {
      const output = await generateBookBlurb({
        summary: values.summary,
        keywords: keywordsArray,
      });
      setResult(output);
    } catch (error) {
      console.error("Error generating blurb:", error);
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: "Failed to generate book blurbs. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-12">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl flex items-center gap-2">
            <Wand2 className="h-6 w-6 text-primary" />
            Blurb Generator
          </CardTitle>
          <CardDescription>
            Provide a summary or keywords to generate compelling marketing blurbs for your book.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="summary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Book Summary</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., A young wizard discovers a hidden power..."
                        rows={8}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="keywords"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Keywords</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., magic, fantasy, dragons, coming-of-age" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full font-bold bg-accent hover:bg-accent/90 text-accent-foreground">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Generate Blurbs
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Lightbulb className="h-6 w-6 text-primary" />
          <h2 className="font-headline text-2xl font-bold text-primary">Generated Blurbs</h2>
        </div>
        {isLoading && (
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader>
                  <div className="h-4 bg-muted rounded w-1/4"></div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="h-4 bg-muted rounded w-full"></div>
                  <div className="h-4 bg-muted rounded w-5/6"></div>
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        {result ? (
          <div className="space-y-4">
            {result.blurts.map((blurb, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="font-headline text-xl text-primary flex justify-between items-center">
                    Option {index + 1}
                    <Badge variant="secondary">AI Generated</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/90">{blurb}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          !isLoading && (
            <div className="flex flex-col items-center justify-center text-center p-8 border-2 border-dashed rounded-lg h-full">
              <p className="text-muted-foreground">Your generated book blurbs will appear here.</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
