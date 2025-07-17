import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CarouselDotsProps {
  className?: string;
  totalSlides?: number;
  currentSlide?: number;
  onDotClick?: (index: number) => void;
}

export const CarouselDots = ({ 
  className, 
  totalSlides = 3, 
  currentSlide = 0, 
  onDotClick 
}: CarouselDotsProps) => {
  return (
    <div className={cn("flex justify-center gap-2", className)}>
      {Array.from({ length: totalSlides }).map((_, index) => (
        <Button
          key={index}
          type="button"
          variant="ghost"
          size="sm"
          className={cn(
            "w-2.5 h-2.5 p-0 rounded-full transition-all duration-300 border-0",
            currentSlide === index 
              ? "bg-white scale-125" 
              : "bg-white/50 hover:bg-white/80"
          )}
          onClick={() => onDotClick?.(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default CarouselDots;