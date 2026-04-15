import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import NewsPage from "./pages/NewsPage";
import ArticlePage from "./pages/ArticlePage";
import MarketsPage from "./pages/MarketsPage";
import LearnPage from "./pages/LearnPage";
import ToolsPage from "./pages/ToolsPage";
import CompanyPage from "./pages/CompanyPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import AdvertisePage from "./pages/AdvertisePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:category" element={<NewsPage />} />
          <Route path="/news/:category/:slug" element={<ArticlePage />} />
          <Route path="/markets" element={<MarketsPage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/learn/:subcategory" element={<LearnPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/advertise" element={<AdvertisePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
