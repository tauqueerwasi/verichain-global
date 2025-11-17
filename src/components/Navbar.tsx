import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-card border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xl font-bold gradient-text">VerifyChain</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground/80 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/how-it-works" className="text-foreground/80 hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link to="/verify" className="text-foreground/80 hover:text-primary transition-colors">
              Verify Identity
            </Link>
            <Link to="/dashboard" className="text-foreground/80 hover:text-primary transition-colors">
              Dashboard
            </Link>
            <Link to="/organization" className="text-foreground/80 hover:text-primary transition-colors">
              For Organizations
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-foreground/80 hover:text-primary">
              Sign In
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 cyber-glow">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link
              to="/"
              className="block text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/how-it-works"
              className="block text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </Link>
            <Link
              to="/verify"
              className="block text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Verify Identity
            </Link>
            <Link
              to="/dashboard"
              className="block text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/organization"
              className="block text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              For Organizations
            </Link>
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="ghost" className="w-full text-foreground/80 hover:text-primary">
                Sign In
              </Button>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
