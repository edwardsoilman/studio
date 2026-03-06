"use client";

import { useState } from 'react';

import type { Book } from '@/lib/types';
import { BookCard } from '@/components/book-card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface BookListProps {
  allBooks: Book[];
}

export function BookList({ allBooks }: BookListProps) {
  const [filter, setFilter] = useState('All');

  const genres = ['All', ...Array.from(new Set(allBooks.map(b => b.genre)))];

  const filteredBooks = filter === 'All' 
    ? allBooks 
    : allBooks.filter(book => book.genre === filter);

  return (
    <div>
      <div className="flex justify-center mb-8">
        <div className="w-full max-w-xs">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="font-headline">
              <SelectValue placeholder="Filter by genre..." />
            </SelectTrigger>
            <SelectContent>
              {genres.map(genre => (
                <SelectItem key={genre} value={genre} className="font-headline">
                  {genre}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredBooks.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {filteredBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-muted-foreground">No books found for this genre.</p>
        </div>
      )}
    </div>
  );
}
