export interface GalleryImage {
  id: string;
  url: string;
  category: "before-after" | "freshest-hair";
  uploadedAt: Date;
}
