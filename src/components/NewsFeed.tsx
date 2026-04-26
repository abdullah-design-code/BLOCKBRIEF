import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import ArticleCard from "@/components/ArticleCard";

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

  // ✅ SUPABASE FETCH ONLY
  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Supabase fetch error:", error);
        return;
      }

      setPosts(data || []);
    };

    fetchPosts();
  }, []);

  // ✅ MAP SUPABASE DATA
  const mappedPosts = posts.map((p) => ({
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

  const featured = mappedPosts[0];
  const rest = mappedPosts.slice(1, 4);

  return (
    <section id="news" className="py-16">
      <div className="container">

        {/* HEADER */}
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

        {/* EMPTY STATE */}
        {mappedPosts.length === 0 ? (
          <p className="text-muted-foreground">No news found</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* FEATURED */}
            {featured && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <ArticleCard article={featured} featured />
              </motion.div>
            )}

            {/* LIST */}
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
