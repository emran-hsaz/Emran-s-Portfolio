import { ChevronDown, Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/emran_portrait.jpg";

export default function Hero() {
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

  const downloadResume = () => {
    window.open("/api/resume", "_blank");
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="animate-in fade-in duration-700 slide-in-from-bottom-4">
          <img
            src={heroImage}
            alt="Emran Abdalla"
            className="w-48 h-48 md:w-56 md:h-56 rounded-full mx-auto border-4 border-primary/20 shadow-lg object-cover"
            data-testid="img-hero-portrait"
          />
        </div>

        <div className="space-y-4 animate-in fade-in duration-700 delay-150 slide-in-from-bottom-4">
          <p className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">
            Hello, I'm
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Emran Abdalla
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary">
            DevOps Engineer
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Specialized in containerization, observability, and infrastructure
            automation with Docker, ELK Stack, and Ansible
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in duration-700 delay-300 slide-in-from-bottom-4">
          <Button
            size="lg"
            onClick={() => scrollToSection("#contact")}
            className="min-w-[160px]"
            data-testid="button-hero-contact"
          >
            Get In Touch
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={downloadResume}
            className="min-w-[160px]"
            data-testid="button-hero-download"
          >
            Download CV
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4 animate-in fade-in duration-700 delay-500 slide-in-from-bottom-4">
          <a
            href="https://www.linkedin.com/in/emranhsaz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            data-testid="link-hero-linkedin"
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
          </a>
          <a
            href="mailto:emranhwh24@gmail.com"
            aria-label="Email Contact"
            data-testid="link-hero-email"
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="pt-12 animate-in fade-in duration-700 delay-700 slide-in-from-bottom-4">
          <button
            onClick={() => scrollToSection("#about")}
            className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            data-testid="button-scroll-down"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
