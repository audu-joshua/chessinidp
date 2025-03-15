"use client"

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideTimerRef = useRef<NodeJS.Timeout | null>(null);
  const colorTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Carousel images
  const images = [
    {
      src: "/v1.jpg",
      alt: "Students playing chess",
    },
    {
      src: "/v11.jpeg",
      alt: "Chess tournament in progress",
    },
    {
      src: "/v10.jpeg",
      alt: "Chess workshop with children",
    },
    {
      src: "/v8.jpeg",
      alt: "Community chess event",
    },
    {
      src: "/v13.jpeg",
      alt: "Chess master class",
    }
  ];

  // Handle slide and animation timing
  const startColorAnimation = () => {
    setIsAnimating(true);
    
    // Clear any existing timers
    if (colorTimerRef.current) clearTimeout(colorTimerRef.current);
    if (slideTimerRef.current) clearTimeout(slideTimerRef.current);
    
    // Set timer to advance to next slide after animation completes
    slideTimerRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsAnimating(false);
    }, 4000); // 2 second color animation, then slide
  };

  // Auto-advance carousel
  useEffect(() => {
    // Start first animation
    startColorAnimation();
    
    // Setup interval for continuous cycling
    const interval = setInterval(() => {
      startColorAnimation();
    }, 5000); // 5 Total time for each slide (animation + viewing)
    
    return () => {
      clearInterval(interval);
      if (colorTimerRef.current) clearTimeout(colorTimerRef.current);
      if (slideTimerRef.current) clearTimeout(slideTimerRef.current);
    };
  }, [images.length]);

  // Navigate to previous image
  const prevSlide = () => {
    // Clear existing timers when manually navigating
    if (colorTimerRef.current) clearTimeout(colorTimerRef.current);
    if (slideTimerRef.current) clearTimeout(slideTimerRef.current);
    
    setIsAnimating(false);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    
    // Restart animation cycle
    setTimeout(() => {
      startColorAnimation();
    }, 50);
  };

  // Navigate to next image
  const nextSlide = () => {
    // Clear existing timers when manually navigating
    if (colorTimerRef.current) clearTimeout(colorTimerRef.current);
    if (slideTimerRef.current) clearTimeout(slideTimerRef.current);
    
    setIsAnimating(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    
    // Restart animation cycle
    setTimeout(() => {
      startColorAnimation();
    }, 50);
  };

  // Handle direct navigation to a specific slide
  const goToSlide = (index: number) => {
    // Clear existing timers when manually navigating
    if (colorTimerRef.current) clearTimeout(colorTimerRef.current);
    if (slideTimerRef.current) clearTimeout(slideTimerRef.current);
    
    setIsAnimating(false);
    setCurrentIndex(index);
    
    // Restart animation cycle
    setTimeout(() => {
      startColorAnimation();
    }, 50);
  };

  return (
    <div className="relative hidden lg:block">
      {/* Background blur element */}
      <div className="absolute -left-10 -top-10 w-40 h-40 rounded-full bg-white/5 blur-3xl"></div>

      {/* Carousel container */}
      <div className="relative overflow-hidden rounded-xl border border-white/20 shadow-xl shadow-white/5">
        {/* Images */}
        <div 
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full">
              <div className="relative">
                <Image
                  src={image.src}
                  width={550}
                  height={550}
                  alt={image.alt}
                  className={`mx-auto aspect-square overflow-hidden object-cover transition-all duration-4000 ${index === currentIndex && isAnimating ? 'grayscale-0' : 'grayscale'}`}
                  style={{
                    transitionDuration: index === currentIndex ? '4000ms' : '300ms'
                  }}
                  priority={index === 0}
                />
                {/* Animated overlay that fades out */}
                {index === currentIndex && (
                  <div 
                    className="absolute inset-0 bg-black/60 transition-opacity pointer-events-none"
                    style={{
                      opacity: isAnimating ? 0 : 0.6,
                      transitionDuration: '4000ms'
                    }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button 
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/70 p-2 text-white hover:bg-black/90 focus:outline-none"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/70 p-2 text-white hover:bg-black/90 focus:outline-none"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white w-4' : 'bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Stats counter */}
      <div className="absolute -bottom-6 -left-6 rounded-lg bg-black/90 backdrop-blur-sm p-4 shadow-lg border border-white/10">
        <div className="flex items-center gap-2">
          <span className="text-4xl font-bold text-white">5000+</span>
          <span className="text-sm text-gray-400">Students impacted through our programs</span>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;