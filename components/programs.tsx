"use client"
import React, { useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { ChevronRight, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ChessProgramsSection = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    // Only run on mobile devices
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('card-in-view');
            } else {
              entry.target.classList.remove('card-in-view');
            }
          });
        },
        { threshold: 0.3 }
      );
      
      cardsRef.current.forEach(card => {
        if (card) observer.observe(card);
      });
      
      return () => {
        if (observer) {
          cardsRef.current.forEach(card => {
            if (card) observer.unobserve(card);
          });
        }
      };
    }
  }, []);
  
  return (
    <section className="w-full py-12 md:py-24 bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl pb-2 font-bold tracking-tighter sm:text-4xl md:text-5xl text-white" style={{
            background: "linear-gradient(120deg, #ffffff, #e0e0e0)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
            animation: "shine 3s linear infinite",
          }}>Our Programs</h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover how we're using chess to transform communities and empower individuals.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          <Card 
            ref={el => cardsRef.current[0] = el} 
            className="program-card bg-black border-white/10 transition-all duration-500 hover:bg-zinc-800"
          >
            <CardHeader>
              <CardTitle className="text-white">School Programs</CardTitle>
              <CardDescription className="text-gray-400">Chess in the classroom</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video overflow-hidden rounded-lg group">
                <Image
                  src="/v8.jpeg"
                  width={400}
                  height={200}
                  alt="School chess program"
                  className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#433423] opacity-30 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0"></div>
              </div>
              <p className="mt-4 text-gray-400">
                Integrating chess into school curricula to enhance academic performance and social skills.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/programs/school" className="inline-flex items-center text-sm font-medium text-white group">
                Learn more <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </CardFooter>
          </Card>
          <Card 
            ref={el => cardsRef.current[1] = el} 
            className="program-card bg-black border-white/10 transition-all duration-500 hover:bg-zinc-800"
          >
            <CardHeader>
              <CardTitle className="text-white">Community Outreach</CardTitle>
              <CardDescription className="text-gray-400">Chess for everyone</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video overflow-hidden rounded-lg group">
                <Image
                  src="/v17.jpeg"
                  width={400}
                  height={200}
                  alt="Community chess event"
                  className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#433423] opacity-30 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0"></div>
              </div>
              <p className="mt-4 text-gray-400">
                Free chess workshops and events in underserved communities to foster inclusion and opportunity.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/programs/community" className="inline-flex items-center text-sm font-medium text-white group">
                Learn more <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </CardFooter>
          </Card>
          <Card 
            ref={el => cardsRef.current[2] = el} 
            className="program-card bg-black border-white/10 transition-all duration-500 hover:bg-zinc-800"
          >
            <CardHeader>
              <CardTitle className="text-white">Competitive Training</CardTitle>
              <CardDescription className="text-gray-400">Chess excellence</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video overflow-hidden rounded-lg group">
                <Image
                  src="/v14.jpeg"
                  width={400}
                  height={200}
                  alt="Chess tournament"
                  className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#433423] opacity-30 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0"></div>
              </div>
              <p className="mt-4 text-gray-400">
                Advanced training for talented players to compete at regional and national levels.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/programs/competitive" className="inline-flex items-center text-sm font-medium text-white group">
                Learn more <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div className="flex justify-center">
          <Link
            href="/programs"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            View All Programs <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 767px) {
          .card-in-view .group img {
            filter: grayscale(0);
            transform: scale(1.05);
          }
          
          .card-in-view .group div {
            opacity: 0;
          }
          
          .card-in-view {
            background-color: rgb(39, 39, 42); /* zinc-800 */
          }
        }
      `}</style>
    </section>
  );
};

export default ChessProgramsSection;