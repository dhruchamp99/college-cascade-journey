import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp
} from "lucide-react";
import { Button } from "./ui/button";
import collegeLogo from "@/assets/college-logo.png";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;

    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom-100",
          end: "bottom bottom",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Contact Us", path: "/contact" },
    { name: "Admissions", path: "/admissions" },
    { name: "Campus Life", path: "/campus" },
  ];

  const programs = [
    "Computer Science",
    "Business Administration", 
    "Engineering",
    "Liberal Arts",
    "Medicine",
    "Law"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer ref={footerRef} className="bg-foreground text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <img
                src={collegeLogo}
                alt="College Logo"
                className="h-12 w-12"
              />
              <span className="text-2xl font-bold">EduVerse</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Empowering minds, shaping futures. Join thousands of students who have 
              transformed their lives through quality education at EduVerse College.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 group-hover:text-primary-glow transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-white hover:text-primary-glow transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-primary-glow transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Popular Programs</h3>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program}>
                  <span className="text-white/80 hover:text-primary-glow transition-colors duration-300 cursor-pointer">
                    {program}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-glow mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80">123 Education Street</p>
                  <p className="text-white/80">Knowledge City, KC 12345</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-glow flex-shrink-0" />
                <a 
                  href="tel:+1234567890"
                  className="text-white/80 hover:text-primary-glow transition-colors"
                >
                  +1 (234) 567-8900
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-glow flex-shrink-0" />
                <a 
                  href="mailto:info@eduverse.edu"
                  className="text-white/80 hover:text-primary-glow transition-colors"
                >
                  info@eduverse.edu
                </a>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-white/60 mb-2">Office Hours:</p>
              <p className="text-white/80">Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p className="text-white/80">Saturday: 9:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 mb-4 md:mb-0">
            &copy; 2024 EduVerse College. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6">
            <Link to="/privacy" className="text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/60 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="text-white/60 hover:text-white hover:bg-white/10"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;