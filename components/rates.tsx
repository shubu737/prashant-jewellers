"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type RatesState = {
  gold22k: number;
  gold18k: number;
  silver: number;
  silver925: number;
};

type Trend = Record<keyof RatesState, "up" | "down" | "same">;

const initialRates: RatesState = {
  gold22k: 13995,
  gold18k: 11459,
  silver: 237,
  silver925: 258,
};

const rateLabels: { key: keyof RatesState; label: string }[] = [
  { key: "gold22k", label: "22 KT Gold" },
  { key: "gold18k", label: "18 KT Gold" },
  { key: "silver", label: "Silver" },
  { key: "silver925", label: "Silver 92.5" },
];

function formatAmount(value: number) {
  return value.toLocaleString("en-IN");
}

function randomDelta(value: number) {
  const maxChange = value * 0.0018;
  return Number((Math.random() * maxChange * 2 - maxChange).toFixed(0));
}

export default function Rates() {
  const [rates, setRates] = useState<RatesState>(initialRates);
  const [trend, setTrend] = useState<Trend>({
    gold22k: "same",
    gold18k: "same",
    silver: "same",
    silver925: "same",
  });
  const [updatedAt, setUpdatedAt] = useState<string>("");

  useEffect(() => {
    setUpdatedAt(new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true }));
    const interval = window.setInterval(() => {
      setRates((prevRates) => {
        const nextRates = { ...prevRates };
        const nextTrend: Partial<Trend> = {};

        (Object.keys(prevRates) as Array<keyof RatesState>).forEach((key) => {
          const delta = randomDelta(prevRates[key]);
          const nextValue = Math.max(1, prevRates[key] + delta);
          nextRates[key] = nextValue;
          nextTrend[key] = delta > 0 ? "up" : delta < 0 ? "down" : "same";
        });

        setTrend(nextTrend as Trend);
        return nextRates;
      });
      setUpdatedAt(new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true }));
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 text-white py-2.5 overflow-x-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-xs text-gray-300 shrink-0">
            <span className="font-medium text-white">Live rates</span>
            {updatedAt && <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-widest text-white/70">Updated {updatedAt}</span>}
          </div>

          <div className="flex items-center gap-4 sm:gap-6 text-xs overflow-x-auto pb-0.5">
            {rateLabels.map((item, index) => (
              <div key={item.key} className="flex items-center gap-1.5 shrink-0">
                <span className="font-medium text-gray-200">{item.label}:</span>
                <motion.span
                  key={rates[item.key]}
                  initial={{ opacity: 0.4, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="flex items-center gap-1 text-yellow-400"
                >
                  ₹{formatAmount(rates[item.key])}
                  <span
                    className={`text-xs font-semibold ${
                      trend[item.key] === "up"
                        ? "text-emerald-300"
                        : trend[item.key] === "down"
                        ? "text-rose-300"
                        : "text-gray-300"
                    }`}
                  >
                    {trend[item.key] === "up" ? "▲" : trend[item.key] === "down" ? "▼" : "■"}
                  </span>
                </motion.span>
                {index < rateLabels.length - 1 && <span className="hidden xl:block w-px h-4 bg-gray-700" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
