"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type ReelItem = {
  title: string;
  caption: string;
  video: string;
  poster: string;
};

const reels: ReelItem[] = [
  {
    title: "Jewellery story",
    caption: "A cinematic look at the design and emotion behind every piece.",
    video: "/videos/snapsave-app_3887463463161134240.mp4",
    poster: "/images/diamond-earrings/diamond-earrings-1.jpg",
  },
  {
    title: "Gold craftsmanship",
    caption: "A close-up look at our premium gold finishing.",
    video: "/videos/snapsave-app_3888615046867991011.mp4",
    poster: "/images/gold-rings/gold-rings-2.jpg",
  },
  {
    title: "Diamond setting",
    caption: "Precision stone setting with expert detail.",
    video: "/videos/snapsave-app_3878745675025974476.mp4",
    poster: "/images/diamond-rings/diamond-rings-3.jpg",
  },
];

export default function VideoReel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = reels[activeIndex];

  return (
    <motion.section
      className="bg-[#fff7ed] py-20"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75 }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <p className="text-sm uppercase tracking-[0.35em] text-gold">Video reel</p>
              <h2 className="text-4xl font-serif tracking-tight text-black sm:text-5xl">
                Jewellery stories in motion.
              </h2>
              <p className="max-w-xl text-lg leading-8 text-gray-600">
                Watch short reels highlighting our craft, design details, and the premium finish that makes each piece memorable.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-3">
              {reels.map((item, index) => (
                <motion.button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ y: -4 }}
                  className={`rounded-3xl border p-4 text-left transition ${
                    index === activeIndex
                      ? "border-black bg-black text-white shadow-premium"
                      : "border-gray-200 bg-white text-gray-700 hover:border-black"
                  }`}
                >
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="mt-2 text-xs leading-5">{item.caption}</p>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2.5rem] bg-black shadow-premium">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.video}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.6 }}
                className="relative aspect-video w-full overflow-hidden"
              >
                <video
                  src={active.video}
                  poster={active.poster}
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
