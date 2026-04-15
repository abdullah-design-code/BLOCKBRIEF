import { motion } from "framer-motion";
import { TrendingUp, Flame, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const trendingStories = [
  {
    id: 1,
    title: "Bitcoin suddenly jumps 8% — what triggered the move?",
    category: "Bitcoin",
    impact: "high" as const,
    time: "12 min ago",
    views: "24.5K",
  },
  {
    id: 2,
    title: "Ethereum upgrade goes live — here's what changed",
    category: "Ethereum",
    impact: "high" as const,
    time: "34 min ago",
    views: "18.2K",
  },
  {
    id: 3,
    title: "Binance announces new listing — coin surges 45%",
    category: "Exchange",
    impact: "medium" as const,
    time: "1 hr ago",
    views: "15.8K",
  },
  {
    id: 4,
    title: "Solana breaks resistance — new all-time high incoming?",
    category: "Altcoins",
    impact: "medium" as const,
    time: "2 hr ago",
    views: "12.1K",
  },
  {
    id: 5,
    title: "Crypto regulation update — what investors must know",
    category: "Regulation",
    impact: "low" as const,
    time: "3 hr ago",
    views: "9.7K",
  },
];

const impactVariant = {
  high: "impact_high" as const,
  medium: "impact_medium" as const,
  low: "impact_low" as const,
};

const TrendingPulse = () => {
  return (
    <section id="trending" className="py-16">
      <div className="container">
        <div className="flex items-center gap-3 mb-8">
          <div className="rounded-md bg-primary/10 p-2">
            <Flame className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground">Trending Pulse</h2>
            <p className="text-sm text-muted-foreground">Top stories right now</p>
          </div>
        </div>

        <div className="space-y-3">
          {trendingStories.map((story, i) => (
            <motion.article
              key={story.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group flex items-center gap-4 rounded-lg bg-card border border-border p-4 hover:border-primary/30 hover:bg-surface-hover transition-all cursor-pointer"
            >
              <span className="font-heading text-2xl font-bold text-muted-foreground/40 w-8 text-center">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="flex-1 min-w-0">
                <h3 className="font-heading text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                  {story.title}
                </h3>
                <div className="flex items-center gap-3 mt-1.5">
                  <Badge variant="category" className="text-[10px]">{story.category}</Badge>
                  <Badge variant={impactVariant[story.impact]} className="text-[10px]">
                    {story.impact} impact
                  </Badge>
                  <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                    <Clock className="h-3 w-3" /> {story.time}
                  </span>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-1 text-xs text-muted-foreground">
                <TrendingUp className="h-3.5 w-3.5" />
                {story.views}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingPulse;
