import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface TestimonialCardProps {
  id: string;
  name: string;
  program: string;
  quote: string;
  avatar: string;
  rating: number;
  delay?: number;
}

const TestimonialCard = ({
  id,
  name,
  program,
  quote,
  avatar,
  rating,
  delay = 0,
}: TestimonialCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 30,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        delay: delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom-50",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [delay]);

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating
            ? "fill-yellow-400 text-yellow-400"
            : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <div ref={cardRef} className="testimonial-card relative">
      {/* Quote Icon */}
      <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
        <Quote className="h-4 w-4 text-primary-foreground" />
      </div>

      {/* Star Rating */}
      <div className="flex items-center space-x-1 mb-4">
        {renderStars()}
      </div>

      {/* Quote */}
      <blockquote className="text-card-foreground mb-6 italic leading-relaxed">
        "{quote}"
      </blockquote>

      {/* Person Info */}
      <div className="flex items-center space-x-4">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
        />
        <div>
          <h4 className="font-semibold text-card-foreground">{name}</h4>
          <p className="text-sm text-muted-foreground">{program}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;