import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicyPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-24 pb-16">
      <div className="container max-w-3xl">
        <h1 className="font-heading text-3xl font-bold text-foreground mb-6">Privacy Policy</h1>
        <div className="space-y-5 text-foreground/80 leading-relaxed">
          <p><em className="text-muted-foreground">Last updated: April 15, 2026</em></p>
          <p>ChainPulse ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.</p>

          <h2 className="font-heading text-xl font-bold text-foreground pt-4">Information We Collect</h2>
          <p>We may collect information you provide directly, such as your name and email when you subscribe to our newsletter or contact us. We also automatically collect certain information through cookies and analytics tools, including your IP address, browser type, and pages visited.</p>

          <h2 className="font-heading text-xl font-bold text-foreground pt-4">How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>To provide and improve our services</li>
            <li>To send newsletters and updates (with your consent)</li>
            <li>To display relevant advertisements</li>
            <li>To analyze website traffic and usage patterns</li>
          </ul>

          <h2 className="font-heading text-xl font-bold text-foreground pt-4">Cookies</h2>
          <p>We use cookies to enhance your experience, analyze traffic, and serve targeted ads. You can control cookies through your browser settings.</p>

          <h2 className="font-heading text-xl font-bold text-foreground pt-4">Third-Party Services</h2>
          <p>We may use third-party services like Google Analytics and Google AdSense that collect and process data according to their own privacy policies.</p>

          <h2 className="font-heading text-xl font-bold text-foreground pt-4">Contact</h2>
          <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:privacy@chainpulse.com" className="text-primary hover:underline">privacy@chainpulse.com</a>.</p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default PrivacyPolicyPage;
