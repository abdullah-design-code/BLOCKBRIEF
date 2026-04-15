import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrendingPulse from "@/components/TrendingPulse";
import NewsFeed from "@/components/NewsFeed";
import MarketSentiment from "@/components/MarketSentiment";
import LearningHub from "@/components/LearningHub";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
