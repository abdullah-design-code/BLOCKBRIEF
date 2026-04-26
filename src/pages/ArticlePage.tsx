import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { ArrowLeft, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

type Post = {
  id: string;
  title: string;
  slug: string;
  image?: string;
  category?: string;
  content?: string;
  created_at?: string;
};

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);

  // ✅ FETCH SINGLE POST
  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", slug)
        .single();

      if (error) {
        console.error(error);
        return;
      }

      setPost(data);
    };

    fetchPost();
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  const date = post.created_at
    ? new Date(post.created_at).toLocaleDateString()
    : "";

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
              Back
            </Link>
          </Button>

          <h1 className="text-3xl font-bold mt-4">{post.title}</h1>

          <div className="text-sm text-gray-400 mt-2 flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {date}
          </div>

          {post.image && (
            <img
              src={post.image}
              className="w-full mt-6 rounded-xl"
            />
          )}

          <div className="mt-6 text-gray-200 whitespace-pre-line">
            {post.content}
          </div>

        </article>
      </main>

      <Footer />
    </div>
  );
};

export default ArticlePage;
