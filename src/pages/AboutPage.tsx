import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-24 pb-16">
      <div className="container max-w-3xl">
        <h1 className="font-heading text-3xl font-bold text-foreground mb-6">About BlockBrief</h1>
        <div className="space-y-5 text-foreground/80 leading-relaxed">
          <p>
            BlockBrief is a next-generation crypto platform built with one mission: make cryptocurrency news, markets, and education accessible to everyone — especially beginners.
          </p>
          <p>
            While most crypto sites use complex jargon and assume you already understand blockchain technology, BlockBrief breaks down every story into simple English with our signature <strong className="text-primary">"What It Means"</strong> section.
          </p>
          <p>
            We cover Bitcoin, Ethereum, altcoins, exchange updates, market analysis, and regulatory news — all with beginner-friendly explanations and actionable insights.
          </p>
          <h2 className="font-heading text-xl font-bold text-foreground pt-4">Our Mission</h2>
          <p>
            To become the most trusted and beginner-friendly crypto news source in the world. We believe that understanding crypto shouldn't require a finance degree.
          </p>
          <h2 className="font-heading text-xl font-bold text-foreground pt-4">What Makes Us Different</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Every article includes a "What It Means" plain-English explanation</li>
            <li>Market impact scores (Low / Medium / High) on every story</li>
            <li>Beginner-first language — no unnecessary jargon</li>
            <li>Fast, SEO-optimized, viral-style headlines</li>
            <li>Free crypto education and learning resources</li>
          </ul>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default AboutPage;
