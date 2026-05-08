export type GoogleReview = {
  name: string;
  rating: number;
  feedback: string;
  date: string;
  profileImage?: string;
};

export const GOOGLE_MAPS_URL = "https://www.google.co.in/maps/place/Prashant+Jewellers/@24.9392277,75.6071379,17z/data=!3m1!4b1!4m6!3m5!1s0x396587cfddbc1af3:0x664a4a2b98d63681!8m2!3d24.9392229!4d75.6097128!16s%2Fg%2F11qqnyb8_m";

export const googleReviews: GoogleReview[] = [
  {
    name: "Sanya Patel",
    rating: 5,
    feedback: "Every piece from Prashant Jewellers feels premium, polished and perfect for special occasions.",
    date: "2 weeks ago",
    profileImage: "https://ui-avatars.com/api/?name=Sanya+Patel&background=random"
  },
  {
    name: "Amit Singh",
    rating: 5,
    feedback: "The team helped me select the ideal wedding gift with calm service and beautiful designs.",
    date: "1 month ago",
    profileImage: "https://ui-avatars.com/api/?name=Amit+Singh&background=random"
  },
  {
    name: "Nisha Verma",
    rating: 5,
    feedback: "A luxury store with a warm local touch — the jewellery sparkles just like the pictures.",
    date: "3 weeks ago",
    profileImage: "https://ui-avatars.com/api/?name=Nisha+Verma&background=random"
  },
  {
    name: "Rajesh Kumar",
    rating: 4,
    feedback: "Beautiful collection and helpful staff. Found the perfect anniversary gift for my wife.",
    date: "1 week ago",
    profileImage: "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=random"
  },
  {
    name: "Priya Sharma",
    rating: 5,
    feedback: "Excellent quality and craftsmanship. The designs are unique and elegant.",
    date: "2 months ago",
    profileImage: "https://ui-avatars.com/api/?name=Priya+Sharma&background=random"
  }
];

export const averageRating = googleReviews.reduce((sum, review) => sum + review.rating, 0) / googleReviews.length;
export const totalReviews = googleReviews.length;
