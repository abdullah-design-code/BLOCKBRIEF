import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { client, urlFor } from "@/lib/sanity";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const impactVariant = {
  high: "impact_high",
  medium: "impact_medium",
  low: "impact_low",
};

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>(null);

 useEffect(() => {
  if (!slug) return;

  supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .single()
    .then(({ data }) => setPost(data));
}, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${post.title} — BlockBrief`}
        description={post.content?.slice(0, 150)}
        path={`/news/${slug}`}
      />

      <Header />

      <main className="pt-24 pb-16">
        <article className="container max-w-4xl">

          {/* BACK BUTTON */}
          <Button variant="ghost" asChild>
            <Link to="/news">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to News
            </Link>
          </Button>

          {/* CATEGORY */}
          <div className="flex gap-2 mt-4">
            <Badge variant="category">{post.category}</Badge>
          </div>

          {/* TITLE */}
          <h1 className="text-3xl font-bold mt-4">
            {post.title}
          </h1>

          {/* DATE */}
          <div className="flex gap-4 text-sm text-gray-400 mt-2">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {date}
            </span>
          </div>

          {/* IMAGE */}
          {post.image && (
            <img
              src={urlFor(post.image).width(900).url()}
              className="w-full mt-6 rounded-xl"
            />
          )}

          {/* CONTENT */}
          <div className="mt-6 text-gray-200 leading-7 whitespace-pre-line">
            {post.content}
          </div>

        </article>
      </main>

      <Footer />
    </div>
  );
};

export default ArticlePage;
