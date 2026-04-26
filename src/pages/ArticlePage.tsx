import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

import { supabase } from "@/lib/supabase";

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      const { data } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", slug)
        .single();

      setPost(data);
    };

    fetchPost();
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${post.title} — BlockBrief`}
        description={post.content?.slice(0, 150)}
      />

      <Header />

      <main className="pt-24 pb-16">
        <article className="container max-w-4xl">

          <Button variant="ghost" asChild>
            <Link to="/news">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to News
            </Link>
          </Button>

          <div className="mt-4">
            <Badge>{post.category}</Badge>
          </div>

          <h1 className="text-3xl font-bold mt-4">
            {post.title}
          </h1>

          <div className="text-sm text-gray-400 mt-2 flex gap-2">
            <Calendar className="h-4 w-4" />
            {new Date(post.created_at).toDateString()}
          </div>

          {post.image && (
            <img
              src={post.image}
              className="w-full mt-6 rounded-xl"
            />
          )}

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
