import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

const categoryMap: Record<string, string> = {
  bitcoin: "Bitcoin",
  ethereum: "Ethereum",
  altcoins: "Altcoins",
  exchanges: "Exchange",
};

const NewsPage = () => {
  const { category } = useParams<{ category: string }>();

  const categoryLabel = category ? categoryMap[category] || category : null;
  const filtered = categoryLabel
    ? articles.filter((a) => a.category === categoryLabel)
    : articles;

  const title = categoryLabel ? `${categoryLabel} News` : "All News";

  return (
    <div className="min-h-screen bg-background">
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
