interface LogoProps {
  className?: string
  title?: string
}

/**
 * Stylised brush-stroke swirl used as the personal mark on every screen.
 * Uses `currentColor` so the parent controls the colour.
 */
export function Logo({ title = 'Stomfai Gergő' }: LogoProps) {
  return (
    <img
      src="./logo.svg"
      alt={title}
      className={`h-[78px] w-[95.3px]`}
    />
  )
}
