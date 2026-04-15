import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calculator, BarChart3, Wallet, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

const tools = [
  { icon: Calculator, title: "Profit Calculator", desc: "Calculate your potential crypto profits and losses.", status: "Coming Soon" },
  { icon: BarChart3, title: "Portfolio Tracker", desc: "Track all your crypto investments in one place.", status: "Coming Soon" },
  { icon: Wallet, title: "Wallet Checker", desc: "Check any crypto wallet balance and history.", status: "Coming Soon" },
  { icon: RefreshCw, title: "Crypto Converter", desc: "Convert between any cryptocurrencies instantly.", status: "Coming Soon" },
];

const ToolsPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-24 pb-16">
      <div className="container">
        <h1 className="font-heading text-3xl font-bold text-foreground mb-2">Tools</h1>
        <p className="text-muted-foreground mb-8">Free crypto tools to help you trade smarter</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl bg-card border border-border p-8 relative overflow-hidden"
            >
              <div className="rounded-md bg-primary/10 p-3 w-fit mb-4">
                <tool.icon className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-heading text-xl font-bold text-foreground mb-2">{tool.title}</h2>
              <p className="text-sm text-muted-foreground mb-4">{tool.desc}</p>
              <span className="inline-block rounded-full bg-secondary/20 text-secondary px-3 py-1 text-xs font-semibold">
                {tool.status}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default ToolsPage;
