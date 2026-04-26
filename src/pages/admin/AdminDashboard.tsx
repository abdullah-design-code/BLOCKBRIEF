import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const AdminDashboard = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // GET POSTS
  const fetchPosts = async () => {
    const { data } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });

    setPosts(data || []);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // ADD POST
  const addPost = async () => {
    await supabase.from("posts").insert({
      title,
      content,
      slug: title.toLowerCase().replace(/\s/g, "-"),
    });

    setTitle("");
    setContent("");
    fetchPosts();
  };

  // DELETE POST
  const deletePost = async (id: string) => {
    await supabase.from("posts").delete().eq("id", id);
    fetchPosts();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Admin Dashboard</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <br />

      <button onClick={addPost}>Add Post</button>

      <hr />

      {posts.map((p) => (
        <div key={p.id} style={{ marginBottom: 10 }}>
          <h4>{p.title}</h4>
          <p>{p.content}</p>

          <button onClick={() => deletePost(p.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
