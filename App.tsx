import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NewsPage from "./pages/NewsPage";
import ArticlePage from "./pages/ArticlePage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLogin from "./pages/admin/AdminLogin";

export default function App() {
  return (
    <div style={{ color: "white", padding: 20 }}>
      BLOCKBRIEF IS RUNNING ✅
    </div>
  );
}

      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/news/:slug" element={<ArticlePage />} />

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />

    </Routes>
  );
}
