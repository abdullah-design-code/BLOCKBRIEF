import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MarketSentiment from "@/components/MarketSentiment";
import { TrendingUp, TrendingDown, Loader2 } from "lucide-react";
import { useCoins, formatUsd, formatPct } from "@/hooks/useCryptoData";
import { Skeleton } from "@/components/ui/skeleton";

const MarketsPage = () => {
  const { data: coins, loading, error } = useCoins(10);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container">
          <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
            <h1 className="font-heading text-3xl font-bold text-foreground">Markets</h1>
            <span className="text-xs text-muted-foreground flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-bullish animate-pulse" />
              Live · auto-refresh 30s
            </span>
          </div>
          <p className="text-muted-foreground mb-8">Live crypto market overview powered by CoinGecko</p>

          {error && (
            <div className="rounded-lg border border-bearish/30 bg-bearish/5 text-bearish p-4 mb-6 text-sm">
              {error}. Retrying automatically…
            </div>
          )}

          <div className="rounded-xl bg-card border border-border overflow-hidden mb-12">
            <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] sm:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-4 p-4 text-xs font-semibold text-muted-foreground border-b border-border">
              <span>Coin</span>
              <span className="text-right">Price</span>
              <span className="text-right">24h %</span>
              <span className="text-right hidden sm:block">Market Cap</span>
              <span className="text-right">Volume</span>
            </div>

            {loading && !coins
              ? Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="grid grid-cols-[1.5fr_1fr_1fr_1fr] sm:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-4 p-4 items-center border-b border-border last:border-0">
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-4 w-16 ml-auto" />
                    <Skeleton className="h-4 w-12 ml-auto" />
                    <Skeleton className="h-4 w-16 ml-auto hidden sm:block" />
                    <Skeleton className="h-4 w-16 ml-auto" />
                  </div>
                ))
              : coins?.map((coin) => {
                  const up = (coin.price_change_percentage_24h ?? 0) >= 0;
                  return (
                    <div
                      key={coin.id}
                      className="grid grid-cols-[1.5fr_1fr_1fr_1fr] sm:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-4 p-4 items-center hover:bg-surface-hover transition-colors border-b border-border last:border-0"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <img src={coin.image} alt={coin.name} className="h-7 w-7 rounded-full flex-shrink-0" loading="lazy" />
                        <div className="min-w-0">
                          <span className="font-heading font-semibold text-foreground text-sm truncate block">
                            {coin.name} <span className="text-muted-foreground uppercase text-xs">({coin.symbol})</span>
                          </span>
                        </div>
                      </div>
                      <span className="font-heading font-semibold text-foreground text-sm text-right">
                        {formatUsd(coin.current_price, false)}
                      </span>
                      <span className={`flex items-center justify-end gap-1 text-sm font-medium ${up ? "text-bullish" : "text-bearish"}`}>
                        {up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                        {formatPct(coin.price_change_percentage_24h)}
                      </span>
                      <span className="text-sm text-muted-foreground text-right hidden sm:block">{formatUsd(coin.market_cap)}</span>
                      <span className="text-sm text-muted-foreground text-right">{formatUsd(coin.total_volume)}</span>
                    </div>
                  );
                })}
          </div>

          <MarketSentiment />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MarketsPage;
