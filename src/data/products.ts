import type { Product } from '@/types';

// Basketry
import b1 from '@/assets/Basketry Natural Fiber/b1.jpeg';
import b2 from '@/assets/Basketry Natural Fiber/b2.jpeg';
import b3 from '@/assets/Basketry Natural Fiber/b3.jpeg';
import b4 from '@/assets/Basketry Natural Fiber/b4.jpeg';
import b5 from '@/assets/Basketry Natural Fiber/b5.jpeg';

// Paintings
import a1 from '@/assets/Folk Tribal Paintains/Buy Soul Of Kerala - Traditional, Folk Art Painting.jpeg';
import a2 from '@/assets/Folk Tribal Paintains/Celebration By Folk Dancers  Vibrant Tribal Dance Celebration Folk Rustic Handmade Painting.jpeg';
import a3 from '@/assets/Folk Tribal Paintains/Radha Krishna - Kerala Mural Painting - Indian Folk Art - Art Prints by Pichwai Art.jpeg';
import a4 from '@/assets/Folk Tribal Paintains/The Lifestyle Portal by Tanya Munshi.jpeg';
import a5 from '@/assets/Folk Tribal Paintains/WhatsApp Image 2026-05-14 at 16.03.21.jpeg';

// Metalcraft
import j1 from '@/assets/Metalcraft Jewelry/j1.jpeg';
import j2 from '@/assets/Metalcraft Jewelry/j2.jpeg';
import j3 from '@/assets/Metalcraft Jewelry/j3.jpeg';
import j4 from '@/assets/Metalcraft Jewelry/j4.jpeg';
import j5 from '@/assets/Metalcraft Jewelry/j5.jpeg';

// Pottery
import p1 from '@/assets/Pottery Terracotta/p1.jpeg';
import p2 from '@/assets/Pottery Terracotta/p2.jpeg';
import p3 from '@/assets/Pottery Terracotta/p3.jpeg';
import p4 from '@/assets/Pottery Terracotta/p4.jpeg';
import p5 from '@/assets/Pottery Terracotta/p5.jpeg';

// Textiles
import t1 from '@/assets/Textiles Embroidery/Aamna Shariff In Mysha Deep Blue Long Choga With Salwar.jpeg';
import t2 from '@/assets/Textiles Embroidery/Deep Purple Hand Embroidered Zardozi Banarasi Kalidar Lehenga With Choli Cut Blouse And Dupatta.jpeg';
import t3 from '@/assets/Textiles Embroidery/Dipti Dhillon In Aafiya - Deep Blue Sharar.jpeg';
import t4 from '@/assets/Textiles Embroidery/Tarini Bhatia In Aafiya - Deep Blue Sharara.jpeg';
import t5 from '@/assets/Textiles Embroidery/Tarini Bhatia In Mishika - Burnt Orange Kurta With Sharara And Dupatta.jpeg';

