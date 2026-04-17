import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Mail, Megaphone, Shield } from "lucide-react";
import { motion } from "framer-motion";

const pages = [
  { icon: Users, title: "About Us", desc: "Learn about BlockBrief and our mission.", href: "/about" },
  { icon: Mail, title: "Contact", desc: "Get in touch with our team.", href: "/contact" },
  { icon: Megaphone, title: "Advertise", desc: "Reach crypto-savvy audiences with BlockBrief.", href: "/advertise" },
  { icon: Shield, title: "Privacy Policy", desc: "How we handle your data.", href: "/privacy-policy" },
];

const CompanyPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-24 pb-16">
      <div className="container max-w-3xl">
        <h1 className="font-heading text-3xl font-bold text-foreground mb-2">Company</h1>
        <p className="text-muted-foreground mb-8">Everything about BlockBrief</p>
        <div className="space-y-4">
          {pages.map((page, i) => (
            <motion.div key={page.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}>
              <Link
                to={page.href}
                className="group flex items-center gap-5 rounded-xl bg-card border border-border p-6 hover:border-primary/30 transition-all"
              >
                <div className="rounded-md bg-primary/10 p-3">
                  <page.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">{page.title}</h2>
                  <p className="text-sm text-muted-foreground">{page.desc}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default CompanyPage;
