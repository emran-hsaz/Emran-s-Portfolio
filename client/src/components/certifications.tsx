import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle } from "lucide-react";

const certifications = [
  {
    id: "elastic-observability",
    name: "Elastic Certified Observability Engineer",
    issuer: "Elastic",
    description: "Advanced observability and monitoring with Elastic Stack",
    tags: ["Observability", "ELK Stack", "APM"],
  },
  {
    id: "elastic-data-analyst",
    name: "Elastic Certified Data Analyst",
    issuer: "Elastic",
    description: "Data analysis and visualization with Elasticsearch and Kibana",
    tags: ["Data Analysis", "Kibana", "Elasticsearch"],
  },
  {
    id: "oci-foundations",
    name: "OCI Certified Foundations Associate",
    issuer: "Oracle",
    description: "Oracle Cloud Infrastructure fundamentals and core services",
    tags: ["Cloud", "OCI", "Infrastructure"],
  },
  {
    id: "aws-cloud-practitioner",
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    description: "AWS cloud concepts, services, and best practices",
    tags: ["AWS", "Cloud", "Fundamentals"],
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Certifications & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Validated expertise in cloud and DevOps technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <Card
              key={cert.id}
              className="p-6 hover-elevate transition-all duration-300"
              data-testid={`card-certification-${cert.id}`}
            >
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-bold text-foreground leading-tight">
                        {cert.name}
                      </h3>
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    </div>
                    <p className="text-sm font-semibold text-primary">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cert.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs font-mono"
                      data-testid={`badge-cert-tag-${tag.toLowerCase()}`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