export const products: Product[] = [
  // Textiles & Embroidery
  {
    id: 'textile-1',
    name: 'Aamna Shariff In Mysha Deep Blue Long Choga',
    category: 'textiles',
    price: 4500,
    rating: 4.8,
    reviewCount: 24,
    region: 'Lucknow, UP',
    material: 'Silk',
    artisan: { name: 'Sanskriti Artisans', region: 'Uttar Pradesh', story: 'Hand-embroidered by master craftsmen.' },
    description: 'Exquisite deep blue long choga with intricate embroidery.',
    inStock: true, stockCount: 5, tags: ['embroidery', 'luxury', 'festive'],
    isFeatured: true, isNew: true,
    sku: 'TEX-001', image: t1
  },
  {
    id: 'textile-2',
    name: 'Zardozi Banarasi Kalidar Lehenga',
    category: 'textiles',
    price: 12500,
    rating: 4.9,
    reviewCount: 12,
    region: 'Varanasi, UP',
    material: 'Banarasi Silk',
    artisan: { name: 'Banaras Weavers', region: 'Uttar Pradesh', story: 'Traditional Zardozi work on pure silk.' },
    description: 'Deep purple hand-embroidered Zardozi Banarasi kalidar lehenga.',
    inStock: true, stockCount: 3, tags: ['wedding', 'zardozi', 'silk'],
    isFeatured: true,
    sku: 'TEX-002', image: t2
  },
  {
    id: 'textile-3',
    name: 'Aafiya Deep Blue Sharara',
    category: 'textiles',
    price: 3800,
    rating: 4.7,
    reviewCount: 45,
    region: 'Lucknow, UP',
    material: 'Cotton',
    artisan: { name: 'Razia Begum', region: 'Lucknow', story: 'Authentic chikankari work.' },
    description: 'Elegant deep blue sharara set with traditional embroidery.',
    inStock: true, stockCount: 10, tags: ['chikankari', 'summer', 'festive'],
    isSale: true, originalPrice: 4200,
    sku: 'TEX-003', image: t3
  },
  {
    id: 'textile-4',
    name: 'Aafiya Deep Blue Sharara',
    category: 'textiles',
    price: 3900,
    rating: 4.6,
    reviewCount: 31,
    region: 'Lucknow, UP',
    material: 'Cotton',
    artisan: { name: 'Razia Begum', region: 'Lucknow', story: 'Authentic chikankari work.' },
    description: 'Beautifully crafted sharara set for special occasions.',
    inStock: true, stockCount: 8, tags: ['chikankari', 'partywear'],
    sku: 'TEX-004', image: t4
  },
  {
    id: 'textile-5',
    name: 'Mishika Burnt Orange Kurta Set',
    category: 'textiles',
    price: 4200,
    rating: 4.8,
    reviewCount: 19,
    region: 'Jaipur, Rajasthan',
    material: 'Cotton Silk',
    artisan: { name: 'Jaipur Crafts', region: 'Rajasthan', story: 'Vibrant colors of Rajasthan.' },
    description: 'Burnt orange kurta with sharara and dupatta.',
    inStock: true, stockCount: 6, tags: ['jaipur', 'orange', 'cotton'],
    sku: 'TEX-005', image: t5
  },

  // Pottery & Terracotta
  {
    id: 'pottery-1',
    name: 'Tribal Harmony Vase Set',
    category: 'pottery',
    price: 850,
    rating: 4.5,
    reviewCount: 56,
    region: 'Bankura, WB',
    material: 'Clay',
    artisan: { name: 'Ravi Kumar', region: 'West Bengal', story: 'Hand-thrown terracotta pottery.' },
    description: 'Traditional terracotta vase with rustic finish.',
    inStock: true, stockCount: 15, tags: ['decor', 'earthy', 'handmade'],
    isFeatured: true,
    sku: 'POT-001', image: p1
  },
  {
    id: 'pottery-2',
    name: 'Desert Bloom Vase',
    category: 'pottery',
    price: 1200,
    rating: 4.6,
    reviewCount: 34,
    region: 'Khurja, UP',
    material: 'Clay',
    artisan: { name: 'Suresh Prajapati', region: 'Uttar Pradesh', story: 'Master of Khurja pottery.' },
    description: 'Beautifully glazed clay pot for home decor.',
    inStock: true, stockCount: 12, tags: ['pottery', 'khurja', 'blue'],
    isNew: true,
    sku: 'POT-002', image: p2
  },
  {
    id: 'pottery-3',
    name: 'Warli Art Pot',
    category: 'pottery',
    price: 950,
    rating: 4.7,
    reviewCount: 42,
    region: 'Rajasthan',
    material: 'Terracotta',
    artisan: { name: 'Mohan Kumhar', region: 'Rajasthan', story: 'Rajasthani clay art.' },
    description: 'Hand-painted terracotta piece for shelf decor.',
    inStock: true, stockCount: 20, tags: ['decor', 'rajasthan', 'clay'],
    isSale: true, originalPrice: 1100,
    sku: 'POT-003', image: p3
  },
  {
    id: 'pottery-4',
    name: 'Sunset Clay Urn',
    category: 'pottery',
    price: 1500,
    rating: 4.8,
    reviewCount: 28,
    region: 'Tamil Nadu',
    material: 'Clay',
    artisan: { name: 'Selvi Amma', region: 'Tamil Nadu', story: 'Traditional southern pottery.' },
    description: 'Sturdy hand-moulded clay vessel for utility and decor.',
    inStock: true, stockCount: 7, tags: ['utility', 'ethnic', 'clay'],
    sku: 'POT-004', image: p4
  },
  {
    id: 'pottery-5',
    name: 'Heritage Round Terracotta Vase',
    category: 'pottery',
    price: 450,
    rating: 4.9,
    reviewCount: 88,
    region: 'Pan-India',
    material: 'Terracotta',
    artisan: { name: 'Village Potters', region: 'Multiple', story: 'Crafted by rural artisans.' },
    description: 'Miniature terracotta figurine reflecting rural life.',
    inStock: true, stockCount: 50, tags: ['miniature', 'gift', 'terracotta'],
    sku: 'POT-005', image: p5
  },

  // Folk & Tribal Paintings
  {
    id: 'painting-1',
    name: 'Soul Of Kerala Traditional Folk Art',
    category: 'paintings',
    price: 3200,
    rating: 4.9,
    reviewCount: 15,
    region: 'Kerala',
    material: 'Canvas',
    artisan: { name: 'Kerala Muralists', region: 'Kerala', story: 'Inspired by temple murals.' },
    description: 'Traditional Kerala folk art painting with vibrant natural colors.',
    inStock: true, stockCount: 4, tags: ['kerala', 'folk', 'wallart'],
    isFeatured: true,
    sku: 'ART-001', image: a1
  },
  {
    id: 'painting-2',
    name: 'Celebration By Folk Dancers',
    category: 'paintings',
    price: 2800,
    rating: 4.8,
    reviewCount: 22,
    region: 'Maharashtra',
    material: 'Handmade Paper',
    artisan: { name: 'Warli Artists', region: 'Maharashtra', story: 'Storytelling through tribal art.' },
    description: 'Vibrant tribal dance celebration depicted in folk style.',
    inStock: true, stockCount: 6, tags: ['tribal', 'dance', 'warli'],
    isNew: true,
    sku: 'ART-002', image: a2
  },
  {
    id: 'painting-3',
    name: 'Radha Krishna Kerala Mural Painting',
    category: 'paintings',
    price: 5500,
    rating: 5.0,
    reviewCount: 10,
    region: 'Kerala',
    material: 'Canvas',
    artisan: { name: 'Pichwai Art Collective', region: 'Rajasthan/Kerala', story: 'Devotional art with intricate details.' },
    description: 'Exquisite Kerala mural painting of Radha and Krishna.',
    inStock: true, stockCount: 2, tags: ['devotional', 'kerala', 'mural'],
    isFeatured: true,
    sku: 'ART-003', image: a3
  },
  {
    id: 'painting-4',
    name: 'Lifestyle Portal Folk Art',
    category: 'paintings',
    price: 1800,
    rating: 4.7,
    reviewCount: 18,
    region: 'Madhubani, Bihar',
    material: 'Handmade Paper',
    artisan: { name: 'Sita Devi', region: 'Bihar', story: 'Master of Mithila art.' },
    description: 'Modern interpretation of traditional Madhubani motifs.',
    inStock: true, stockCount: 9, tags: ['madhubani', 'modern', 'folk'],
    sku: 'ART-004', image: a4
  },
  {
    id: 'painting-5',
    name: 'Vibrant Tribal Landscape',
    category: 'paintings',
    price: 2400,
    rating: 4.6,
    reviewCount: 14,
    region: 'MP',
    material: 'Canvas',
    artisan: { name: 'Gond Art Collective', region: 'Madhya Pradesh', story: 'Dotted patterns of Gond art.' },
    description: 'Captivating tribal landscape in the Gond style.',
    inStock: true, stockCount: 5, tags: ['gond', 'tribal', 'nature'],
    sku: 'ART-005', image: a5
  },

  // Metalcraft & Jewelry
  {
    id: 'metal-1',
    name: 'Emerald Whisper Bracelet',
    category: 'metalcraft',
    price: 1500,
    rating: 4.7,
    reviewCount: 38,
    region: 'Bastar, Chhattisgarh',
    material: 'Brass',
    artisan: { name: 'Ghasi Ram', region: 'Chhattisgarh', story: 'Dokra metal craft specialist.' },
    description: 'Handcrafted Dokra metal jewelry set with tribal motifs.',
    inStock: true, stockCount: 10, tags: ['dokra', 'jewelry', 'tribal'],
    isFeatured: true,
    sku: 'MET-001', image: j1
  },
  {
    id: 'metal-2',
    name: 'Crimson Royale Diamond Set',
    category: 'metalcraft',
    price: 1200,
    rating: 4.6,
    reviewCount: 42,
    region: 'Odisha',
    material: 'Brass',
    artisan: { name: 'Bipin Behera', region: 'Odisha', story: 'Traditional metal smith.' },
    description: 'Elegant brass necklace with a vintage finish.',
    inStock: true, stockCount: 15, tags: ['necklace', 'brass', 'vintage'],
    isSale: true, originalPrice: 1500,
    sku: 'MET-002', image: j2
  },
  {
    id: 'metal-3',
    name: 'Elysian Bloom Jewellery Display',
    category: 'metalcraft',
    price: 850,
    rating: 4.8,
    reviewCount: 56,
    region: 'Karnataka',
    material: 'Silver Alloy',
    artisan: { name: 'Rashid Ahmed', region: 'Karnataka', story: 'Bidriware inspired jewelry.' },
    description: 'Beautifully detailed metal earrings for daily wear.',
    inStock: true, stockCount: 20, tags: ['earrings', 'metal', 'ethnic'],
    isNew: true,
    sku: 'MET-003', image: j3
  },
  {
    id: 'metal-4',
    name: 'Aqua Radiance Eternity Ring',
    category: 'metalcraft',
    price: 950,
    rating: 4.5,
    reviewCount: 29,
    region: 'Jharkhand',
    material: 'Metal & Beads',
    artisan: { name: 'Munni Oraon', region: 'Jharkhand', story: 'Indigenous jewelry maker.' },
    description: 'Bold tribal bangle with intricate engravings.',
    inStock: true, stockCount: 12, tags: ['bangle', 'tribal', 'jewelry'],
    sku: 'MET-004', image: j4
  },
  {
    id: 'metal-5',
    name: 'Celestia Floral Statement Ring',
    category: 'metalcraft',
    price: 1100,
    rating: 4.7,
    reviewCount: 21,
    region: 'Kerala',
    material: 'Bell Metal',
    artisan: { name: 'Sasi Moosari', region: 'Kerala', story: 'Bell metal expert.' },
    description: 'Classic vintage pendant with cultural significance.',
    inStock: true, stockCount: 8, tags: ['pendant', 'vintage', 'kerala'],
    sku: 'MET-005', image: j5
  },

  // Basketry & Natural Fiber
  {
    id: 'basket-1',
    name: 'Handwoven Natural Fiber Basket',
    category: 'basketry',
    price: 950,
    rating: 4.8,
    reviewCount: 62,
    region: 'Assam',
    material: 'Bamboo',
    artisan: { name: 'Bhaben Saikia', region: 'Assam', story: 'Eco-friendly weaving master.' },
    description: 'Strong and sustainable handwoven bamboo basket.',
    inStock: true, stockCount: 25, tags: ['eco', 'bamboo', 'storage'],
    isFeatured: true,
    sku: 'BAS-001', image: b1
  },
  {
    id: 'basket-2',
    name: 'Artisan Woven Storage Basket',
    category: 'basketry',
    price: 1200,
    rating: 4.7,
    reviewCount: 44,
    region: 'Odisha',
    material: 'Sabai Grass',
    artisan: { name: 'Mayurbhanj Women\'s Collective', region: 'Odisha', story: 'Women empowerment through craft.' },
    description: 'Versatile storage basket made from natural sabai grass.',
    inStock: true, stockCount: 18, tags: ['sabai', 'natural', 'home'],
    isNew: true,
    sku: 'BAS-002', image: b2
  },
  {
    id: 'basket-3',
    name: 'Eco-friendly Fiber Tray',
    category: 'basketry',
    price: 750,
    rating: 4.6,
    reviewCount: 31,
    region: 'Kerala',
    material: 'Coir',
    artisan: { name: 'Kerala Coir Cooperative', region: 'Kerala', story: 'Sustainable coconut fiber products.' },
    description: 'Durable and stylish fiber tray for home use.',
    inStock: true, stockCount: 30, tags: ['coir', 'tray', 'eco'],
    isSale: true, originalPrice: 900,
    sku: 'BAS-003', image: b3
  },
  {
    id: 'basket-4',
    name: 'Palm Leaf Utility Basket',
    category: 'basketry',
    price: 650,
    rating: 4.5,
    reviewCount: 52,
    region: 'Tamil Nadu',
    material: 'Palm Leaf',
    artisan: { name: 'Selvi Amma', region: 'Tamil Nadu', story: 'Palm leaf weaving expert.' },
    description: 'Lightweight utility basket for organizing your space.',
    inStock: true, stockCount: 40, tags: ['palm', 'organizer', 'natural'],
    sku: 'BAS-004', image: b4
  },
  {
    id: 'basket-5',
    name: 'Large Cane Laundry Basket',
    category: 'basketry',
    price: 1800,
    rating: 4.9,
    reviewCount: 27,
    region: 'Tripura',
    material: 'Cane',
    artisan: { name: 'Tripura Cane Artisans', region: 'Tripura', story: 'Premium cane products.' },
    description: 'Spacious and durable cane basket for laundry or storage.',
    inStock: true, stockCount: 10, tags: ['cane', 'large', 'storage'],
    sku: 'BAS-005', image: b5
  },
];

export const getProduct = (id: string) => products.find(p => p.id === id);
export const getRelated = (p: Product, n = 4) => products.filter(x => x.category === p.category && x.id !== p.id).slice(0, n);
