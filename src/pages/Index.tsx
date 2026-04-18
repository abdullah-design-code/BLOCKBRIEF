import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrendingPulse from "@/components/TrendingPulse";
import NewsFeed from "@/components/NewsFeed";
import MarketSentiment from "@/components/MarketSentiment";
import LearningHub from "@/components/LearningHub";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BlockBrief",
    url: "https://blockbrief.com",
    description: "Crypto news, real-time markets, and beginner-friendly education.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://blockbrief.com/news?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="BlockBrief — Crypto News, Market Updates & Beginner Guides"
        description="Latest crypto news, Bitcoin price updates, live market trends, and beginner-friendly guides. Every story explained in plain English."
        keywords="crypto news, bitcoin news, ethereum, altcoins, crypto market, crypto for beginners, blockchain education"
        path="/"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <HeroSection />
        <TrendingPulse />
        <NewsFeed />
        <MarketSentiment />
        <LearningHub />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
