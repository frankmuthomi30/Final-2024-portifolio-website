import { Card, CardContent } from "@/components/ui/card";
import { Code2, GraduationCap, Award } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-4xl mx-auto" data-aos="fade-up">
        <div className="flex items-center gap-2 mb-8">
          <Code2 className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">Skills & Education</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Technical Skills</h3>
              </div>
              
              <Accordion type="single" collapsible>
                <AccordionItem value="languages">
                  <AccordionTrigger>Programming Languages</AccordionTrigger>
                  <AccordionContent>
                    JavaScript, Visual Basic
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="web">
                  <AccordionTrigger>Web Technologies</AccordionTrigger>
                  <AccordionContent>
                    HTML5, CSS3, React.js
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="tools">
                  <AccordionTrigger>Tools & Software</AccordionTrigger>
                  <AccordionContent>
                    Git, VS Code, Microsoft Office Suite, Cisco Packet Tracer
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="other">
                  <AccordionTrigger>Other Skills</AccordionTrigger>
                  <AccordionContent>
                    Database Management, Network Configuration, Windows OS
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Education & Certifications</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Diploma in Information Communication Technology</h4>
                  <p className="text-muted-foreground">Nyeri National Polytechnic | 2021 - 2023</p>
                  <p className="text-sm">Graduated with Distinction</p>
                </div>

                <div>
                  <h4 className="font-semibold">Certifications</h4>
                  <ul className="space-y-2">
                    <li>• Responsive Web Design Developer Certification (freeCodeCamp.org)</li>
                    <li>• Cisco Certification - Computer Hardware</li>
                    <li>• Introduction to IoT - Cisco Networking Academy</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}