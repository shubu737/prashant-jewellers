export type Product = {
  slug: string;
  name: string;
  category: string;
  price: string;
  priceValue: number;
  description: string;
  details: string[];
  images: string[];
};

export const products: Product[] = [
  {
    slug: "royal-diamond-ring",
    name: "Royal Diamond Solitaire",
    category: "Diamond Rings",
    price: "₹68,000",
    priceValue: 68000,
    description: "Exquisite solitaire diamond ring with elegant rose gold band. Perfect for engagements and special occasions.",
    details: [
      "18K rose gold",
      "0.75 carat diamond",
      "G-H color, VS clarity",
      "Hand-finished setting"
    ],
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    slug: "emerald-gold-ring",
    name: "Emerald Gold Ring",
    category: "Gold Rings",
    price: "₹45,000",
    priceValue: 45000,
    description: "Stunning emerald stone set in 22K gold with ornate detailing. A sophisticated choice for everyday elegance.",
    details: [
      "22K yellow gold",
      "Natural emerald stone",
      "Traditional design",
      "Adjustable fit"
    ],
    images: [
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    slug: "antique-gold-necklace",
    name: "Antique Gold Necklace",
    category: "Gold Necklaces",
    price: "₹1,25,000",
    priceValue: 125000,
    description: "Traditional antique gold necklace with intricate craftsmanship and timeless design.",
    details: [
      "22K yellow gold",
      "Antique finish",
      "Length: 18 inches",
      "BIS hallmarked"
    ],
    images: [
      "https://images.unsplash.com/photo-1611652022419-52c8c05c85bc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    slug: "silver-bracelet",
    name: "Sterling Silver Bracelet",
    category: "Silver Bracelets",
    price: "₹8,500",
    priceValue: 8500,
    description: "Elegant sterling silver bracelet with modern design. Perfect for daily wear.",
    details: [
      "925 sterling silver",
      "Width: 6mm",
      "Adjustable clasp",
      "Hypoallergenic"
    ],
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    slug: "diamond-earrings",
    name: "Diamond Stud Earrings",
    category: "Diamond Earrings",
    price: "₹95,000",
    priceValue: 95000,
    description: "Classic diamond stud earrings with brilliant cut diamonds in white gold setting.",
    details: [
      "18K white gold",
      "0.5 carat total diamonds",
      "Round brilliant cut",
      "Screw back closure"
    ],
    images: [
      "https://images.unsplash.com/photo-1611652022419-52c8c05c85bc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    slug: "gold-coin-1gm",
    name: "1 Gram Gold Coin",
    category: "Gold Coins",
    price: "₹6,500",
    priceValue: 6500,
    description: "Pure 24K gold coin perfect for investment and gifting.",
    details: [
      "24K pure gold",
      "Weight: 1 gram",
      "Investment grade",
      "Certificate included"
    ],
    images: [
      "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=80"
    ]
  }
];

export const categories = Array.from(new Set(products.map(product => product.category)));

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}