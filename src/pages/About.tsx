import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Users, TrendingUp, Calendar, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const stats = [
    { icon: Users, label: "Students Enrolled", value: "15,000+" },
    { icon: Award, label: "Courses Available", value: "250+" },
    { icon: TrendingUp, label: "Placement Rate", value: "95%" },
    { icon: Calendar, label: "Years of Excellence", value: "25+" },
  ];

  const milestones = [
    {
      year: "1999",
      title: "Foundation",
      description: "EduVerse College was established with a vision to transform education."
    },
    {
      year: "2005", 
      title: "First Graduation",
      description: "Our first batch of 150 students graduated with honors."
    },
    {
      year: "2010",
      title: "Campus Expansion",
      description: "Added state-of-the-art facilities and research centers."
    },
    {
      year: "2015",
      title: "Digital Innovation",
      description: "Launched online learning platform and hybrid programs."
    },
    {
      year: "2020",
      title: "Global Recognition",
      description: "Received accreditation from international education bodies."
    },
    {
      year: "2024",
      title: "AI Integration",
      description: "Pioneering AI-powered personalized learning experiences."
    }
  ];

  useEffect(() => {
    // Hero section animations
    if (heroRef.current) {
      gsap.fromTo(".about-hero-content",
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "power2.out",
          stagger: 0.2
        }
      );
    }

    // Stats animation
    if (statsRef.current) {
      gsap.fromTo(".stat-card",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top bottom-100",
            end: "bottom top",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Timeline animation
    if (timelineRef.current) {
      gsap.fromTo(".timeline-item",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top bottom-100",
            end: "bottom top",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 bg-hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="about-hero-content text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-primary-glow">EduVerse</span>
            </h1>
            
            <p className="about-hero-content text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
              For over 25 years, we've been at the forefront of educational excellence, 
              shaping minds and building futures.
            </p>

            <div className="about-hero-content">
              <Button variant="hero-outline" size="lg">
                Download Prospectus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-8">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To provide world-class education that empowers students with knowledge, 
                skills, and values necessary to excel in their chosen careers and 
                contribute meaningfully to society.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe in fostering critical thinking, creativity, and innovation 
                while maintaining the highest standards of academic integrity.
              </p>
            </div>
            
            <div className="feature-block">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be recognized globally as a premier institution that transforms 
                lives through innovative education, cutting-edge research, and 
                community engagement, preparing graduates to lead and succeed 
                in an ever-evolving world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              By the <span className="text-primary">Numbers</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Our achievements speak for themselves
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card text-center">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow-primary">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our educational excellence
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-0.5"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`timeline-item relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-2 z-10 shadow-glow-primary"></div>
                  
                  {/* Content */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <div className="feature-block">
                      <div className="text-primary font-bold text-lg mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-card-foreground mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl opacity-90 mb-8 leading-relaxed">
            Experience the EduVerse difference. Schedule a campus visit or 
            speak with our admissions team today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero-outline" size="lg">
              <MapPin className="h-5 w-5 mr-2" />
              Visit Campus
            </Button>
            <Button variant="hero-outline" size="lg">
              <Phone className="h-5 w-5 mr-2" />
              Contact Admissions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;