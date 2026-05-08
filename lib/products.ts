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
    category: "Rings",
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
    category: "Rings",
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
    slug: "ruby-wedding-ring",
    name: "Ruby Wedding Band",
    category: "Rings",
    price: "₹55,000",
    priceValue: 55000,
    description: "Classic ruby and gold wedding ring with timeless appeal. Symbolizes eternal love and commitment.",
    details: [
      "22K gold",
      "Burmese ruby",
      "Diamond accents",
      "Certificate of authenticity"
    ],
    images: [
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    slug: "traditional-gold-necklace",
    name: "Temple Gold Necklace",
    category: "Necklaces",
    price: "₹1,25,000",
    priceValue: 125000,
    description: "Authentic temple design necklace with intricate carvings and traditional Rajasthani motifs.",
    details: [
      "22K pure gold",
      "Temple design",
      "Handcrafted details",
      "30 grams approximately"
    ],
    images: [
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    slug: "diamond-chain-necklace",
    name: "Diamond Chain Necklace",
    category: "Necklaces",
    price: "₹95,000",
    priceValue: 95000,
    description: "Delicate diamond-studded chain in 18K white gold. Perfect for weddings and formal events.",
    details: [
      "18K white gold",
      "VS diamonds",
      "2.5 carats total",
      "18-inch length"
    ],
    images: [
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    slug: "pearl-pendant-necklace",
    name: "Pearl Pendant Necklace",
    category: "Necklaces",
    price: "₹38,500",
    priceValue: 38500,
    description: "Elegant freshwater pearl pendant with gold frame. A sophisticated choice for daily wear.",
    details: [
      "22K gold plated",
      "Natural pearl",
      "Modern pendant design",
      "16-inch chain"
    ],
    images: [
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    slug: "modern-gold-hoops",
    name: "Modern Gold Hoops",
    category: "Earrings",
    price: "₹22,500",
    priceValue: 22500,
    description: "Contemporary gold hoops with a polished finish. Perfect for both casual and formal occasions.",
    details: [
      "22K gold",
      "Large hoop design",
      "Lightweight",
      "Push-back closure"
    ],
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    slug: "diamond-stud-earrings",
    name: "Diamond Stud Earrings",
    category: "Earrings",
    price: "₹75,000",
    priceValue: 75000,
    description: "Classic diamond studs in 18K white gold. A timeless investment piece that complements any style.",
    details: [
      "18K white gold",
      "1 carat diamonds",
      "VS clarity",
      "Certified authentic"
    ],
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    slug: "pearl-drop-earrings",
    name: "Pearl Drop Earrings",
    category: "Earrings",
    price: "₹28,000",
    priceValue: 28000,
    description: "Elegant pearl drops with gold accents. Ideal for weddings, festivities, and special events.",
    details: [
      "22K gold frame",
      "Natural pearls",
      "Traditional design",
      "Comfortable wear"
    ],
    images: [
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    slug: "heritage-gold-bangle",
    name: "Heritage Gold Bangle",
    category: "Bangles",
    price: "₹48,000",
    priceValue: 48000,
    description: "Exquisite bangle with traditional carvings and ornate detailing. A staple for Indian weddings.",
    details: [
      "22K gold",
      "Traditional carved design",
      "Comfort fit opening",
      "32mm width"
    ],
    images: [
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    slug: "diamond-bangle-bracelet",
    name: "Diamond Bangle Bracelet",
    category: "Bangles",
    price: "₹1,85,000",
    priceValue: 185000,
    description: "Luxurious bangle bracelet studded with VS diamonds. Perfect for celebrations and formal wear.",
    details: [
      "18K white gold",
      "3 carats diamonds",
      "VS clarity",
      "Hinged clasp"
    ],
    images: [
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    slug: "ruby-gold-bangle",
    name: "Ruby Gold Bangle",
    category: "Bangles",
    price: "₹65,000",
    priceValue: 65000,
    description: "Stunning bangle featuring Burmese rubies with gold accents. Perfect for any occasion.",
    details: [
      "22K gold",
      "Natural rubies",
      "Diamond studded",
      "Traditional design"
    ],
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1200&q=80"
    ]
  }
];

export const categories = ["All", "Rings", "Necklaces", "Earrings", "Bangles"];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: string) {
  if (category === "All") {
    return products;
  }
  return products.filter((product) => product.category === category);
}
