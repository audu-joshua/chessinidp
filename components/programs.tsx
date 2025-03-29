"use client"
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ChevronRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ChessProgramsSection = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section className="w-full py-12 md:py-24 bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
            <h2
              className="text-3xl pb-2 font-bold tracking-tighter sm:text-4xl md:text-5xl text-white"
              style={{
                background: "linear-gradient(120deg, #ffffff, #e0e0e0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
                animation: "shine 3s linear infinite",
              }}
            >
              Our Programs
            </h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover how we're using chess to transform communities and empower individuals.
            </p>
          </div>
        </div>
        <div className="mx-auto relative flex flex-col items-center gap-8 py-12 md:grid md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "School Programs",
              description: "Chess in the classroom",
              img: "/v8.jpeg",
              link: "/programs/school",
              text: "Integrating chess into school curricula to enhance academic performance and social skills.",
            },
            {
              title: "Community Outreach",
              description: "Chess for everyone",
              img: "/v17.jpeg",
              link: "/programs/community",
              text: "Free chess workshops and events in underserved communities to foster inclusion and opportunity.",
            },
            {
              title: "Competitive Training",
              description: "Chess excellence",
              img: "/v14.jpeg",
              link: "/programs/competitive",
              text: "Advanced training for talented players to compete at regional and national levels.",
            },
          ].map((program, index) => (
            <motion.div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="w-full max-w-[90%] sm:max-w-full md:w-auto"
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Card className="program-card bg-black border-white/10 transition-all duration-500 hover:bg-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white">{program.title}</CardTitle>
                  <CardDescription className="text-gray-400">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative aspect-video overflow-hidden rounded-lg group">
                    <Image
                      src={program.img}
                      width={400}
                      height={200}
                      alt={program.title}
                      className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#433423] opacity-30 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0"></div>
                  </div>
                  <p className="mt-4 text-gray-400">{program.text}</p>
                </CardContent>
                <CardFooter>
                  <Link href={program.link} className="inline-flex items-center text-sm font-medium text-white group">
                    Learn more <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
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
    </section>
  );
};

export default ChessProgramsSection;
