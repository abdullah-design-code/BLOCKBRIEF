import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";
import { useFearGreed, useGlobalMarket, formatUsd, formatPct } from "@/hooks/useCryptoData";
import { Skeleton } from "@/components/ui/skeleton";

const MarketSentiment = () => {
  const { data: fng } = useFearGreed();
  const { data: global } = useGlobalMarket();

  const sentimentScore = fng?.value ?? 50;
  const isBullish = sentimentScore > 50;
  const label = fng?.classification ?? "Neutral";

  const stats = [
    {
      label: "Bitcoin Dominance",
      value: global ? `${global.btc_dominance.toFixed(1)}%` : null,
      change: null,
      up: true,
    },
    {
      label: "Total Market Cap",
      value: global ? formatUsd(global.total_market_cap_usd) : null,
      change: global ? formatPct(global.market_cap_change_percentage_24h_usd) : null,
      up: (global?.market_cap_change_percentage_24h_usd ?? 0) >= 0,
    },
    {
      label: "24h Volume",
      value: global ? formatUsd(global.total_volume_usd) : null,
      change: null,
      up: true,
    },
    {
      label: "Fear & Greed Index",
      value: fng ? `${fng.value}/100` : null,
      change: label,
      up: isBullish,
    },
  ];

  return (
    <section id="sentiment" className="py-16">
      <div className="container">
        <div className="rounded-xl bg-card border border-border p-8 sm:p-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="rounded-md bg-primary/10 p-2">
              <Activity className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="font-heading text-2xl font-bold text-foreground">Market Sentiment</h2>
              <p className="text-sm text-muted-foreground">Live data · refreshes every 30s</p>
            </div>
            <span className="text-xs text-muted-foreground flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-bullish animate-pulse" />
              Live
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Gauge */}
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="hsl(var(--border))" strokeWidth="10" />
                  <motion.circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke={isBullish ? "hsl(var(--bullish))" : "hsl(var(--bearish))"}
                    strokeWidth="10"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: "0 314" }}
                    animate={{ strokeDasharray: `${sentimentScore * 3.14} 314` }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-heading text-4xl font-bold text-foreground">{sentimentScore}</span>
                  <span className={`text-sm font-semibold ${isBullish ? "text-bullish" : "text-bearish"}`}>
                    {label}
                  </span>
                </div>
              </div>
            </div>

            {/* Breakdown */}
            <div className="space-y-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center justify-between rounded-lg bg-surface p-3">
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                  <div className="flex items-center gap-2">
                    {stat.value ? (
                      <span className="font-heading text-sm font-semibold text-foreground">{stat.value}</span>
                    ) : (
                      <Skeleton className="h-4 w-16" />
                    )}
                    {stat.change && (
                      <span className={`flex items-center gap-0.5 text-xs font-medium ${stat.up ? "text-bullish" : "text-bearish"}`}>
                        {stat.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                        {stat.change}
                      </span>
                    )}
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
