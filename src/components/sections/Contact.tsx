import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact } from "@/data/mockData";

export function Contact() {
  const socials = [
    { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: Github, label: "GitHub", href: contact.github },
    { icon: Linkedin, label: "LinkedIn", href: contact.linkedin },
  ];

  return (
    <section id="contact" className="py-24 md:py-40 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
              DISCUTONS DE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">VOTRE PROJET.</span>
            </h2>
            
            <div className="space-y-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  className="flex items-center justify-between p-4 rounded-2xl border border-transparent hover:border-border hover:bg-muted/50 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <social.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{social.label}</p>
                      <p className="font-medium">{social.value || "Suivez-moi"}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Call to Action Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 p-8 md:p-12 rounded-[2rem] bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-2xl overflow-hidden group">
              {/* Decorative Circle */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              
              <h3 className="text-3xl font-bold mb-4 relative z-10">Un besoin spécifique ?</h3>
              <p className="text-primary-foreground/80 mb-8 text-lg relative z-10">
                Je suis actuellement disponible pour de nouvelles opportunités en freelance ou en CDI.
              </p>
              
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="w-full md:w-auto rounded-full px-8 py-6 text-lg font-bold hover:scale-105 transition-transform"
              >
                <a href={`mailto:${contact.email}`}>
                  Envoyer un message
                </a>
              </Button>
            </div>
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-primary blur-[100px] opacity-20 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}