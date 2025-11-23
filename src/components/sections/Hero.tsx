import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo, contact } from "@/data/mockData";
import profileImage from "@/assets/profile.jpg";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 dark:from-primary/10 dark:to-accent/10" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--primary-rgb,0,0,0),0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary-rgb,0,0,0),0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(rgba(var(--accent-rgb,255,255,255),0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--accent-rgb,255,255,255),0.03)_1px,transparent_1px)]" />

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="animate-on-scroll">
              <h2 className="text-lg md:text-xl text-primary dark:text-accent font-medium mb-2">
                Hello, I'm
              </h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                {personalInfo.name.split(" ").map((word, i) => (
                  <span
                    key={i}
                    className={i === 0 ? "gradient-text block" : "block"}
                  >
                    {word}
                  </span>
                ))}
              </h1>
              <h3 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium">
                {personalInfo.role}
              </h3>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed animate-on-scroll max-w-xl">
              {personalInfo.bio}
            </p>

            <div className="flex flex-wrap gap-4 animate-on-scroll">
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="group bg-primary hover:bg-primary/90 dark:bg-accent dark:hover:bg-accent/90 dark:text-foreground"
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="border-primary/30 hover:bg-primary/10 dark:border-accent/30 dark:hover:bg-accent/10"
                >
                  <a href={contact.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="border-primary/30 hover:bg-primary/10 dark:border-accent/30 dark:hover:bg-accent/10"
                >
                  <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="border-primary/30 hover:bg-primary/10 dark:border-accent/30 dark:hover:bg-accent/10"
                >
                  <a href={`mailto:${contact.email}`}>
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center animate-on-scroll"
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent dark:from-accent dark:to-primary rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-glow-pulse" />
              
              {/* Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 dark:border-accent/30 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <img
                  src={profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent dark:from-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary dark:border-accent rounded-full opacity-50 animate-float" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-accent dark:border-primary rounded-full opacity-30 animate-float" style={{ animationDelay: "1s" }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
