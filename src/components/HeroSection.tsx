import { motion } from "framer-motion";
import { TrendingUp, Zap, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Crypto network visualization" className="w-full h-full object-cover opacity-30" width={1920} height={800} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>
      <div className="container relative z-10 pt-24 pb-16">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm text-primary mb-6">
            <Zap className="h-3.5 w-3.5" /> Live Crypto Updates
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-foreground">Crypto news </span>
            <span className="text-primary glow-text">you actually</span><br />
            <span className="text-foreground">understand.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
            Every story comes with a plain-English "What It Means" breakdown. No jargon. No confusion. Just fast, actionable crypto intel.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="glow" size="lg" asChild>
              <Link to="/news"><TrendingUp className="h-4 w-4" /> Read Latest News</Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/learn"><BookOpen className="h-4 w-4" /> Start Learning</Link>
            </Button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: Zap, label: "Real-Time", desc: "Breaking crypto news as it happens" },
            { icon: BookOpen, label: "Beginner Friendly", desc: "Every story explained simply" },
            { icon: TrendingUp, label: "Market Impact", desc: "Know what matters for your portfolio" },
          ].map((item) => (
            <div key={item.label} className="glass rounded-lg p-5 flex items-start gap-4">
              <div className="rounded-md bg-primary/10 p-2.5"><item.icon className="h-5 w-5 text-primary" /></div>
              <div>
                <p className="font-heading font-semibold text-foreground text-sm">{item.label}</p>
                <p className="text-muted-foreground text-xs mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
