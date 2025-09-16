import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, DollarSign, Users, Star } from "lucide-react";
import { Button } from "./ui/button";

gsap.registerPlugin(ScrollTrigger);

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  price: string;
  students: number;
  rating: number;
  instructor: string;
  category: string;
  delay?: number;
}

const CourseCard = ({
  id,
  title,
  description,
  image,
  duration,
  price,
  students,
  rating,
  instructor,
  category,
  delay = 0,
}: CourseCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        delay: delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom-100",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className="course-card bg-card rounded-2xl overflow-hidden group"
    >
      {/* Course Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
            {category}
          </span>
        </div>
        <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/20 backdrop-blur-sm px-2 py-1 rounded-full">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-white text-sm font-medium">{rating}</span>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>

        <div className="text-sm text-muted-foreground mb-4">
          <span className="font-medium">Instructor:</span> {instructor}
        </div>

        {/* Course Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">{duration}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">{students}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <DollarSign className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">{price}</span>
          </div>
        </div>

        {/* Enroll Button */}
        <Button 
          variant="hero" 
          className="w-full group-hover:scale-105 transition-transform duration-300"
        >
          Enroll Now
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;