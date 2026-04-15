import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";

const MarketSentiment = () => {
  const sentimentScore = 72; // 0-100
  const isBullish = sentimentScore > 50;

  return (
    <section id="sentiment" className="py-16">
      <div className="container">
        <div className="rounded-xl bg-card border border-border p-8 sm:p-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="rounded-md bg-primary/10 p-2">
              <Activity className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Market Sentiment</h2>
              <p className="text-sm text-muted-foreground">How the crypto market feels right now</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Gauge */}
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                  <circle
                    cx="60" cy="60" r="50"
                    fill="none"
                    stroke="hsl(var(--border))"
                    strokeWidth="10"
                  />
                  <motion.circle
                    cx="60" cy="60" r="50"
                    fill="none"
                    stroke={isBullish ? "hsl(var(--bullish))" : "hsl(var(--bearish))"}
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={`${sentimentScore * 3.14} 314`}
                    initial={{ strokeDasharray: "0 314" }}
                    whileInView={{ strokeDasharray: `${sentimentScore * 3.14} 314` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-heading text-4xl font-bold text-foreground">{sentimentScore}</span>
                  <span className={`text-sm font-semibold ${isBullish ? "text-bullish" : "text-bearish"}`}>
                    {isBullish ? "Greedy" : "Fearful"}
                  </span>
                </div>
              </div>
            </div>

            {/* Breakdown */}
            <div className="space-y-4">
              {[
                { label: "Bitcoin Dominance", value: "52.3%", change: "+1.2%", up: true },
                { label: "Total Market Cap", value: "$3.8T", change: "+4.5%", up: true },
                { label: "24h Volume", value: "$142B", change: "-2.1%", up: false },
                { label: "Fear & Greed Index", value: "72/100", change: "Greed", up: true },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center justify-between rounded-lg bg-surface p-3">
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-heading text-sm font-semibold text-foreground">{stat.value}</span>
                    <span className={`flex items-center gap-0.5 text-xs font-medium ${stat.up ? "text-bullish" : "text-bearish"}`}>
                      {stat.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                      {stat.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSentiment;
