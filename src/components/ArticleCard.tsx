import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Article } from "@/data/articles";

const impactVariant = {
  high: "impact_high" as const,
  medium: "impact_medium" as const,
  low: "impact_low" as const,
};

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

const ArticleCard = ({ article, featured }: ArticleCardProps) => {
  if (featured) {
    return (
      <Link
        to={`/news/${article.slug}`}
        className="group lg:col-span-2 rounded-xl bg-card border border-border overflow-hidden hover:border-primary/30 transition-all block"
      >
        <div className="aspect-[2/1] overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="category">{article.category}</Badge>
            <Badge variant={impactVariant[article.impact]}>{article.impact} impact</Badge>
            <span className="flex items-center gap-1 text-xs text-muted-foreground ml-auto">
              <Clock className="h-3 w-3" /> {article.readTime} read
            </span>
          </div>
          <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
            {article.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{article.summary}</p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/news/${article.slug}`}
      className="group rounded-lg bg-card border border-border overflow-hidden hover:border-primary/30 hover:bg-surface-hover transition-all block"
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
          <Badge variant={impactVariant[article.impact]} className="text-[10px]">{article.impact}</Badge>
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
  );
};

export default ArticleCard;
