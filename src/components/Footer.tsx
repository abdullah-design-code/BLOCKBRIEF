import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Zap className="h-5 w-5 text-primary" />
              <span className="font-heading text-lg font-bold text-foreground">
                Chain<span className="text-primary">Pulse</span>
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Crypto news made simple. Every story explained so anyone can understand.
            </p>
          </div>

          {[
            { title: "News", links: ["Bitcoin", "Ethereum", "Altcoins", "Exchange Updates"] },
            { title: "Learn", links: ["Beginner Guides", "Trading Basics", "Glossary", "How-To Articles"] },
            { title: "Company", links: ["About", "Contact", "Advertise", "Privacy Policy"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-heading text-sm font-semibold text-foreground mb-3">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center text-xs text-muted-foreground">
          © 2026 ChainPulse. Not financial advice. Always do your own research.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
