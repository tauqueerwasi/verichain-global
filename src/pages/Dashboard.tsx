import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, CheckCircle, Clock, X, Globe, FileText } from "lucide-react";

const Dashboard = () => {
  const verificationRequests = [
    {
      id: 1,
      organization: "Global Bank Corp",
      country: "United States",
      requestedData: ["Full Name", "Date of Birth", "Address"],
      status: "pending",
      date: "2025-01-15"
    },
    {
      id: 2,
      organization: "TechStart Inc",
      country: "Singapore",
      requestedData: ["Full Name", "Email"],
      status: "approved",
      date: "2025-01-14"
    },
    {
      id: 3,
      organization: "Euro Finance AG",
      country: "Germany",
      requestedData: ["Full Name", "ID Number", "Address"],
      status: "approved",
      date: "2025-01-12"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Your <span className="gradient-text">Dashboard</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Manage your identity and verification requests
              </p>
            </div>

            {/* Identity Status Card */}
            <Card className="glass-card p-8 mb-8 border-primary/30">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-full bg-primary/20 cyber-glow">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Identity Verified</h2>
                    <p className="text-muted-foreground mb-2">Your blockchain identity is active and secure</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-accent/20 text-accent hover:bg-accent/30">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                      <Badge variant="outline" className="border-primary/30">
                        ID: 0x7f8a9b2c...4d5e
                      </Badge>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="border-primary/30 hover:bg-primary/10">
                  <FileText className="h-4 w-4 mr-2" />
                  View Details
                </Button>
              </div>
            </Card>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="glass-card p-6 border-border/50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Total Verifications</p>
                    <p className="text-3xl font-bold text-primary">12</p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
              </Card>
              <Card className="glass-card p-6 border-border/50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Pending Requests</p>
                    <p className="text-3xl font-bold text-secondary">1</p>
                  </div>
                  <Clock className="h-8 w-8 text-secondary" />
                </div>
              </Card>
              <Card className="glass-card p-6 border-border/50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Countries</p>
                    <p className="text-3xl font-bold text-accent">8</p>
                  </div>
                  <Globe className="h-8 w-8 text-accent" />
                </div>
              </Card>
            </div>

            {/* Verification Requests */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Verification Requests</h2>
              <div className="space-y-4">
                {verificationRequests.map((request) => (
                  <Card key={request.id} className="glass-card p-6 border-border/50 hover-lift">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold">{request.organization}</h3>
                          <Badge 
                            className={
                              request.status === "approved" 
                                ? "bg-accent/20 text-accent" 
                                : "bg-secondary/20 text-secondary"
                            }
                          >
                            {request.status === "approved" ? (
                              <CheckCircle className="h-3 w-3 mr-1" />
                            ) : (
                              <Clock className="h-3 w-3 mr-1" />
                            )}
                            {request.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <Globe className="h-4 w-4" />
                          <span>{request.country}</span>
                          <span>•</span>
                          <span>{request.date}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {request.requestedData.map((data, index) => (
                            <Badge key={index} variant="outline" className="border-primary/20">
                              {data}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {request.status === "pending" ? (
                          <>
                            <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                              Approve
                            </Button>
                            <Button size="sm" variant="outline" className="border-destructive/30 text-destructive hover:bg-destructive/10">
                              <X className="h-4 w-4" />
                            </Button>
                          </>
                        ) : (
                          <Button size="sm" variant="outline" className="border-primary/30">
                            View Details
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dashboard;
