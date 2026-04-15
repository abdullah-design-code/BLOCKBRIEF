import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const learnCategories = [
  { slug: "beginner-guides", label: "Beginner Guides", desc: "Start your crypto journey here" },
  { slug: "trading-basics", label: "Trading Basics", desc: "Learn how to trade crypto" },
  { slug: "glossary", label: "Glossary", desc: "Key crypto terms explained" },
  { slug: "how-to", label: "How-To Articles", desc: "Step-by-step tutorials" },
];

const guides: Record<string, { title: string; desc: string; level: string; readTime: string }[]> = {
  "beginner-guides": [
    { title: "How to Start Crypto Trading in 2026", desc: "A complete step-by-step guide for absolute beginners.", level: "Beginner", readTime: "8 min" },
    { title: "What Is Bitcoin? A Simple Explanation", desc: "Understand Bitcoin without the technical jargon.", level: "Beginner", readTime: "5 min" },
    { title: "What Is Blockchain? Explained Simply", desc: "The technology behind crypto in plain English.", level: "Beginner", readTime: "5 min" },
  ],
  "trading-basics": [
    { title: "Reading Crypto Charts — A Simple Guide", desc: "Learn candlesticks, support/resistance, and volume.", level: "Intermediate", readTime: "10 min" },
    { title: "Market Orders vs Limit Orders", desc: "Know when to use each type of order.", level: "Beginner", readTime: "4 min" },
    { title: "Understanding Crypto Volume", desc: "Why trading volume matters and what it tells you.", level: "Intermediate", readTime: "6 min" },
  ],
  glossary: [
    { title: "Blockchain", desc: "A decentralized digital ledger that records all transactions.", level: "Term", readTime: "2 min" },
    { title: "DeFi (Decentralized Finance)", desc: "Financial services built on blockchain without intermediaries.", level: "Term", readTime: "2 min" },
    { title: "HODL", desc: "A crypto term meaning to hold your coins long-term.", level: "Term", readTime: "1 min" },
    { title: "Gas Fees", desc: "Transaction costs on blockchain networks like Ethereum.", level: "Term", readTime: "2 min" },
  ],
  "how-to": [
    { title: "How to Buy Bitcoin Safely", desc: "Step-by-step guide to purchasing your first BTC.", level: "Beginner", readTime: "6 min" },
    { title: "How to Set Up a Crypto Wallet", desc: "Choose and configure the right wallet for you.", level: "Beginner", readTime: "7 min" },
    { title: "How to Use Binance for Beginners", desc: "Navigate the world's largest crypto exchange.", level: "Beginner", readTime: "8 min" },
  ],
};

const LearnPage = () => {
  const { subcategory } = useParams<{ subcategory: string }>();

  if (!subcategory) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container">
            <div className="flex items-center gap-3 mb-8">
              <div className="rounded-md bg-primary/10 p-2">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h1 className="font-heading text-3xl font-bold text-foreground">Learning Hub</h1>
                <p className="text-sm text-muted-foreground">Crypto education for everyone</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {learnCategories.map((cat, i) => (
                <motion.div
                  key={cat.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={`/learn/${cat.slug}`}
                    className="group block rounded-xl bg-card border border-border p-8 hover:border-primary/30 transition-all"
                  >
                    <BookOpen className="h-8 w-8 text-primary mb-4" />
                    <h2 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                      {cat.label}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4">{cat.desc}</p>
                    <span className="text-sm text-primary flex items-center gap-1">
                      Explore <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const categoryData = learnCategories.find((c) => c.slug === subcategory);
  const items = guides[subcategory] || [];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container">
          <h1 className="font-heading text-3xl font-bold text-foreground mb-2">
            {categoryData?.label || subcategory}
          </h1>
          <p className="text-muted-foreground mb-8">{categoryData?.desc}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group rounded-lg bg-card border border-border p-5 hover:border-primary/30 hover:bg-surface-hover transition-all cursor-pointer"
              >
                <BookOpen className="h-5 w-5 text-primary mb-3" />
                <h3 className="font-heading text-sm font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">{item.desc}</p>
                <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                  <span className="rounded-full bg-primary/10 text-primary px-2 py-0.5 font-medium">{item.level}</span>
                  <span>{item.readTime} read</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LearnPage;
