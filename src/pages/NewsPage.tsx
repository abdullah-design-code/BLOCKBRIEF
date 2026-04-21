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

const NewsPage = () => {
  const location = useLocation();
  const categoryLabel = categoryMap[location.pathname] || null;

  // 🔥 SANITY POSTS
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "post"] | order(_createdAt desc){
        _id,
        title,
        "slug": slug.current,
        image,
        category
      }`)
      .then(setPosts);
  }, []);

  // 🔥 LOCAL POSTS
  const localFiltered = categoryLabel
    ? articles.filter((a) => a.category === categoryLabel)
    : articles;

  // 🔥 MERGE BOTH
  const allPosts = [
    ...posts.map((p) => ({
      id: p._id,
      title: p.title,
      slug: p.slug,
      image: p.image ? urlFor(p.image).width(400).url() : "",
      category: p.category || "General",
    })),
    ...localFiltered,
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Crypto News — BlockBrief" description="Latest crypto news" />
      <Header />

      <main className="pt-24 pb-16">
        <div className="container">

          <div className="flex items-center gap-3 mb-8">
            <div className="rounded-md bg-primary/10 p-2">
              <Newspaper className="h-5 w-5 text-primary" />
            </div>
            <h1 className="text-3xl font-bold">Latest News</h1>
          </div>

          {allPosts.length === 0 ? (
            <p>No posts found</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allPosts.map((article, i) => (
                <motion.div
                  key={article.id || i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
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
