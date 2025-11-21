import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: "acuative",
    title: "DevOps Engineer",
    company: "Acuative",
    location: "On-site",
    period: "Jan 2024 - Present",
    description: [
      "Deployed and managed Docker containers in clustered environments to improve scalability, reliability, and performance",
      "Implemented ELK Stack solutions and Elastic APM for comprehensive observability and application performance monitoring",
      "Built and optimized Logstash pipelines and custom agents for efficient log collection, parsing, and data enrichment",
      "Automated infrastructure configuration and deployments using Ansible and Bash scripting to reduce manual operations",
      "Maintained and secured Linux-based production environments, applying performance tuning and hardening best practices",
      "Supported operations in air-gapped environments, designing and maintaining secure, isolated infrastructure",
      "Utilized Git for version control, ensuring consistent configuration management and collaborative workflows",
    ],
    tags: ["Docker", "ELK Stack", "Elastic APM", "Ansible", "Bash", "Linux", "Git", "Machine Learning Jobs"],
  },
  {
    id: "dai-usaid",
    title: "Software Developer",
    company: "DAI (USAID) - PFMA",
    location: "On-site",
    period: "Sep 2023 - Jan 2024",
    description: [
      "Provided Oracle APEX & PL/SQL development for software projects",
      "Assisted NGOs & donors with software development and technical solutions",
      "Collaborated on USAID projects, ensuring compliance with requirements",
      "Coordinated cross-functional teams & stakeholders for project delivery",
      "Maintained comprehensive project documentation & reporting",
      "Conducted data gathering & analysis for informed decision-making",
    ],
    tags: ["Oracle APEX", "PL/SQL", "Project Management"],
  },
  {
    id: "tahaluf",
    title: "Full-Stack Developer",
    company: "Tahaluf Al Emarat Technical Solutions",
    location: "Remotely",
    period: "Feb 2023 - Aug 2023",
    description: [
      "Developed full-stack applications using Angular, C#, ASP.NET, and Web API",
      "Designed and managed databases for efficient data storage and retrieval",
      "Applied Agile methodologies, collaborating with cross-functional teams",
      "Built interactive SPAs with Angular, ensuring seamless user experience",
      "Led development of an event website, integrating payment systems and RESTful APIs",
      "Utilized GitHub for version control, code collaboration, and project management",
      "Strengthened problem-solving skills through real-world challenges",
    ],
    tags: ["Angular", "C#", ".NET Core", "ASP.NET", "SQL", "Git"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building expertise through hands-on experience
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                <div className="hidden md:block absolute left-8 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-[7px]" />

                <Card
                  className="md:ml-20 p-6 md:p-8 hover-elevate transition-all duration-300"
                  data-testid={`card-experience-${exp.id}`}
                >
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                        <div className="space-y-2">
                          <h3 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
                            <Briefcase className="h-5 w-5 text-primary" />
                            {exp.title}
                          </h3>
                          <p className="text-lg font-semibold text-primary">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span className="font-medium">{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-3" data-testid={`list-responsibilities-${exp.id}`}>
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-base text-foreground/80"
                          data-testid={`item-responsibility-${exp.id}-${i}`}
                        >
                          <span className="text-primary font-mono text-sm mt-1.5">
                            ▸
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4" data-testid={`tags-experience-${exp.id}`}>
                      {exp.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs font-mono"
                          data-testid={`badge-tech-${exp.id}-${tag.toLowerCase().replace(/[\s\/()]/g, '-')}`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
