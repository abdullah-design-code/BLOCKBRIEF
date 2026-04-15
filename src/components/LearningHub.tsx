import { motion } from "framer-motion";
import { BookOpen, ArrowRight, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const guides = [
  { title: "How to Start Crypto Trading in 2026", desc: "A step-by-step beginner guide to buying your first Bitcoin safely.", level: "Beginner", readTime: "8 min" },
  { title: "What Is Blockchain? Explained Simply", desc: "Understand the technology behind every cryptocurrency in plain English.", level: "Beginner", readTime: "5 min" },
  { title: "Best Crypto Wallets for Beginners", desc: "Compare hot vs cold wallets and find the best one for your needs.", level: "Beginner", readTime: "6 min" },
  { title: "Reading Crypto Charts — A Simple Guide", desc: "Learn candlesticks, support/resistance, and volume in 10 minutes.", level: "Intermediate", readTime: "10 min" },
];

const LearningHub = () => (
  <section id="learn" className="py-16">
    <div className="container">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="rounded-md bg-primary/10 p-2"><GraduationCap className="h-5 w-5 text-primary" /></div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground">Learning Hub</h2>
            <p className="text-sm text-muted-foreground">Crypto education for beginners</p>
          </div>
        </div>
        <Button variant="glass" size="sm" className="hidden sm:flex" asChild>
          <Link to="/learn">All Guides <ArrowRight className="h-3.5 w-3.5" /></Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {guides.map((guide, i) => (
          <motion.div
            key={guide.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <Link
              to="/learn/beginner-guides"
              className="group block rounded-lg bg-card border border-border p-5 hover:border-primary/30 hover:bg-surface-hover transition-all h-full"
            >
              <div className="rounded-md bg-primary/10 p-2 w-fit mb-4"><BookOpen className="h-4 w-4 text-primary" /></div>
              <h3 className="font-heading text-sm font-semibold text-foreground group-hover:text-primary transition-colors mb-2">{guide.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed flex-1">{guide.desc}</p>
              <div className="flex items-center justify-between mt-4 text-[10px] text-muted-foreground">
                <span className="rounded-full bg-primary/10 text-primary px-2 py-0.5 font-medium">{guide.level}</span>
                <span>{guide.readTime} read</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default LearningHub;
