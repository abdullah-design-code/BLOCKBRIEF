import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { client, urlFor } from "@/lib/sanity";
import ArticleCard from "@/components/ArticleCard";

type SanityPost = {
  _id: string;
  title: string;
  slug: string;
  image?: any;
  category?: string;
};

const NewsFeed = () => {
  const [posts, setPosts] = useState<SanityPost[]>([]);

useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] | order(_createdAt desc){
          _id,
          title,
          "slug": coalesce(slug.current, _id),
          image,
          category
        }`
      )
      .then((data) => {
        console.log("NewsFeed data:", data);
        setPosts(data || []);
      })
      .catch((err) => {
        console.error("Sanity fetch error:", err);
      });
  }, []);

  const sanityMapped = posts.map((p) => ({
    id: p._id,
    title: p.title,
    slug: p.slug,
    image: p.image ? urlFor(p.image).width(400).url() : "",
    category: p.category || "General",
    summary: p.title,
    publishedAt: new Date().toISOString(),
    readTime: "3 min",
    impact: "medium" as const,
    featured: false,
  }));

  const featured = sanityMapped[0];
  const rest = sanityMapped.slice(1, 4);

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

        {sanityMapped.length === 0 ? (
          <p className="text-muted-foreground">Loading news...</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
