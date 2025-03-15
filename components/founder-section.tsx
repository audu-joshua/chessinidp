/* eslint-disable react/no-unescaped-entities */
"use client"
import Image from "next/image" 
export default function FounderSection() {
  return (
    <section className="w-full py-12 md:py-14">
      <div className="container px-4 md:px-6">
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
          Our Founder
        </h2>
            <p className="md:max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Meet the visionary behind Chess in IDP
            </p>
          </div>
        </div>
        <div className="md:mx-auto flex flex-col items-center gap-6 py-12 md:flex-row md:gap-12">
          <div className="flex flex-col items-center md:items-start w-full">
            <div className="relative w-full">
              <Image
                src="/QueenV.jpeg"
                width={400}
                height={400}
                alt="Founder portrait"
                className="rounded-xl object-cover shadow-lg border border-primary/20 w-full h-auto"
              />
              <div className="absolute -bottom-4 md:-right-6 right-10 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg">
                <span className="font-bold">Queen V</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4 w-full">
            <h3 className="text-2xl font-extrabold text-primary" style={{
            background: "linear-gradient(120deg, #ffffff, #e0e0e0)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
            animation: "shine 3s linear infinite",
          }}>Vivian Ibrahim</h3>
            <p className="text-muted-foreground">
              Founder & Executive Director <span className="text-primary font-medium">(Queen V)</span>
            </p>
            <div className="space-y-4">
              <p>
                I founded Chess in IDP with a simple vision: to transform lives through the power of chess. Growing up
                in an underserved community, I witnessed firsthand how chess provided not just a game, but a pathway to
                critical thinking, patience, and strategic planning.
              </p>
              <p>
                Our organization is built on the belief that chess is more than moves on a board—it's a tool for social
                change. When a child learns chess, they're not just learning a game; they're developing life skills that
                will serve them far beyond the chessboard.
              </p>
              <p>
                My vision is to create a world where every child, regardless of background or circumstance, has access
                to the transformative power of chess. A world where communities are strengthened through the connections
                made over a chessboard, and where strategic thinking becomes a foundation for success in all areas of
                life.
              </p>
            </div>
          </div>
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
  )
}
