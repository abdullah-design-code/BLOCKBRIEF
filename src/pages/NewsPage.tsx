import { useEffect, useState } from "react";
import { client, urlFor } from "@/lib/sanity";
import { useLocation, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NewsPage = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const location = useLocation();

  useEffect(() => {
    client
      .fetch(`*[_type == "post"] | order(_createdAt desc){
        _id,
        title,
        slug,
        image,
        category
      }`)
      .then((data) => {
        console.log("SANITY DATA:", data); // 👈 DEBUG
        setPosts(data);
      });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16 container">
        <h1 className="text-3xl font-bold mb-8">Latest News</h1>

        {/* 🔴 AGAR EMPTY HAI */}
        {posts.length === 0 && (
          <p>No posts found (check Sanity)</p>
        )}

        {/* ✅ SANITY DATA SHOW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post._id} className="border p-4 rounded-lg">
              
              {post.image && (
                <img
                  src={urlFor(post.image).width(400).url()}
                  className="w-full h-40 object-cover rounded"
                />
              )}

              <h2 className="text-xl font-bold mt-3">{post.title}</h2>
              <p className="text-sm text-gray-500">{post.category}</p>

              <Link
                to={`/news/${post.slug?.current}`}
                className="text-blue-500 mt-2 inline-block"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewsPage;
