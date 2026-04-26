import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import SEO from "@/components/SEO";

import { supabase } from "@/lib/supabase";

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

  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.log(error);
        setPosts([]);
      } else {
        setPosts(data || []);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = categoryLabel
    ? posts.filter((p) => p.category === categoryLabel)
    : posts;

  const allPosts = filteredPosts.map((p) => ({
    id: p.id,
    title: p.title,
    slug: p.slug,
    image: p.image,
    category: p.category,
    summary: p.content,
    publishedAt: p.created_at,
    readTime: "3 min",
    impact: "medium",
  }));

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
                <motion.div key={article.id || i}>
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
