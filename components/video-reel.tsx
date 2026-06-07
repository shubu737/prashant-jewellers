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
    poster: "/images/diamond-earrings/diamond-earrings-2.jpg",
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
    poster: "/images/diamond-rings/diamond-rings-7.jpg",
  },
];

export default function VideoReel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = reels[activeIndex];

  return (
    <motion.section className="bg-[#fff7ed] py-14 sm:py-20" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <p className="text-xs uppercase tracking-[0.35em] text-gold">Video reel</p>
              <h2 className="mt-2 text-3xl sm:text-5xl font-serif tracking-tight text-black">
                Jewellery stories in motion.
              </h2>
              <p className="mt-3 max-w-xl text-sm sm:text-lg leading-7 sm:leading-8 text-gray-600">
                Watch short reels highlighting our craft, design details, and the premium finish that makes each piece memorable.
              </p>
            </motion.div>

            <div className="grid gap-3 grid-cols-3">
              {reels.map((item, index) => (
                <motion.button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ y: -4 }}
                  className={`rounded-2xl border p-3 text-left transition ${
                    index === activeIndex
                      ? "border-black bg-black text-white shadow-premium"
                      : "border-gray-200 bg-white text-gray-700 hover:border-black"
                  }`}
                >
                  <p className="text-xs font-semibold">{item.title}</p>
                  <p className="mt-1 text-[10px] leading-4 hidden sm:block">{item.caption}</p>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl sm:rounded-[2.5rem] bg-black shadow-premium">
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
