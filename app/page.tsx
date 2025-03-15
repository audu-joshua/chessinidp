"use client"
import Link from "next/link"
import Image from "next/image"
import {Users, Calendar, Award } from "lucide-react"
import NewsletterSignup from "@/components/newsletter-signup"
import TestimonialCard from "@/components/testimonial-card"
import FounderSection from "@/components/founder-section"
import Gallery from "@/components/gallery"
import HeroCarousel from "@/components/Home Carousel"
import ChessProgramsSection from "@/components/programs"

export default function Home() {
  // Gallery images
  const galleryImages = [
    {
      src: "/v7.jpeg",
      alt: "Chess tournament in progress",
      title: "Tonde Onakoya And our IDP Kids",
    },
    {
      src: "/v11.jpeg",
      alt: "Chess tournament in progress",
      title: "QueenV in A Competition",
    },
    {
      src: "/v15.jpeg",
      alt: "Community chess event",
      title: "QueenV Received Tunde Onakoya in Yola",
    },
    {
      src: "/v13.jpeg",
      alt: "Chess master class",
      title: "Idp Kids in a Chess Event",
    },
    {
      src: "/v14.jpeg",
      alt: "Chess in the park",
      title: "Chess Battle",
    },
    {
      src: "/v12.jpeg",
      alt: "Award ceremony",
      title: "Tunde Onakoya in a Competition against one of the Idp Kids",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      {/* Enhanced Hero Section with Black & White Design */}
      <section className="relative h-screen flex flex-col justify-evenly md:justify-center w-full py-16 sm:py-20 xl:py-40 overflow-hidden">
        {/* Background Image with High Contrast B&W Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/"
            alt="Chess background"
            fill
            className="object-cover object-center grayscale contrast-125"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/80"></div>
        </div>

        {/* Chess piece decorative elements */}
        <div className="absolute bottom-0 right-0 opacity-10 z-0">
          <svg width="400" height="400" viewBox="0 0 24 24" fill="none" className="text-white">
            <path d="M9 22h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 22v-4h8v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 8h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path
              d="M5 8c0-2.5 1.5-6 7-6 5.5 0 7 3.5 7 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 8v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-8">
              <div className="inline-block">
                <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-sm font-medium mb-4 md:mt-8 md:mb-0">
                  Empowering Through Strategy
                </span>
              </div>
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none">
                  <span className="text-white drop-shadow-sm">Chess in IDP</span>
                  <span className="block mt-4 text-3xl sm:text-4xl xl:text-5xl text-white/80">
                    Changing Lives Through Chess
                  </span>
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-xl leading-relaxed">
                  We empower displaced communities by teaching chess as a tool for critical thinking, patience, and
                  strategic planning — building bridges across cultures.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Link
                  href="/programs"
                  className="inline-flex h-14 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black shadow-lg transition-all hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
                >
                  Our Programs
                </Link>
                <Link
                  href="/get-involved"
                  className="inline-flex h-14 items-center justify-center rounded-md border border-white/30 bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
                >
                  Get Involved
                </Link>
              </div>
            </div>
            {/* Replace this section in your Home component */}
<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
  <div className="flex flex-col justify-center space-y-8">
    {/* Your existing content */}
  </div>
  
  {/* Replace the static image with the carousel */}
  <HeroCarousel />
</div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <FounderSection />

      {/* Mission Section */}
      <section 
  className="w-full py-8 md:py-10 bg-cover bg-center relative"
  style={{
    backgroundImage: "url('/v11.jpeg')",
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/70 bg-opacity-70"></div>
  
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white" style={{
            background: "linear-gradient(120deg, #ffffff, #e0e0e0)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
            animation: "shine 3s linear infinite",
          }}>Our Mission</h2>
        <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          We believe chess is more than a game. It's a powerful educational tool that teaches life skills, builds
          confidence, and creates community.
        </p>
      </div>
    </div>
    
    <div className="mx-auto grid max-w-5xl items-center gap-8 py-8 md:pb-4 pb-2 md:grid-cols-2 md:gap-12 lg:gap-16">
      <div className="flex flex-col justify-center space-y-6">
        <ul className="grid gap-8">
          <li>
            <div className="grid gap-2">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Community Building</h3>
              </div>
              <p className="text-gray-300 pl-16">
                Creating safe spaces where diverse communities can connect through chess.
              </p>
            </div>
          </li>
          <li>
            <div className="grid gap-2">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Skill Development</h3>
              </div>
              <p className="text-gray-300 pl-16">
                Teaching critical thinking, patience, and strategic planning through chess.
              </p>
            </div>
          </li>
          <li>
            <div className="grid gap-2">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Accessible Programs</h3>
              </div>
              <p className="text-gray-300 pl-16">
                Making chess education available to all, regardless of background or resources.
              </p>
            </div>
          </li>
        </ul>
      </div>
      
      <div className="h-full flex justify-center w-full">
  <Image
    src="/QueenLogo2.svg"
    width={600}  // Adjust the width
    height={150} // Adjust the height
    alt="Chess workshop in progress"
    className=" w-[40%] md:w-fit h-full object-cover rounded-xl shadow-lg"
  />
</div>

    </div>
  </div>
</section>

      {/* Gallery Section */}
      <section className="w-full py-12 md:py-24  bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white" style={{
            background: "linear-gradient(120deg, #ffffff, #e0e0e0)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
            animation: "shine 3s linear infinite",
          }}>Gallery</h2>
              <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Moments captured from our programs and events around the world.
              </p>
            </div>
          </div>
          <div className="mt-12">
          <Gallery images={galleryImages} />
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <ChessProgramsSection/>


      {/* Testimonials */}
      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary" style={{
            background: "linear-gradient(120deg, #ffffff, #e0e0e0)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
            animation: "shine 3s linear infinite",
          }} >Success Stories</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from those whose lives have been transformed through our chess programs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-2 md:gap-6 py-2 md:py-6 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              quote="Chess taught me patience and how to think ahead. These skills have helped me in school and beyond."
              name="Sarah J."
              role="Student, Age 14"
              imageSrc="/T3.png"
            />
            <TestimonialCard
              quote="The community chess program gave my son confidence and a sense of belonging. It's been transformative."
              name="Michael T."
              role="Parent"
              imageSrc="/T2.png"
            />
            <TestimonialCard
              quote="As a teacher, I've seen remarkable improvements in focus and problem-solving since introducing chess."
              name="Lisa M."
              role="Elementary School Teacher"
              imageSrc="/T5.png"
            />
          </div>
        </div>
      </section>

      {/* Call to Action 
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Join Our Mission</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Help us bring the transformative power of chess to more communities.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/get-involved/volunteer"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Volunteer
              </Link>
              <Link
                href="/get-involved/donate"
                className="inline-flex h-10 items-center justify-center rounded-md border border-primary/30 bg-background/10 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Donate
              </Link>
              <Link
                href="/get-involved/partner"
                className="inline-flex h-10 items-center justify-center rounded-md border border-primary/30 bg-background/10 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Newsletter */}
      <section
  className="w-full bg-secondary/30 py-12 md:py-24 relative"
  style={{
    backgroundImage: "url('/v11.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/70"></div>

  <div className="relative z-10 container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h2
          className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary"
          style={{
            background: "linear-gradient(120deg, #ffffff, #e0e0e0)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
            animation: "shine 3s linear infinite",
          }}
        >
          Stay Connected
        </h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Subscribe to our newsletter for updates on programs, events, and success stories.
        </p>
      </div>
      <div className="w-full max-w-sm">
        <NewsletterSignup />
      </div>
    </div>
  </div>

  <style jsx>{`
    @keyframes shine {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  `}</style>
</section>

    </main>
  )
}

