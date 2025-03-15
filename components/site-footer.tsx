import Link from "next/link"
import { ChessLogo } from "@/components/chess-logo"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Image from "next/image"

export default function SiteFooter() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/90">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                          src="/QueenLogo2.svg" 
                          alt="Chess in IDP Logo"
                          width={32}
                          height={32}
                          className="text-primary"
                        />
                        <span className="font-bold text-primary text-white">QueenV Academy</span>
            </Link>
            <p className="text-sm text-muted-foreground">Transforming lives through the power of chess.</p>
            <div className="flex gap-4 mt-2">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-medium text-primary">About</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/about/team" className="text-sm text-muted-foreground hover:text-foreground">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/about/impact" className="text-sm text-muted-foreground hover:text-foreground">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link href="/about/partners" className="text-sm text-muted-foreground hover:text-foreground">
                  Partners
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-medium text-primary">Programs</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/programs/school" className="text-sm text-muted-foreground hover:text-foreground">
                  School Programs
                </Link>
              </li>
              <li>
                <Link href="/programs/community" className="text-sm text-muted-foreground hover:text-foreground">
                  Community Outreach
                </Link>
              </li>
              <li>
                <Link href="/programs/competitive" className="text-sm text-muted-foreground hover:text-foreground">
                  Competitive Training
                </Link>
              </li>
              <li>
                <Link href="/programs/events" className="text-sm text-muted-foreground hover:text-foreground">
                  Events & Tournaments
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-medium text-primary">Get Involved</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/get-involved/volunteer" className="text-sm text-muted-foreground hover:text-foreground">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/get-involved/donate" className="text-sm text-muted-foreground hover:text-foreground">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/get-involved/partner" className="text-sm text-muted-foreground hover:text-foreground">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="/get-involved/sponsor" className="text-sm text-muted-foreground hover:text-foreground">
                  Sponsorship
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-medium text-primary">Contact</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">info@chessinidp.org</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  123 Chess Street, Suite 456
                  <br />
                  New York, NY 10001
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border/40 pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Chess in IDP. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

