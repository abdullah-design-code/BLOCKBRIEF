import { useEffect, useState } from "react";
import { client, urlFor } from "@/lib/sanity";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import SEO from "@/components/SEO";
import { articles } from "@/data/articles";

const categoryMap: Record<string, string> = {
  "/news/bitcoin": "Bitcoin",
  "/news/ethereum": "Ethereum",
  "/news/altcoins": "Altcoins",
  "/news/exchanges": "Exchange",
  "/news/market": "Market",
  "/news/regulations": "Regulation",
  "/news/trending": "Trending",
};

const seoMap: Record<string, { title: string; desc: string; keywords: string }> = {
  Bitcoin: { title: "Bitcoin News & Price Updates — BlockBrief", desc: "Latest Bitcoin news, BTC price analysis, halving updates, and institutional adoption coverage.", keywords: "bitcoin news, BTC price, bitcoin analysis, btc 2026" },
  Ethereum: { title: "Ethereum News & ETH Updates — BlockBrief", desc: "Latest Ethereum news, ETH price moves, network upgrades, and DeFi developments.", keywords: "ethereum news, ETH price, ethereum upgrade, defi" },
  Altcoins: { title: "Altcoin News & Top Movers — BlockBrief", desc: "Top altcoin news, gainers, and analysis on Solana, XRP, and emerging crypto projects.", keywords: "altcoin news, solana, xrp, crypto gainers" },
  Exchange: { title: "Crypto Exchange News & Updates — BlockBrief", desc: "Binance, Coinbase, and exchange industry updates: listings, regulations, and security.", keywords: "binance news, coinbase, crypto exchange updates" },
  Market: { title: "Crypto Market News & Analysis — BlockBrief", desc: "Crypto market trends, volatility analysis, macro impacts, and sentiment for traders.", keywords: "crypto market news, crypto analysis, market trends" },
  Regulation: { title: "Crypto Regulation News — BlockBrief", desc: "Global crypto regulation news, SEC actions, MiCA updates, and compliance insights.", keywords: "crypto regulation, SEC crypto, MiCA, government crypto crackdown" },
  Trending: { title: "Trending Crypto News & Viral Stories — BlockBrief", desc: "What is trending in crypto right now: viral stories, hot coins, and breaking news.", keywords: "trending crypto, viral crypto news, hot coins" },
};

const NewsPage = () => {
  const location = useLocation();
  const categoryLabel = categoryMap[location.pathname] || null;
  const filtered = categoryLabel
    ? articles.filter((a) => a.category === categoryLabel)
    : articles;

  const title = categoryLabel ? `${categoryLabel} News` : "All News";
  const seo = categoryLabel ? seoMap[categoryLabel] : { title: "Crypto News — BlockBrief", desc: "All the latest cryptocurrency news, market updates, and analysis. Bitcoin, Ethereum, altcoins, and beyond.", keywords: "crypto news, cryptocurrency news, bitcoin news" };

  return (
    <div className="min-h-screen bg-background">
      <SEO title={seo.title} description={seo.desc} keywords={seo.keywords} path={location.pathname} />
      <Header />
      <main className="pt-24 pb-16">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="rounded-md bg-primary/10 p-2">
              <Newspaper className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="font-heading text-3xl font-bold text-foreground">{title}</h1>
              <p className="text-sm text-muted-foreground">
                {categoryLabel ? `Latest ${categoryLabel} updates` : "All the latest crypto news"}
              </p>
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="text-muted-foreground">No articles found in this category yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((article, i) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <ArticleCard article={article} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NewsPage;
