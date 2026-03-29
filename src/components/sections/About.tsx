import { motion } from "framer-motion";
import { Code2, Zap, Layers, Sparkles } from "lucide-react";
import { personalInfo } from "@/data/mockData";

const features = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Architecture maintenable et scalable avec TypeScript.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimisation Core Web Vitals et UX fluide.",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: Layers,
    title: "Full Stack",
    description: "Design système et infrastructures backend robustes.",
    color: "from-purple-500 to-pink-500",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-40 px-4 relative overflow-hidden">
      {/* Éléments de fond décoratifs (flous de couleur) */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-accent/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Section Texte (7 colonnes) */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="h-5 w-5 text-primary animate-pulse" />
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground">
                Mon Parcours
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tighter">
              Bâtir des <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                expériences digitales
              </span> <br />
              qui comptent.
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed font-medium italic border-l-2 border-primary/20 pl-6">
              {personalInfo.about}
            </div>
          </motion.div>

          {/* Section Features (5 colonnes) */}
          <div className="lg:col-span-5 space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-6 rounded-2xl bg-white/5 dark:bg-black/20 border border-white/10 backdrop-blur-sm hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300"
              >
                {/* Ligne d'accentuation colorée */}
                <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 group-hover:h-3/4 bg-gradient-to-b ${feature.color} transition-all duration-300 rounded-full`} />
                
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.color} bg-opacity-10 dark:bg-opacity-20 flex items-center justify-center`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-snug">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Section Stats / Tags Rapides (Optionnel mais Pro) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 pt-10 border-t border-border/50 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <p className="text-3xl font-black text-primary">2+</p>
            <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Ans d'Expérience</p>
          </div>
          <div>
            <p className="text-3xl font-black text-accent">10+</p>
            <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Projets Livrés</p>
          </div>
          <div>
            <p className="text-3xl font-black text-primary">100%</p>
            <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Passionné</p>
          </div>
          <div>
            <p className="text-3xl font-black text-accent">24/7</p>
            <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Curieux</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}