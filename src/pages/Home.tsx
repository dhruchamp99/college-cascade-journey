import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, Award, Users, BookOpen, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import CourseCard from "@/components/CourseCard";
import TestimonialCard from "@/components/TestimonialCard";
import heroImage from "@/assets/hero-bg.jpg";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const coursesRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  // Sample course data
  const featuredCourses = [
    {
      id: "1",
      title: "Computer Science Fundamentals",
      description: "Master programming languages, algorithms, and software development principles.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      duration: "16 weeks",
      price: "$2,999",
      students: 1250,
      rating: 4.8,
      instructor: "Dr. Sarah Chen",
      category: "Technology"
    },
    {
      id: "2", 
      title: "Business Administration",
      description: "Develop leadership skills and business acumen for modern enterprises.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      duration: "20 weeks",
      price: "$3,499",
      students: 980,
      rating: 4.9,
      instructor: "Prof. Michael Johnson",
      category: "Business"
    },
    {
      id: "3",
      title: "Digital Marketing Strategy",
      description: "Learn modern marketing techniques and digital campaign management.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      duration: "12 weeks", 
      price: "$1,999",
      students: 756,
      rating: 4.7,
      instructor: "Lisa Rodriguez",
      category: "Marketing"
    },
    {
      id: "4",
      title: "Data Science & Analytics",
      description: "Analyze complex data sets and build predictive models using Python and R.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      duration: "18 weeks",
      price: "$3,299",
      students: 634,
      rating: 4.9,
      instructor: "Dr. James Wilson",
      category: "Data Science"
    }
  ];

  // Sample testimonials
  const testimonials = [
    {
      id: "1",
      name: "Emily Johnson",
      program: "Computer Science Graduate",
      quote: "EduVerse transformed my career. The hands-on approach and expert faculty helped me land my dream job at a top tech company.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      id: "2", 
      name: "Marcus Chen",
      program: "Business Administration",
      quote: "The practical knowledge and networking opportunities I gained here were invaluable for starting my own business.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      id: "3",
      name: "Sarah Williams",
      program: "Digital Marketing",
      quote: "The curriculum is cutting-edge and the professors bring real-world experience to every lesson.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face", 
      rating: 5
    },
    {
      id: "4",
      name: "David Rodriguez",
      program: "Data Science",
      quote: "From zero programming knowledge to data scientist in 18 weeks. The support system here is incredible.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5
    }
  ];

  useEffect(() => {
    // Hero section animations
    if (heroRef.current) {
      const tl = gsap.timeline();
      
      tl.fromTo(".hero-title", 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      )
      .fromTo(".hero-subtitle",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(".hero-buttons",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(".scroll-arrow",
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        "-=0.2"
      );
    }

    // Features section animation
    if (featuresRef.current) {
      gsap.fromTo(".feature-block",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top bottom-100",
            end: "bottom top",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Spline 3D Background */}
        <div className="absolute inset-0 w-full h-full">
          <iframe 
            src='https://my.spline.design/nexbotrobotcharacterconcept-S5tN6NGYWgY5DG5TZQR3LSDR/' 
            frameBorder='0' 
            width='100%' 
            height='100%'
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 bg-black/20 backdrop-blur-sm rounded-2xl p-8">
          <h1 className="hero-title text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Learn. Grow. <span className="text-primary-glow">Lead.</span>
          </h1>
          
          <p className="hero-subtitle text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Transform your future with world-class education. Join thousands of students who have achieved their dreams at EduVerse College.
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" onClick={() => scrollToSection('courses')}>
              Explore Courses
            </Button>
            <Button variant="hero-outline" size="lg">
              Apply Now
            </Button>
          </div>
        </div>

        {/* Scroll Arrow */}
        <div 
          className="scroll-arrow absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
          onClick={() => scrollToSection('courses')}
        >
          <ChevronDown className="h-8 w-8 text-white animate-bounce" />
        </div>
      </section>

      {/* Courses Preview Section */}
      <section id="courses" ref={coursesRef} className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured <span className="text-primary">Courses</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our most popular programs designed by industry experts to prepare you for success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCourses.map((course, index) => (
              <CourseCard
                key={course.id}
                {...course}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section 
        ref={featuresRef}
        className="py-20 relative"
        style={{
          background: 'linear-gradient(135deg, hsl(220 85% 55% / 0.1) 0%, hsl(270 75% 65% / 0.1) 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose <span className="text-primary">EduVerse?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience education that goes beyond traditional learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-block text-center">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow-primary">
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Expert Faculty</h3>
              <p className="text-muted-foreground leading-relaxed">
                Learn from industry professionals and renowned academics with years of real-world experience.
              </p>
            </div>

            <div className="feature-block text-center">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow-accent">
                <BookOpen className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Industry-Aligned Curriculum</h3>
              <p className="text-muted-foreground leading-relaxed">
                Stay ahead with cutting-edge curricula designed in partnership with leading companies.
              </p>
            </div>

            <div className="feature-block text-center">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow-primary">
                <TrendingUp className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Career Support</h3>
              <p className="text-muted-foreground leading-relaxed">
                95% placement rate with dedicated career services and strong industry partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What People Are <span className="text-primary">Saying</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from our successful graduates and their transformation stories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                {...testimonial}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;