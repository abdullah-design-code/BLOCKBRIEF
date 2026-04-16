import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { learnArticles } from "@/data/learnArticles";

const LearningHub = () => {
  const latestGuides = learnArticles.slice(0, 4);

  return (
    <section id="learn" className="py-16">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="rounded-md bg-primary/10 p-2"><GraduationCap className="h-5 w-5 text-primary" /></div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Learning Hub</h2>
              <p className="text-sm text-muted-foreground">Crypto education for beginners</p>
            </div>
          </div>
          <Button variant="glass" size="sm" className="hidden sm:flex" asChild>
            <Link to="/learn">All Guides <ArrowRight className="h-3.5 w-3.5" /></Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {latestGuides.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={`/learn/${article.slug}`}
                className="group block rounded-lg bg-card border border-border overflow-hidden hover:border-primary/30 hover:bg-surface-hover transition-all h-full"
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
                  <Badge variant="category" className="text-[10px] mb-2">{article.category}</Badge>
                  <h3 className="font-heading text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1.5">{article.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{article.summary}</p>
                  <div className="flex items-center justify-between mt-3 text-[10px] text-muted-foreground">
                    <span className="rounded-full bg-primary/10 text-primary px-2 py-0.5 font-medium">{article.category}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {article.readTime} read</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningHub;
