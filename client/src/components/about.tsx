import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

export default function About() {
  const languages = [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Proficient" },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            DevOps Engineer passionate about automation and scalable infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="space-y-4 text-base md:text-lg text-foreground/90 leading-relaxed">
              <p>
                I'm a passionate DevOps Engineer with hands-on expertise in
                containerization, monitoring, and automation. Currently working at
                Acuative, I specialize in deploying and managing scalable
                Docker-based environments and implementing real-time observability
                solutions.
              </p>
              <p>
                My experience spans the full DevOps lifecycle, from implementing
                comprehensive ELK Stack solutions and Elastic APM for application
                performance monitoring to building optimized Logstash pipelines for
                efficient log management. I'm proficient in automating
                infrastructure tasks with Ansible and Bash, while maintaining
                secure Linux environments.
              </p>
              <p>
                With a strong foundation in full-stack development using Angular,
                .NET Core, and Java Spring Boot, I bring a unique perspective to
                DevOps challenges, understanding both the development and operations
                sides of modern software delivery.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang) => (
                  <Badge
                    key={lang.name}
                    variant="secondary"
                    className="text-sm px-4 py-2"
                    data-testid={`badge-language-${lang.name.toLowerCase()}`}
                  >
                    {lang.name} - {lang.level}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-8 bg-primary/5 border-primary/20" data-testid="card-philosophy">
              <div className="flex items-start gap-4">
                <Quote className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    DevOps Philosophy
                  </h3>
                  <p className="text-base text-foreground/80 leading-relaxed italic" data-testid="text-philosophy-quote">
                    "Automation is not about replacing humans, but about enabling
                    them to focus on what matters most - innovation and building
                    reliable, scalable systems that empower teams to deliver value
                    faster."
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6" data-testid="card-highlights">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  Key Highlights
                </h3>
                <ul className="space-y-3 text-base text-foreground/80" data-testid="list-highlights">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-mono text-lg">▸</span>
                    <span>
                      Implemented ELK Stack solutions for comprehensive observability
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-mono text-lg">▸</span>
                    <span>
                      Deployed and managed Docker containers in clustered
                      environments
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-mono text-lg">▸</span>
                    <span>
                      Automated infrastructure configuration using Ansible and Bash
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-mono text-lg">▸</span>
                    <span>
                      Maintained secure Linux-based production environments
                    </span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
