import { Heart } from "lucide-react";
import { personalInfo } from "@/data/mockData";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
            <span>© {currentYear} {personalInfo.name}.</span>
            <span className="flex items-center gap-1">
              Built with <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" /> and passion
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
