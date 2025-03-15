import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  imageSrc: string
}

export default function TestimonialCard({ quote, name, role, imageSrc }: TestimonialCardProps) {
  return (
    <Card className="flex flex-col h-full bg-background/50 backdrop-blur-sm border-primary/20">
      <CardContent className="flex-1 pt-6">
        <QuoteIcon className="h-8 w-8 text-primary/20 mb-2" />
        <p className="text-muted-foreground">{quote}</p>
      </CardContent>
      <CardFooter className="flex items-center gap-4 border-t border-border/40 pt-4">
        <Image
          src={imageSrc || "/placeholder.svg"}
          width={50}
          height={50}
          alt={name}
          className="rounded-full object-cover border border-primary/20"
        />
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </CardFooter>
    </Card>
  )
}

