import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact, personalInfo } from "@/data/mockData";

export function Contact() {
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

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "jacobfotso",
      href: contact.github,
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "jacobfotso",
      href: contact.linkedin,
      color: "from-blue-600 to-blue-800",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-background dark:via-accent/5" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 animate-on-scroll"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's connect!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="animate-on-scroll group"
                >
                  <div className="glass rounded-xl p-6 hover:scale-105 transition-all duration-300 text-center glow-subtle">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${method.color} opacity-10 dark:opacity-20 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="h-8 w-8 text-primary dark:text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{method.label}</h3>
                    <p className="text-sm text-muted-foreground break-all">{method.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 md:p-12 text-center animate-on-scroll glow-subtle"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Start a Project?</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Whether you have a question or just want to say hello, I'll try my best to get back to you!
            </p>
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 dark:bg-accent dark:hover:bg-accent/90 dark:text-foreground group"
            >
              <a href={`mailto:${contact.email}`}>
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
