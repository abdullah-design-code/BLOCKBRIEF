import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, ArrowRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getLearnArticlesByCategory, learnArticles } from "@/data/learnArticles";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const learnCategories = [
  { slug: "beginner-guides", label: "Beginner Guides", desc: "Start your crypto journey with simple, clear explanations" },
  { slug: "trading-basics", label: "Trading Basics", desc: "Learn how markets work and what moves crypto prices" },
  { slug: "glossary", label: "Glossary", desc: "Key crypto terms explained in plain English" },
  { slug: "how-to", label: "How-To Articles", desc: "Step-by-step tutorials for practical crypto tasks" },
];

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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
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

            {/* Latest Learn Articles */}
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Latest Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {learnArticles.slice(0, 6).map((article, i) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={`/learn/${article.slug}`}
                    className="group rounded-lg bg-card border border-border overflow-hidden hover:border-primary/30 hover:bg-surface-hover transition-all block h-full"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="category" className="text-[10px]">{article.category}</Badge>
                      </div>
                      <h3 className="font-heading text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1.5">
                        {article.title}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">{article.summary}</p>
                      <div className="flex items-center gap-2 mt-3 text-[10px] text-muted-foreground">
                        <Clock className="h-3 w-3" /> {article.readTime} read
                      </div>
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
  }

  const categoryData = learnCategories.find((c) => c.slug === subcategory);
  const items = getLearnArticlesByCategory(subcategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container">
          <Button variant="ghost" size="sm" className="mb-6" asChild>
            <Link to="/learn">
              <ArrowRight className="h-4 w-4 rotate-180" /> Back to Learning Hub
            </Link>
          </Button>

          <h1 className="font-heading text-3xl font-bold text-foreground mb-2">
            {categoryData?.label || subcategory}
          </h1>
          <p className="text-muted-foreground mb-8">{categoryData?.desc}</p>

          {items.length === 0 ? (
            <p className="text-muted-foreground">No articles in this category yet. Check back soon!</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((article, i) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={`/learn/${article.slug}`}
                    className="group rounded-lg bg-card border border-border overflow-hidden hover:border-primary/30 hover:bg-surface-hover transition-all block h-full"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="category" className="text-[10px]">{article.category}</Badge>
                      </div>
                      <h3 className="font-heading text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1.5">
                        {article.title}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">{article.summary}</p>
                      <div className="flex items-center justify-between mt-3 text-[10px] text-muted-foreground">
                        <span className="rounded-full bg-primary/10 text-primary px-2 py-0.5 font-medium">{article.category}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {article.readTime} read</span>
                      </div>
                    </div>
                  </Link>
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

export default LearnPage;
