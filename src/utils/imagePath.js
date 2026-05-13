// Helper function to get the correct image path based on environment
export const getImagePath = (path) => {
  const isProduction = process.env.NODE_ENV === 'production';
  // Servir las imágenes desde la raíz del dominio en producción.
  const basePath = '';

  if (path.startsWith('/')) {
    return `${basePath}${path}`;
  }
  return path;
};
