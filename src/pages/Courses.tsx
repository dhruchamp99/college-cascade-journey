import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, Filter, SortDesc } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CourseCard from "@/components/CourseCard";

gsap.registerPlugin(ScrollTrigger);

const Courses = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const coursesRef = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popularity");

  const allCourses = [
    {
      id: "1",
      title: "Computer Science Fundamentals",
      description: "Master programming languages, algorithms, and software development principles with hands-on projects.",
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
      description: "Develop leadership skills and business acumen for modern enterprises in the digital age.",
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
      description: "Learn modern marketing techniques, SEO, social media marketing, and digital campaign management.",
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
      description: "Analyze complex data sets and build predictive models using Python, R, and machine learning.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      duration: "18 weeks",
      price: "$3,299",
      students: 634,
      rating: 4.9,
      instructor: "Dr. James Wilson",
      category: "Technology"
    },
    {
      id: "5",
      title: "Graphic Design & UI/UX",
      description: "Create stunning visual designs and user interfaces using industry-standard tools and techniques.",
      image: "https://images.unsplash.com/photo-1558655146-364adfc1667e?w=400&h=300&fit=crop",
      duration: "14 weeks",
      price: "$2,499",
      students: 892,
      rating: 4.6,
      instructor: "Emma Thompson",
      category: "Design"
    },
    {
      id: "6",
      title: "Financial Management",
      description: "Master corporate finance, investment analysis, and financial planning strategies.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      duration: "16 weeks",
      price: "$2,799",
      students: 567,
      rating: 4.8,
      instructor: "Robert Kim",
      category: "Business"
    },
    {
      id: "7",
      title: "Web Development Bootcamp",
      description: "Full-stack web development with React, Node.js, and modern web technologies.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop",
      duration: "24 weeks",
      price: "$4,299",
      students: 1100,
      rating: 4.9,
      instructor: "Alex Rodriguez",
      category: "Technology"
    },
    {
      id: "8",
      title: "Healthcare Administration",
      description: "Learn healthcare management, policy, and administration in modern medical facilities.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      duration: "20 weeks",
      price: "$3,199",
      students: 445,
      rating: 4.7,
      instructor: "Dr. Maria Garcia",
      category: "Healthcare"
    },
    {
      id: "9",
      title: "Creative Writing",
      description: "Develop your storytelling skills in fiction, non-fiction, and digital content creation.",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop",
      duration: "10 weeks",
      price: "$1,499",
      students: 324,
      rating: 4.5,
      instructor: "Prof. David Miller",
      category: "Arts"
    }
  ];

  const categories = ["All", "Technology", "Business", "Marketing", "Design", "Healthcare", "Arts"];

  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case "popularity":
        return b.students - a.students;
      case "rating":
        return b.rating - a.rating;
      case "price-low":
        return parseInt(a.price.replace(/[^0-9]/g, "")) - parseInt(b.price.replace(/[^0-9]/g, ""));
      case "price-high":
        return parseInt(b.price.replace(/[^0-9]/g, "")) - parseInt(a.price.replace(/[^0-9]/g, ""));
      default:
        return 0;
    }
  });

  useEffect(() => {
    // Hero section animations
    if (heroRef.current) {
      gsap.fromTo(".courses-hero-content",
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

    // Filter section animation
    gsap.fromTo(".filter-section",
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power2.out",
        delay: 0.3
      }
    );

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
            <h1 className="courses-hero-content text-5xl md:text-6xl font-bold mb-6">
              Explore Our <span className="text-primary-glow">Courses</span>
            </h1>
            
            <p className="courses-hero-content text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
              Discover a wide range of courses designed to advance your career 
              and expand your knowledge.
            </p>

            <div className="courses-hero-content text-lg opacity-80">
              <span className="font-semibold">{allCourses.length} courses</span> available across 
              <span className="font-semibold"> {categories.length - 1} categories</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section py-12 bg-background border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <SortDesc className="h-5 w-5 text-muted-foreground" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-input rounded-md bg-background text-foreground"
              >
                <option value="popularity">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 text-muted-foreground">
            Showing {sortedCourses.length} of {allCourses.length} courses
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section ref={coursesRef} className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          {sortedCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {sortedCourses.map((course, index) => (
                <CourseCard
                  key={course.id}
                  {...course}
                  delay={index * 0.05}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">No courses found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search criteria or browse all courses.
              </p>
              <Button 
                variant="default"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            We're constantly adding new courses. Contact our academic advisors 
            to discuss custom programs or future course offerings.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Request Custom Program
            </Button>
            <Button variant="outline" size="lg">
              Talk to Advisor
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;