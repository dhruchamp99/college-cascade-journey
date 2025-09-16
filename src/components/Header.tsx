import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, Search, User } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import collegeLogo from "@/assets/college-logo.png";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Contact Us", path: "/contact" },
  ];

  useEffect(() => {
    if (!headerRef.current) return;

    // Shrink header on scroll
    ScrollTrigger.create({
      trigger: "body",
      start: "top -80",
      end: "bottom top",
      onUpdate: (self) => {
        const progress = self.progress;
        if (headerRef.current) {
          gsap.to(headerRef.current, {
            paddingTop: progress > 0 ? "0.5rem" : "1rem",
            paddingBottom: progress > 0 ? "0.5rem" : "1rem",
            duration: 0.3,
          });
        }
      },
    });

    // Add blur background on scroll
    ScrollTrigger.create({
      trigger: "body",
      start: "top -50",
      end: "bottom top",
      onToggle: (self) => {
        if (headerRef.current) {
          headerRef.current.classList.toggle("nav-blur", self.isActive);
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isMenuOpen) {
        gsap.fromTo(
          mobileMenuRef.current,
          { x: "100%" },
          { x: "0%", duration: 0.3, ease: "power2.out" }
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          x: "100%",
          duration: 0.3,
          ease: "power2.in",
        });
      }
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300"
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={collegeLogo}
              alt="College Logo"
              className="h-10 w-10"
            />
            <span className="text-xl font-bold text-white">EduVerse</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-white hover:text-primary-glow transition-colors duration-300 font-medium ${
                  location.pathname === link.path ? "text-primary-glow" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-white hover:text-primary-glow">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="hero" size="sm">
              <User className="h-4 w-4" />
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="fixed top-0 right-0 h-full w-80 bg-background/95 backdrop-blur-md z-40 md:hidden transform translate-x-full"
      >
        <div className="pt-20 px-6">
          <div className="space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block text-lg font-medium transition-colors duration-300 ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            <Button variant="outline" className="w-full">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button variant="hero" className="w-full">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;