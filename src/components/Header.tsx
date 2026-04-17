import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logoIcon from "@/assets/blockbrief-icon.png";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "News",
    href: "/news",
    children: [
      { label: "Market News", href: "/news/market" },
      { label: "Bitcoin", href: "/news/bitcoin" },
      { label: "Ethereum", href: "/news/ethereum" },
      { label: "Altcoins", href: "/news/altcoins" },
      { label: "Exchange Updates", href: "/news/exchanges" },
      { label: "Regulations", href: "/news/regulations" },
      { label: "Trending", href: "/news/trending" },
    ],
  },
  { label: "Markets", href: "/markets" },
  {
    label: "Learn",
    href: "/learn",
    children: [
      { label: "Beginner Guides", href: "/learn/beginner-guides" },
      { label: "Trading Basics", href: "/learn/trading-basics" },
      { label: "Glossary", href: "/learn/glossary" },
      { label: "How-To Articles", href: "/learn/how-to" },
    ],
  },
  { label: "Tools", href: "/tools" },
  {
    label: "Company",
    href: "/company",
    children: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Advertise", href: "/advertise" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoIcon} alt="BlockBrief logo" width={28} height={28} className="h-7 w-7" />
          <span className="font-heading text-xl font-bold tracking-tight text-foreground">
            BLOCK<span className="text-primary">BRIEF</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={item.href}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-md"
              >
                {item.label}
                {item.children && <ChevronDown className="h-3 w-3" />}
              </Link>

              {item.children && openDropdown === item.label && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute top-full left-0 mt-1 w-48 rounded-lg bg-card border border-border shadow-xl py-2"
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.href}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-surface-hover transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="glow" size="sm" asChild>
            <Link to="/news">Subscribe</Link>
          </Button>
        </div>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border overflow-hidden bg-card"
          >
            <div className="p-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className="block text-sm font-medium text-muted-foreground hover:text-primary py-2 px-3 rounded-md"
                    onClick={() => !item.children && setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-6 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block text-sm text-muted-foreground hover:text-primary py-1.5 px-3"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3">
                <Button variant="glow" size="sm" className="w-full" asChild>
                  <Link to="/news" onClick={() => setMobileOpen(false)}>Subscribe</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
