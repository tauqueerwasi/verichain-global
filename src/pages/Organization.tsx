import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Zap, Globe, Shield, CheckCircle, Code } from "lucide-react";

const Organization = () => {
  const features = [
    "Instant identity verification",
    "Global reach across 150+ countries",
    "GDPR & CCPA compliant",
    "RESTful API integration",
    "Real-time webhook notifications",
    "Custom verification workflows"
  ];

  const useCases = [
    {
      icon: Building2,
      title: "Financial Services",
      description: "KYC compliance for banking, lending, and investment platforms"
    },
    {
      icon: Globe,
      title: "E-commerce",
      description: "Age verification and fraud prevention for online marketplaces"
    },
    {
      icon: Shield,
      title: "Healthcare",
      description: "Patient identity verification for telehealth services"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Enterprise</span> Identity Verification
            </h1>
            <p className="text-xl text-muted-foreground">
              Integrate blockchain-powered identity verification into your platform in minutes
            </p>
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="glass-card p-6 border-primary/30 text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Instant Verification</h3>
              <p className="text-muted-foreground">Verify user identities in under 2 seconds with our blockchain network</p>
            </Card>
            <Card className="glass-card p-6 border-secondary/30 text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Global Coverage</h3>
              <p className="text-muted-foreground">Accept identity verification from 150+ countries worldwide</p>
            </Card>
            <Card className="glass-card p-6 border-accent/30 text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Privacy First</h3>
              <p className="text-muted-foreground">Zero-knowledge proofs ensure user data stays private</p>
            </Card>
          </div>

          {/* Features List */}
          <Card className="glass-card p-8 mb-16 border-primary/30">
            <h2 className="text-3xl font-bold mb-6 text-center gradient-text">Everything You Need</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground/90">{feature}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <Card key={index} className="glass-card p-6 border-border/50 hover-lift">
                  <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                    <useCase.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* API Integration */}
          <Card className="glass-card p-8 mb-12 border-primary/30">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold">Simple API Integration</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Get started in minutes with our RESTful API. Comprehensive documentation and SDKs available for all major languages.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 cyber-glow">
                    View API Docs
                  </Button>
                  <Button variant="outline" className="border-primary/30">
                    Get API Key
                  </Button>
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-muted/50 p-6 rounded-lg border border-border/50 font-mono text-sm">
                  <div className="text-accent">POST</div>
                  <div className="text-foreground/80 mt-2">/api/v1/verify</div>
                  <div className="mt-4 text-muted-foreground">
                    {"{"}<br />
                    &nbsp;&nbsp;"userId": "user_123",<br />
                    &nbsp;&nbsp;"fields": ["name", "dob"]<br />
                    {"}"}
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* CTA */}
          <Card className="glass-card p-12 border-primary/30 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join leading organizations using VerifyChain for secure, compliant identity verification
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 cyber-glow">
                Request Demo
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
                Contact Sales
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Organization;
