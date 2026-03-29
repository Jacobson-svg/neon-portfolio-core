import { motion } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/mockData";

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent -z-10" />

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
            SELECTED <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">WORKS</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Une immersion dans mes dernières réalisations techniques et créatives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative rounded-3xl overflow-hidden bg-muted/30 border border-border/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/30">
                
                {/* Image Section */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button size="icon" variant="secondary" className="rounded-full hover:scale-110 transition-transform" asChild>
                      <a href={project.demo} target="_blank"><ExternalLink className="h-5 w-5" /></a>
                    </Button>
                    {project.github && (
                      <Button size="icon" variant="secondary" className="rounded-full hover:scale-110 transition-transform" asChild>
                        <a href={project.github} target="_blank"><Github className="h-5 w-5" /></a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <Code2 className="text-muted-foreground/30 h-6 w-6" />
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-md bg-primary/5 text-primary border border-primary/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}