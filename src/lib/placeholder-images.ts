import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

const placeholderImages: ImagePlaceholder[] = data.placeholderImages;

const imagesById = new Map(placeholderImages.map(image => [image.id, image]));

export function getPlaceholderImage(id: string): ImagePlaceholder {
  const image = imagesById.get(id);
  if (!image) {
    // Return a default or throw an error
    return {
      id: 'not-found',
      description: 'Image not found',
      imageUrl: 'https://picsum.photos/seed/error/400/600',
      imageHint: 'placeholder',
    };
  }
  return image;
}
