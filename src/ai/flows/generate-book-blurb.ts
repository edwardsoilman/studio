'use server';
/**
 * @fileOverview An AI agent that generates marketing blurbs for books.
 *
 * - generateBookBlurb - A function that handles the book blurb generation process.
 * - GenerateBookBlurbInput - The input type for the generateBookBlurb function.
 * - GenerateBookBlurbOutput - The return type for the generateBookBlurb function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateBookBlurbInputSchema = z.object({
  summary: z.string().optional().describe('A summary of the book plot, themes, or core concept.'),
  keywords: z.array(z.string()).optional().describe('A list of keywords or tags relevant to the book, such as genre, key characters, or settings.'),
}).refine(data => data.summary || (data.keywords && data.keywords.length > 0), {
  message: 'At least one of "summary" or "keywords" must be provided.',
  path: ['summary', 'keywords'],
});
export type GenerateBookBlurbInput = z.infer<typeof GenerateBookBlurbInputSchema>;

const GenerateBookBlurbOutputSchema = z.object({
  blurts: z.array(z.string()).describe('An array of compelling marketing blurbs for the book. Exactly 3 blurbs will be generated.'),
});
export type GenerateBookBlurbOutput = z.infer<typeof GenerateBookBlurbOutputSchema>;

export async function generateBookBlurb(input: GenerateBookBlurbInput): Promise<GenerateBookBlurbOutput> {
  return generateBookBlurbFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBookBlurbPrompt',
  input: { schema: GenerateBookBlurbInputSchema },
  output: { schema: GenerateBookBlurbOutputSchema },
  prompt: `You are a professional marketing copywriter for a publishing house, specializing in creating compelling and enticing book blurbs. Your goal is to generate 3 distinct and captivating marketing blurbs that will hook readers and encourage them to buy the book.

Use the following information to craft the blurbs:

{{#if summary}}
Book Summary:
{{{summary}}}
{{/if}}

{{#if keywords}}
Keywords: {{#each keywords}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
{{/if}}

Ensure the blurbs highlight the core appeal of the book, its genre, and any unique selling points derived from the summary or keywords. Each blurb should be concise and impactful, suitable for promotional materials.

Generate exactly 3 blurbs.`,
});

const generateBookBlurbFlow = ai.defineFlow(
  {
    name: 'generateBookBlurbFlow',
    inputSchema: GenerateBookBlurbInputSchema,
    outputSchema: GenerateBookBlurbOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
