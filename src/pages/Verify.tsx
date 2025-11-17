import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Shield, CheckCircle } from "lucide-react";
import { useState } from "react";

const Verify = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Create Your <span className="gradient-text">Digital Identity</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Follow the steps below to create your secure blockchain identity
              </p>
            </div>

            {/* Progress Steps */}
            <div className="flex items-center justify-center mb-12">
              <div className="flex items-center gap-4">
                <div className={`flex items-center gap-2 ${step >= 1 ? 'text-primary' : 'text-muted-foreground'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-primary text-primary-foreground cyber-glow' : 'bg-muted'}`}>
                    1
                  </div>
                  <span className="hidden sm:inline">Personal Info</span>
                </div>
                <div className={`w-12 h-0.5 ${step >= 2 ? 'bg-primary' : 'bg-muted'}`} />
                <div className={`flex items-center gap-2 ${step >= 2 ? 'text-primary' : 'text-muted-foreground'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-primary text-primary-foreground cyber-glow' : 'bg-muted'}`}>
                    2
                  </div>
                  <span className="hidden sm:inline">Documents</span>
                </div>
                <div className={`w-12 h-0.5 ${step >= 3 ? 'bg-primary' : 'bg-muted'}`} />
                <div className={`flex items-center gap-2 ${step >= 3 ? 'text-primary' : 'text-muted-foreground'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-primary text-primary-foreground cyber-glow' : 'bg-muted'}`}>
                    3
                  </div>
                  <span className="hidden sm:inline">Verify</span>
                </div>
              </div>
            </div>

            {/* Step 1: Personal Information */}
            {step === 1 && (
              <Card className="glass-card p-8 border-primary/30">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" placeholder="Enter your full name" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" placeholder="Select your country" className="mt-2" />
                  </div>
                  <Button 
                    onClick={() => setStep(2)} 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 cyber-glow"
                  >
                    Continue to Documents
                  </Button>
                </div>
              </Card>
            )}

            {/* Step 2: Upload Documents */}
            {step === 2 && (
              <Card className="glass-card p-8 border-primary/30">
                <div className="space-y-6">
                  <div>
                    <Label>Identity Document</Label>
                    <div className="mt-2 border-2 border-dashed border-primary/30 rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                      <Upload className="h-12 w-12 mx-auto mb-4 text-primary" />
                      <p className="text-muted-foreground mb-2">Click to upload or drag and drop</p>
                      <p className="text-sm text-muted-foreground">Passport, ID Card, or Driver's License (PNG, JPG up to 10MB)</p>
                    </div>
                  </div>
                  <div>
                    <Label>Proof of Address</Label>
                    <div className="mt-2 border-2 border-dashed border-primary/30 rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                      <Upload className="h-12 w-12 mx-auto mb-4 text-primary" />
                      <p className="text-muted-foreground mb-2">Click to upload or drag and drop</p>
                      <p className="text-sm text-muted-foreground">Utility bill or Bank statement (PNG, JPG up to 10MB)</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button 
                      onClick={() => setStep(1)} 
                      variant="outline"
                      className="flex-1 border-primary/30"
                    >
                      Back
                    </Button>
                    <Button 
                      onClick={() => setStep(3)} 
                      className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 cyber-glow"
                    >
                      Upload & Continue
                    </Button>
                  </div>
                </div>
              </Card>
            )}

            {/* Step 3: Verification */}
            {step === 3 && (
              <Card className="glass-card p-8 border-accent/30 text-center">
                <div className="space-y-6">
                  <div className="mx-auto w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
                    <Shield className="h-10 w-10 text-accent animate-pulse" />
                  </div>
                  <h2 className="text-2xl font-bold gradient-text">Processing Your Identity</h2>
                  <p className="text-muted-foreground">
                    We're creating your blockchain identity hash and generating zero-knowledge proofs. This usually takes 30-60 seconds.
                  </p>
                  <div className="space-y-4 text-left max-w-md mx-auto">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      <span>Documents encrypted with AES-256</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      <span>SHA-256 hash generated</span>
                    </div>
                    <div className="flex items-center gap-3 opacity-50">
                      <div className="h-5 w-5 border-2 border-accent rounded-full animate-spin border-t-transparent" />
                      <span>Creating blockchain record...</span>
                    </div>
                    <div className="flex items-center gap-3 opacity-50">
                      <div className="h-5 w-5 border-2 border-muted rounded-full" />
                      <span>Generating ZKP credentials</span>
                    </div>
                  </div>
                  <Button 
                    onClick={() => setStep(1)} 
                    variant="outline"
                    className="border-accent/30"
                  >
                    Start Over
                  </Button>
                </div>
              </Card>
            )}

            {/* Security Notice */}
            <div className="mt-8 glass-card p-6 rounded-lg border border-border/50">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Your Privacy is Protected:</strong> Your documents are hashed and encrypted before being stored on the blockchain. We never store your original documents, and no one can reverse-engineer your personal information from the blockchain hash.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Verify;
