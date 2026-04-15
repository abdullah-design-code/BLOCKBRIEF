import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MarketSentiment from "@/components/MarketSentiment";
import { TrendingUp, TrendingDown } from "lucide-react";

const coins = [
  { name: "Bitcoin", symbol: "BTC", price: "$98,432", change: "+4.2%", up: true, mcap: "$1.92T" },
  { name: "Ethereum", symbol: "ETH", price: "$3,821", change: "+2.8%", up: true, mcap: "$459B" },
  { name: "Solana", symbol: "SOL", price: "$178", change: "+8.1%", up: true, mcap: "$82B" },
  { name: "BNB", symbol: "BNB", price: "$612", change: "-0.5%", up: false, mcap: "$91B" },
  { name: "XRP", symbol: "XRP", price: "$2.14", change: "+1.3%", up: true, mcap: "$123B" },
  { name: "Cardano", symbol: "ADA", price: "$0.72", change: "-1.8%", up: false, mcap: "$25B" },
];

const MarketsPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-24 pb-16">
      <div className="container">
        <h1 className="font-heading text-3xl font-bold text-foreground mb-2">Markets</h1>
        <p className="text-muted-foreground mb-8">Live crypto market overview</p>

        <div className="rounded-xl bg-card border border-border overflow-hidden mb-12">
          <div className="grid grid-cols-5 gap-4 p-4 text-xs font-semibold text-muted-foreground border-b border-border">
            <span>Coin</span><span>Price</span><span>24h Change</span><span>Market Cap</span><span></span>
          </div>
          {coins.map((coin) => (
            <div key={coin.symbol} className="grid grid-cols-5 gap-4 p-4 items-center hover:bg-surface-hover transition-colors border-b border-border last:border-0">
              <div>
                <span className="font-heading font-semibold text-foreground text-sm">{coin.name}</span>
                <span className="text-xs text-muted-foreground ml-2">{coin.symbol}</span>
              </div>
              <span className="font-heading font-semibold text-foreground text-sm">{coin.price}</span>
              <span className={`flex items-center gap-1 text-sm font-medium ${coin.up ? "text-bullish" : "text-bearish"}`}>
                {coin.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                {coin.change}
              </span>
              <span className="text-sm text-muted-foreground">{coin.mcap}</span>
              <span></span>
            </div>
          ))}
        </div>

        <MarketSentiment />
      </div>
    </main>
    <Footer />
  </div>
);

export default MarketsPage;
