import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlockchainAnimation from "@/components/BlockchainAnimation";
import { Shield, Lock, Globe, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Your identity is secured with SHA-256 hashing and stored on an immutable blockchain ledger."
    },
    {
      icon: Lock,
      title: "Zero-Knowledge Proofs",
      description: "Verify your identity without revealing personal data using advanced ZKP technology."
    },
    {
      icon: Globe,
      title: "Cross-Border Ready",
      description: "Organizations worldwide can verify your identity instantly, no matter where you are."
    },
    {
      icon: Zap,
      title: "Instant Verification",
      description: "Get verified in seconds, not days. Our blockchain network processes requests in real-time."
    }
  ];

  const benefits = [
    "No centralized database vulnerabilities",
    "Complete control over your data",
    "Instant cross-border verification",
    "Privacy-preserving technology",
    "Immutable verification records",
    "Compliant with global standards"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <BlockchainAnimation />
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/30 mb-4">
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-foreground/80">Powered by Blockchain Technology</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="gradient-text">Secure Identity</span>
              <br />
              <span className="text-foreground">Verification for the</span>
              <br />
              <span className="text-primary">Digital Age</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Verify your identity across borders with zero-knowledge proofs and blockchain security. 
              No data breaches, no privacy concerns, just secure verification.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/verify">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 cyber-glow text-lg px-8">
                  Start Verification
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline" className="text-lg px-8 border-primary/30 hover:bg-primary/10">
                  How It Works
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
              <div className="glass-card p-6 rounded-xl hover-lift">
                <div className="text-3xl font-bold text-primary mb-2">1M+</div>
                <div className="text-sm text-muted-foreground">Verifications</div>
              </div>
              <div className="glass-card p-6 rounded-xl hover-lift">
                <div className="text-3xl font-bold text-secondary mb-2">150+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="glass-card p-6 rounded-xl hover-lift">
                <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="glass-card p-6 rounded-xl hover-lift">
                <div className="text-3xl font-bold text-primary mb-2">&lt;2s</div>
                <div className="text-sm text-muted-foreground">Verification</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="gradient-text">VerifyChain</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built on cutting-edge blockchain technology with user privacy at its core
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card p-6 hover-lift border-border/50">
                <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 md:p-12 rounded-2xl border border-primary/30">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                The Future of <span className="gradient-text">Digital Identity</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/90">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Link to="/verify">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90">
                    Get Started Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="glass-card p-12 rounded-2xl border border-primary/30 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Secure Your Digital Identity?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join millions of users who trust VerifyChain for secure, privacy-preserving identity verification.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/verify">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 cyber-glow">
                  Create Your Identity
                </Button>
              </Link>
              <Link to="/organization">
                <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
                  For Organizations
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
