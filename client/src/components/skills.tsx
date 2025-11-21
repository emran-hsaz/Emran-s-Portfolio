import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Eye,
  Container,
  Wrench,
  Code,
  Cloud,
  Terminal,
} from "lucide-react";

const skillCategories = [
  {
    id: "observability",
    title: "Full-stack Observability",
    icon: Eye,
    skills: ["ELK Stack", "Elastic APM", "Logstash (ETL)", "Kibana", "Elasticsearch", "SLI/SLO", "ML/Jobs"],
  },
  {
    id: "containerization",
    title: "Containerization & Orchestration",
    icon: Container,
    skills: ["Docker", "Container Registry", "Docker Compose", "Microservices", "Kubernetes"],
  },
  {
    id: "devops-tools",
    title: "DevOps & Automation",
    icon: Wrench,
    skills: ["Ansible", "Git & GitHub", "CI/CD", "Linux Administration", "Infrastructure as Code"],
  },
  {
    id: "development",
    title: "Development Frameworks",
    icon: Code,
    skills: [
      "Angular",
      "TypeScript",
      "JavaScript/jQuery",
      "C# / .NET Core",
      "Java (Spring Boot)",
      "Oracle APEX",
    ],
  },
  {
    id: "cloud-platforms",
    title: "Cloud & Infrastructure",
    icon: Cloud,
    skills: ["AWS", "OCI", "Linux (Production)", "Air-gapped Environments"],
  },
  {
    id: "scripting",
    title: "Scripting & Programming",
    icon: Terminal,
    skills: ["Bash Scripting", "Python", "PL/SQL", "Problem-Solving", "OOP", "MVC"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set for modern DevOps practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.id}
                className="p-6 hover-elevate transition-all duration-300"
                data-testid={`card-skill-${category.id}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs font-mono px-2.5 py-1"
                        data-testid={`badge-skill-${skill.toLowerCase().replace(/[\s\/()]/g, '-')}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
