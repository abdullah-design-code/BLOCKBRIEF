import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const ContactPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-24 pb-16">
      <div className="container max-w-2xl">
        <h1 className="font-heading text-3xl font-bold text-foreground mb-2">Contact Us</h1>
        <p className="text-muted-foreground mb-8">Have questions? We'd love to hear from you.</p>

        <div className="rounded-xl bg-card border border-border p-8">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
              <input className="w-full rounded-md bg-surface border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
              <input type="email" className="w-full rounded-md bg-surface border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="you@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
              <textarea rows={5} className="w-full rounded-md bg-surface border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none" placeholder="How can we help?" />
            </div>
            <Button variant="glow" className="w-full">
              <Mail className="h-4 w-4" /> Send Message
            </Button>
          </form>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          Or email us directly at <a href="mailto:hello@blockbrief.com" className="text-primary hover:underline">hello@blockbrief.com</a>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default ContactPage;
