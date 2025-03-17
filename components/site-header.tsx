import Link from "next/link"
import { Menu, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import DonateButton from "@/components/donate-button"

export default function SiteHeader() {
  return (
    <header className="fixed top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/QueenLogo2.svg" 
            alt="Chess in IDP Logo"
            width={32}
            height={32}
            className="text-primary pt-10"
          />
          <span className="font-bold text-primary text-white">QueenV <span className="hidden md:block">Academy</span></span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-6">
  <Link
    href="/"
    className="text-sm font-medium transition-all duration-300 ease-in-out hover:text-white hover:drop-shadow-xl hover:scale-105"
  >
    Home
  </Link>
  <Link
    href="/about"
    className="text-sm font-medium transition-all duration-300 ease-in-out hover:text-white hover:drop-shadow-xl hover:scale-105"
  >
    About Us
  </Link>
  <Link
    href="/programs"
    className="text-sm font-medium transition-all duration-300 ease-in-out hover:text-white hover:drop-shadow-xl hover:scale-105"
  >
    Programs
  </Link>
  <Link
    href="/blog"
    className="text-sm font-medium transition-all duration-300 ease-in-out hover:text-white hover:drop-shadow-xl hover:scale-105"
  >
    Blog
  </Link>
  <Link
    href="/get-involved"
    className="text-sm font-medium transition-all duration-300 ease-in-out hover:text-white hover:drop-shadow-xl hover:scale-105"
  >
    Get Involved
  </Link>
  <Link
    href="/contact"
    className="text-sm font-medium transition-all duration-300 ease-in-out hover:text-white hover:drop-shadow-xl hover:scale-105"
  >
    Contact
  </Link>
</nav>

        <Sheet>
          <SheetTrigger asChild className="ml-2 md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full">
            <div className="flex flex-col gap-4 mt-8">
              <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                Home
              </Link>
              <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
                About Us
              </Link>
              <Link href="/programs" className="text-sm font-medium transition-colors hover:text-primary">
                Programs
              </Link>
              <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
                Blog
              </Link>
              <Link href="/get-involved" className="text-sm font-medium transition-colors hover:text-primary">
                Get Involved
              </Link>
              <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
                Contact
              </Link>
              {/* Donate button in mobile menu */}
              <Link
                href="/get-involved/donate"
                className="flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-600 text-white px-4 py-3 rounded-lg shadow-lg mt-4 font-bold"
              >
                <Heart className="h-5 w-5 text-white" fill="white" />
                <span>Donate</span>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      {/* Fixed donate button */}
      <DonateButton />
    </header>
  )
}