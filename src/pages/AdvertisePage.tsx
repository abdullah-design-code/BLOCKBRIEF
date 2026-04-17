import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Megaphone, Users, Eye, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, value: "500K+", label: "Monthly Readers" },
  { icon: Eye, value: "2M+", label: "Page Views" },
  { icon: TrendingUp, value: "45%", label: "Growth Rate" },
];

const AdvertisePage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-24 pb-16">
      <div className="container max-w-3xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="rounded-md bg-primary/10 p-2">
            <Megaphone className="h-6 w-6 text-primary" />
          </div>
          <h1 className="font-heading text-3xl font-bold text-foreground">Advertise with BlockBrief</h1>
        </div>
        <p className="text-foreground/80 leading-relaxed mb-8">
          Reach a highly engaged audience of crypto enthusiasts, traders, and beginners. BlockBrief offers multiple advertising options to help you grow your brand in the crypto space.
        </p>

        <div className="grid grid-cols-3 gap-4 mb-10">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl bg-card border border-border p-5 text-center">
              <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
              <p className="font-heading text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4 text-foreground/80 leading-relaxed mb-8">
          <h2 className="font-heading text-xl font-bold text-foreground">Ad Options</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-foreground">Display Ads</strong> — Banner placements across all pages</li>
            <li><strong className="text-foreground">Sponsored Articles</strong> — Native content that reaches our audience</li>
            <li><strong className="text-foreground">Newsletter Sponsorship</strong> — Featured spot in our weekly digest</li>
            <li><strong className="text-foreground">Custom Packages</strong> — Tailored campaigns for your goals</li>
          </ul>
        </div>

        <Button variant="glow" size="lg" asChild>
          <a href="mailto:ads@blockbrief.com">Contact for Advertising</a>
        </Button>
      </div>
    </main>
    <Footer />
  </div>
);

export default AdvertisePage;
