import { motion } from "framer-motion";
import { ArrowRight, Clock, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Article {
  id: number;
  title: string;
  summary: string;
  whatItMeans: string;
  category: string;
  impact: "low" | "medium" | "high";
  time: string;
  readTime: string;
  featured?: boolean;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Bitcoin ETF inflows hit record $2.4B — institutions are all in",
    summary: "Major Wall Street firms poured record capital into Bitcoin ETFs this week, signaling unprecedented institutional confidence in the crypto market.",
    whatItMeans: "Big money is betting on Bitcoin long-term. This usually pushes prices up over the next few weeks. If you're holding BTC, this is a positive signal.",
    category: "Bitcoin",
    impact: "high",
    time: "25 min ago",
    readTime: "3 min",
    featured: true,
  },
  {
    id: 2,
    title: "Binance launches zero-fee trading for new pairs",
    summary: "Binance removes trading fees for 5 new crypto pairs to boost volume and attract new users to the platform.",
    whatItMeans: "Great news for traders — you can save money on trades. This usually increases activity on Binance and can push these coins' prices up short-term.",
    category: "Exchange",
    impact: "medium",
    time: "1 hr ago",
    readTime: "2 min",
  },
  {
    id: 3,
    title: "Solana ecosystem explodes — TVL up 150% this month",
    summary: "Total value locked in Solana DeFi protocols has surged dramatically as new projects launch on the network.",
    whatItMeans: "More money flowing into Solana means more trust in the network. SOL price could follow. Worth watching if you're interested in altcoins.",
    category: "Altcoins",
    impact: "medium",
    time: "2 hr ago",
    readTime: "4 min",
  },
  {
    id: 4,
    title: "Crypto tax rules changing in 2026 — here's what you need to know",
    summary: "New regulations require exchanges to report user transactions. Here's a beginner-friendly breakdown of what this means for your portfolio.",
    whatItMeans: "Don't panic. This mostly affects large traders. Keep records of your trades and you'll be fine. Start using a crypto tax tool if you haven't already.",
    category: "Regulation",
    impact: "low",
    time: "4 hr ago",
    readTime: "5 min",
  },
];

const impactVariant = {
  high: "impact_high" as const,
  medium: "impact_medium" as const,
  low: "impact_low" as const,
};

const NewsFeed = () => {
  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <section id="news" className="py-16">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-heading text-2xl font-bold text-foreground">Latest News</h2>
          <Button variant="glass" size="sm">
            View All <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured article */}
          {featured && (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 group rounded-xl bg-card border border-border overflow-hidden hover:border-primary/30 transition-all cursor-pointer"
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="category">{featured.category}</Badge>
                  <Badge variant={impactVariant[featured.impact]}>{featured.impact} impact</Badge>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground ml-auto">
                    <Clock className="h-3 w-3" /> {featured.time}
                  </span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                  {featured.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {featured.summary}
                </p>

                <div className="rounded-lg bg-primary/5 border border-primary/15 p-4">
                  <p className="text-xs font-semibold text-primary mb-1.5 flex items-center gap-1.5">
                    💡 What It Means
                  </p>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {featured.whatItMeans}
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-5 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Eye className="h-3 w-3" /> {featured.readTime} read</span>
                </div>
              </div>
            </motion.article>
          )}

          {/* Side articles */}
          <div className="space-y-4">
            {rest.map((article, i) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-lg bg-card border border-border p-5 hover:border-primary/30 hover:bg-surface-hover transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="category" className="text-[10px]">{article.category}</Badge>
                  <Badge variant={impactVariant[article.impact]} className="text-[10px]">{article.impact}</Badge>
                </div>
                <h3 className="font-heading text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                  {article.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2">{article.summary}</p>
                <div className="flex items-center gap-2 mt-3 text-[10px] text-muted-foreground">
                  <Clock className="h-3 w-3" /> {article.time}
                  <span className="ml-auto">{article.readTime} read</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsFeed;
