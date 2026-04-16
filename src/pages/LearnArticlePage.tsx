import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getLearnArticleBySlug, getRelatedLearnArticles } from "@/data/learnArticles";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LearnArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = getLearnArticleBySlug(slug || "");

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container pt-32 pb-16 text-center">
          <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Article not found</h1>
          <Button variant="glow" asChild>
            <Link to="/learn">Back to Learning Hub</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const related = getRelatedLearnArticles(article);
  const date = new Date(article.publishedAt).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <article className="container max-w-4xl">
          <Button variant="ghost" size="sm" className="mb-6" asChild>
            <Link to={`/learn/${article.categorySlug}`}>
              <ArrowLeft className="h-4 w-4" /> Back to {article.category}
            </Link>
          </Button>

          <div className="flex items-center gap-2 mb-4">
            <Badge variant="category">{article.category}</Badge>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {article.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {date}</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {article.readTime} read</span>
          </div>

          <div className="rounded-xl overflow-hidden mb-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full aspect-[2/1] object-cover"
            />
          </div>

          <div className="prose-invert max-w-none">
            {article.content.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-foreground/85 leading-relaxed mb-4">{paragraph}</p>
            ))}
          </div>
        </article>

        {related.length > 0 && (
          <section className="container max-w-4xl mt-16">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((a) => (
                <Link
                  key={a.id}
                  to={`/learn/${a.slug}`}
                  className="group rounded-lg bg-card border border-border overflow-hidden hover:border-primary/30 hover:bg-surface-hover transition-all block"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={a.image}
                      alt={a.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <Badge variant="category" className="text-[10px] mb-2">{a.category}</Badge>
                    <h3 className="font-heading text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1.5">
                      {a.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2 text-[10px] text-muted-foreground">
                      <Clock className="h-3 w-3" /> {a.readTime} read
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default LearnArticlePage;
