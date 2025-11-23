import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { skills } from "@/data/mockData";

const categoryColors: Record<string, string> = {
  Frontend: "from-blue-500 to-cyan-500",
  Backend: "from-green-500 to-emerald-500",
  Language: "from-purple-500 to-pink-500",
  Database: "from-orange-500 to-red-500",
  DevOps: "from-yellow-500 to-orange-500",
  Cloud: "from-indigo-500 to-blue-500",
  API: "from-cyan-500 to-teal-500",
  Tools: "from-gray-500 to-slate-500",
};

export function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 animate-on-scroll"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => {
            const gradientClass = categoryColors[skill.category] || categoryColors.Tools;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="animate-on-scroll group"
              >
                <div className="glass rounded-xl p-4 md:p-6 text-center hover:scale-105 transition-all duration-300 relative overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${gradientClass} opacity-10 dark:opacity-20 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <span className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-primary to-accent dark:from-accent dark:to-primary bg-clip-text text-transparent">
                        {skill.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="font-semibold text-sm md:text-base mb-1">{skill.name}</h3>
                    <p className="text-xs text-muted-foreground">{skill.category}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
