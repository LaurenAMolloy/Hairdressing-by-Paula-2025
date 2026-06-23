export interface GalleryImage {
  id: string;
  url: string;
  category: "before-after" | "freshest-hair";
  uploadedAt: Date;
}

export interface GalleryPair {
  before: { src: string; alt: string };
  after: { src: string; alt: string };
  title?: string;
  description?: string;
  category?: string;
}
