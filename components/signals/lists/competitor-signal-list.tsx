"use client";

import { SignalCard } from "../cards/signal-card";
import { useSignals } from "@/hooks/use-signals";
import { motion } from "framer-motion";

export function CompetitorSignalList() {
  const { signals } = useSignals();

  return (
    <section>
      <h2 className="text-lg font-semibold mb-3">Competitor Movements</h2>
      <div className="space-y-3">
        {signals.competitor.map((signal, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <SignalCard signal={signal} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}