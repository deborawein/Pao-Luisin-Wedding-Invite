export const GALLERY_PHOTOS = Array.from({ length: 9 }, (_, index) => ({
  src: `/slide/photo${index + 1}.jpg`,
  alt: `Sesión de fotos ${index + 1}`,
}));
