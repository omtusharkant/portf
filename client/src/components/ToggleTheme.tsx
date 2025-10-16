import { useTheme } from "../contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ToggleThemeProps {
  duration?: number;
  animationType?: "smooth" | "bounce" | "slide" | "round morph";
  className?: string;
}

export function ToggleTheme({
  duration = 300,
  animationType = "round morph",
  className
}: ToggleThemeProps) {
  const { theme, toggleTheme } = useTheme();

  const animationClass = animationType === "round morph"
    ? "transition-all duration-300 ease-in-out transform hover:scale-110"
    : `transition-all duration-${duration} ease-in-out`;

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative inline-flex items-center justify-center",
        "w-10 h-10 rounded-lg",
        "bg-background hover:bg-muted",
        "border border-border",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        animationClass,
        className
      )}
      aria-label="Toggle theme"
      style={{ transitionDuration: `${duration}ms` }}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-foreground transition-transform duration-300 rotate-0" />
      ) : (
        <Moon className="h-5 w-5 text-foreground transition-transform duration-300 rotate-0" />
      )}
    </button>
  );
}
