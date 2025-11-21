import { Linkedin, Mail, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/emranhsaz",
      icon: Linkedin,
      label: "LinkedIn",
      testId: "button-footer-linkedin",
    },
    {
      href: "mailto:emranhwh24@gmail.com",
      icon: Mail,
      label: "Email",
      testId: "button-footer-email",
    },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4" data-testid="section-footer-brand">
            <h3 className="text-xl font-bold font-mono text-foreground">EA</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              DevOps Engineer specializing in containerization, observability, and
              infrastructure automation.
            </p>
          </div>

          <div className="space-y-4" data-testid="section-footer-links">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`button-footer-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4" data-testid="section-footer-social">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
              Connect
            </h4>
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.testId}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={social.label}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full"
                      data-testid={social.testId}
                    >
                      <Icon className="h-5 w-5" />
                    </Button>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Emran Abdalla. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
