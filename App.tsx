import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import NewsPage from "./pages/NewsPage";
import ArticlePage from "./pages/ArticlePage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLogin from "./pages/admin/AdminLogin";

export default function Root() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="news/:slug" element={<ArticlePage />} />
        </Route>

        {/* Admin */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
