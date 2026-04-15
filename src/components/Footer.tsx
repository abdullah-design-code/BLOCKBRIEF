import { Zap } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "News",
    links: [
      { label: "Bitcoin", href: "/news/bitcoin" },
      { label: "Ethereum", href: "/news/ethereum" },
      { label: "Altcoins", href: "/news/altcoins" },
      { label: "Exchange Updates", href: "/news/exchanges" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Beginner Guides", href: "/learn/beginner-guides" },
      { label: "Trading Basics", href: "/learn/trading-basics" },
      { label: "Glossary", href: "/learn/glossary" },
      { label: "How-To Articles", href: "/learn/how-to" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Advertise", href: "/advertise" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-3">
              <Zap className="h-5 w-5 text-primary" />
              <span className="font-heading text-lg font-bold text-foreground">
                Chain<span className="text-primary">Pulse</span>
              </span>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Crypto news made simple. Every story explained so anyone can understand.
            </p>
          </div>

          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-heading text-sm font-semibold text-foreground mb-3">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>© 2026 ChainPulse. Not financial advice. Always do your own research.</span>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
