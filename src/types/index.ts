export type Category = 'textiles' | 'pottery' | 'paintings' | 'metalcraft' | 'basketry';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  region: string;
  material: string;
  artisan: { name: string; region: string; story: string };
  description: string;
  inStock: boolean;
  stockCount: number;
  tags: string[];
  isSale?: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  sku: string;
  image: string;
}

export const CATEGORY_LABEL: Record<Category, string> = {
  textiles: 'Textiles & Embroidery',
  pottery: 'Pottery & Terracotta',
  paintings: 'Folk & Tribal Paintings',
  metalcraft: 'Metalcraft & Jewelry',
  basketry: 'Basketry & Natural Fiber',
};
