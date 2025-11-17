import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Shield, Upload, Hash, CheckCircle, Globe, Lock } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Documents",
      description: "Securely upload your identity documents (passport, ID card, etc.) through our encrypted platform."
    },
    {
      icon: Hash,
      title: "Blockchain Hashing",
      description: "Your documents are hashed using SHA-256 and stored on the blockchain. The original documents are never stored."
    },
    {
      icon: Lock,
      title: "Zero-Knowledge Proof",
      description: "We generate a ZKP that allows verification without revealing your actual data."
    },
    {
      icon: Shield,
      title: "Identity Created",
      description: "Your blockchain identity is created with a unique hash that represents your verified information."
    },
    {
      icon: Globe,
      title: "Cross-Border Verification",
      description: "Organizations worldwide can request verification through your encrypted blockchain identity."
    },
    {
      icon: CheckCircle,
      title: "Approve & Verify",
      description: "You control who sees what. Approve verification requests and share only what's necessary."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              How <span className="gradient-text">VerifyChain</span> Works
            </h1>
            <p className="text-xl text-muted-foreground">
              A simple, secure process that puts you in control of your digital identity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {steps.map((step, index) => (
              <Card key={index} className="glass-card p-6 hover-lift border-border/50 relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold cyber-glow">
                  {index + 1}
                </div>
                <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            <Card className="glass-card p-8 border-primary/30">
              <h2 className="text-2xl font-bold mb-4 gradient-text">The Technology Behind It</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Blockchain Storage:</strong> Your identity hash is stored across a distributed blockchain network, making it impossible to tamper with or delete.
                </p>
                <p>
                  <strong className="text-foreground">SHA-256 Hashing:</strong> We use industry-standard cryptographic hashing to convert your documents into unique, irreversible identifiers.
                </p>
                <p>
                  <strong className="text-foreground">Zero-Knowledge Proofs:</strong> Advanced cryptographic techniques allow organizations to verify your identity without ever seeing your actual data.
                </p>
                <p>
                  <strong className="text-foreground">Smart Contracts:</strong> Automated verification processes run on blockchain smart contracts, ensuring transparency and security.
                </p>
              </div>
            </Card>

            <Card className="glass-card p-8 border-secondary/30">
              <h2 className="text-2xl font-bold mb-4 text-secondary">Privacy & Security</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Your original documents are <strong className="text-foreground">never stored</strong> on our servers or the blockchain. We only store cryptographic hashes that represent your verified identity.
                </p>
                <p>
                  All data transmission uses <strong className="text-foreground">AES-256 encryption</strong>, the same standard used by banks and governments worldwide.
                </p>
                <p>
                  You maintain <strong className="text-foreground">complete control</strong> over who can verify your identity and what information they can access.
                </p>
              </div>
            </Card>

            <Card className="glass-card p-8 border-accent/30">
              <h2 className="text-2xl font-bold mb-4 text-accent">For Organizations</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Organizations can request identity verification through our API or dashboard. Users receive verification requests and can approve or deny them with a single click.
                </p>
                <p>
                  The organization receives a <strong className="text-foreground">blockchain-verified hash</strong> confirming the user's identity without accessing any personal data.
                </p>
                <p>
                  This process complies with <strong className="text-foreground">GDPR, CCPA</strong>, and other international privacy regulations.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
