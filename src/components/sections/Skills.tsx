import { motion } from "framer-motion";
import { skills } from "@/data/mockData";

// Garder les couleurs pour les lueurs (glow) de fond
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
  // Configuration propre de Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section id="skills" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        
        {/* Titre de la section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full opacity-80" />
        </motion.div>

        {/* Grille Fluide (sans segmentation stricte) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {skills.map((skill) => {
            const gradientClass = categoryColors[skill.category] || categoryColors.Tools;
            
            // Pour Express qui est souvent noir par défaut, on peut forcer un filtre ou un fond blanc si besoin
            const isDarkLogo = skill.name === "Express";

            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="group relative flex flex-col items-center justify-center p-6 bg-white/5 dark:bg-black/20 border border-black/5 dark:border-white/5 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-white/5"
              >
                {/* Lueur d'arrière-plan au survol (Glow effect) */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-0 group-hover:opacity-[0.08] dark:group-hover:opacity-15 rounded-2xl transition-opacity duration-300 pointer-events-none`} />
                
                {/* Conteneur de l'icône */}
                <div className="relative w-14 h-14 md:w-16 md:h-16 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={skill.icon} 
                    alt={`${skill.name} logo`} 
                    className={`max-w-full max-h-full object-contain drop-shadow-sm ${isDarkLogo ? 'dark:invert' : ''}`}
                    loading="lazy"
                  />
                </div>
                
                {/* Texte */}
                <h3 className="font-medium text-sm md:text-base text-foreground/90 group-hover:text-foreground transition-colors text-center">
                  {skill.name}
                </h3>
                
                {/* Petit tag de catégorie subtil au lieu de grosses boîtes */}
                <span className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground/70 group-hover:text-muted-foreground transition-colors">
                  {skill.category}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}