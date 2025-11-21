import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Education
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-8 hover-elevate transition-all duration-300" data-testid="card-education">
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-lg bg-primary/10 flex-shrink-0">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Bachelor of Computer Science
                  </h3>
                  <p className="text-lg font-semibold text-primary mb-3">
                    Jordan University of Science and Technology
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">2019 - 2023</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>Jordan</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                    Key Focus Areas
                  </h4>
                  <ul className="space-y-2 text-base text-foreground/80">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-mono text-sm mt-1">▸</span>
                      <span>Software Engineering and System Design</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-mono text-sm mt-1">▸</span>
                      <span>Data Structures and Algorithms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-mono text-sm mt-1">▸</span>
                      <span>Database Management Systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-mono text-sm mt-1">▸</span>
                      <span>Web Development and Full-Stack Technologies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
