import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getArticleBySlug, getRelatedArticles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const impactVariant = {
  high: "impact_high" as const,
  medium: "impact_medium" as const,
  low: "impact_low" as const,
};

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug || "");

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container pt-32 pb-16 text-center">
          <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Article not found</h1>
          <Button variant="glow" asChild>
            <Link to="/news">Back to News</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const related = getRelatedArticles(article);
  const date = new Date(article.publishedAt).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <article className="container max-w-4xl">
          <Button variant="ghost" size="sm" className="mb-6" asChild>
            <Link to="/news">
              <ArrowLeft className="h-4 w-4" /> Back to News
            </Link>
          </Button>

          <div className="flex items-center gap-2 mb-4">
            <Badge variant="category">{article.category}</Badge>
            <Badge variant={impactVariant[article.impact]}>{article.impact} impact</Badge>
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

          <div className="rounded-xl bg-primary/5 border border-primary/20 p-6 my-8">
            <h3 className="font-heading text-lg font-bold text-primary mb-3 flex items-center gap-2">
              💡 What It Means
            </h3>
            <p className="text-foreground/80 leading-relaxed">{article.whatItMeans}</p>
          </div>
        </article>

        {related.length > 0 && (
          <section className="container max-w-4xl mt-16">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Related News</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((a) => (
                <ArticleCard key={a.id} article={a} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ArticlePage;
