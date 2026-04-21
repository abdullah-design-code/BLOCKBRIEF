import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { client, urlFor } from "@/lib/sanity";
import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

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
  const category = categoryMap[location.pathname];

  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "post"] | order(_createdAt desc){
        _id,
        title,
        slug,
        image,
        category
      }`)
      .then(setPosts);
  }, []);

  const filtered = category
    ? posts.filter((p) => p.category === category)
    : posts;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Crypto News — BlockBrief"
        description="Latest crypto news, Bitcoin, Ethereum, altcoins and market updates."
        path={location.pathname}
      />

      <Header />

      <main className="pt-24 pb-16">
        <div className="container">

          <div className="flex items-center gap-3 mb-8">
            <Newspaper className="text-primary" />
            <h1 className="text-3xl font-bold">
              {category || "All News"}
            </h1>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {filtered.map((post) => (
              <motion.div
                key={post._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Link to={`/news/${post.slug.current}`}>
                  <div className="bg-card p-4 rounded-lg">

                    {post.image && (
                      <img
                        src={urlFor(post.image).width(400).url()}
                        className="rounded-md"
                      />
                    )}

                    <h2 className="mt-3 font-bold">
                      {post.title}
                    </h2>

                    <p className="text-sm text-gray-400">
                      {post.category}
                    </p>

                  </div>
                </Link>
              </motion.div>
            ))}

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewsPage;
