import { motion } from "framer-motion";
import { TrendingUp, Flame, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { articles } from "@/data/articles";

const impactVariant = {
  high: "impact_high" as const,
  medium: "impact_medium" as const,
  low: "impact_low" as const,
};

const TrendingPulse = () => {
  const trending = articles.slice(0, 5);

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
          {trending.map((story, i) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={`/news/${story.slug}`}
                className="group flex items-center gap-4 rounded-lg bg-card border border-border p-4 hover:border-primary/30 hover:bg-surface-hover transition-all"
              >
                <span className="font-heading text-2xl font-bold text-muted-foreground/40 w-8 text-center">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="hidden sm:block w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={story.image} alt={story.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                    {story.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-1.5">
                    <Badge variant="category" className="text-[10px]">{story.category}</Badge>
                    <Badge variant={impactVariant[story.impact]} className="text-[10px]">{story.impact} impact</Badge>
                    <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                      <Clock className="h-3 w-3" /> {story.readTime}
                    </span>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-1 text-xs text-muted-foreground">
                  <TrendingUp className="h-3.5 w-3.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingPulse;
