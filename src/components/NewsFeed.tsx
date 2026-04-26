import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles"; // ✅ YOUR OLD DATA RESTORED

type Post = {
  id: string;
  title: string;
  slug: string;
  image?: string;
  category?: string;
  content?: string;
  created_at?: string;
};

const NewsFeed = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  // ✅ SUPABASE POSTS
  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Supabase error:", error);
        return;
      }

      setPosts(data || []);
    };

    fetchPosts();
  }, []);

  // ✅ MAP SUPABASE
  const supabasePosts = posts.map((p) => ({
    id: p.id,
    title: p.title,
    slug: p.slug,
    image: p.image || "",
    category: p.category || "General",
    summary: p.content || p.title,
    publishedAt: p.created_at,
    readTime: "3 min",
    impact: "medium" as const,
    featured: false,
  }));

  // ✅ LOCAL ARTICLES (RESTORED)
  const localPosts = articles.map((a) => ({
    id: a.id,
    title: a.title,
    slug: a.slug,
    image: a.image || "",
    category: a.category,
    summary: a.summary,
    publishedAt: a.publishedAt,
    readTime: a.readTime,
    impact: a.impact,
    featured: a.featured,
  }));

  // ✅ MERGE BOTH SOURCES
  const allPosts = [...supabasePosts, ...localPosts];

  const featured = allPosts[0];
  const rest = allPosts.slice(1, 4);

  return (
    <section id="news" className="py-16">
      <div className="container">

        <div className="flex items-center justify-between mb-8">
          <h2 className="font-heading text-2xl font-bold text-foreground">
            Latest News
          </h2>

          <Button variant="glass" size="sm" asChild>
            <Link to="/news">
              View All <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>

        {allPosts.length === 0 ? (
          <p className="text-muted-foreground">No news found</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {featured && (
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <ArticleCard article={featured} featured />
              </motion.div>
            )}

            <div className="space-y-4">
              {rest.map((article, i) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <ArticleCard article={article} />
                </motion.div>
              ))}
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default NewsFeed;
