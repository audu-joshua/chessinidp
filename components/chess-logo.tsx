import type { SVGProps } from "react"

export function ChessLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Queen chess piece */}
      <path d="M9 22h6" />
      <path d="M8 22v-4h8v4" />
      <path d="M12 2v2" />
      <path d="M5 8h14" />
      <path d="M5 8c0-2.5 1.5-6 7-6 5.5 0 7 3.5 7 6" />
      <path d="M5 8v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8" />
      <path d="M6 12c6 0 12 -1.5 12 3" />
    </svg>
  )
}

