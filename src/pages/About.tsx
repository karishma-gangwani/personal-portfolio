import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Award, Briefcase, GraduationCap, Target } from "lucide-react";
import { Button } from "../components/ui/button";
import { Hero } from "../components/shared/Hero";
import { FeatureGrid } from "../components/shared/FeatureGrid";
import { PageSection } from "../components/shared/PageSection";
import { CTA } from "../components/shared/CTA";
import { Container } from "../components/shared/Container";

export function About() {
  const expertise = [
    {
      icon: Briefcase,
      title: "Product Leadership",
      description: "7+ years leading digital health and clinical decision support systems",
    },
    {
      icon: Target,
      title: "Clinical Data & CDS",
      description: "Expert in biomarker discovery tools and risk-based patient stratification platforms",
    },
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "Ph.D. in Biology, Executive MBA (ongoing), multiple research awards",
    },
    {
      icon: Award,
      title: "Published Research",
      description: "Peer-reviewed publications in AACR, PLOS, and BioMed journals",
    },
  ];

  const values = [
    {
      title: "Data-Driven Excellence",
      description: "Every recommendation is backed by rigorous research and measurable outcomes. Evidence-based decision making with clinical validation and real-world impact.",
    },
    {
      title: "Bridging Technology & Clinical Care",
      description: "Translating complex technical insights into intuitive tools that drive clinical adoption and improve patient outcomes at the bedside.",
    },
    {
      title: "Stakeholder Collaboration",
      description: "Building consensus across engineers, clinicians, and global KOLs to deliver products that serve diverse needs while maintaining scientific rigor.",
    },
    {
      title: "Health Equity Focus",
      description: "Committed to developing solutions that address healthcare disparities and integrate demographic variables for equity-centered clinical protocols.",
    },
  ];

  return (
    <div>
      <Hero
        title={"About Me"}
        subtitle={
          "I'm Karishma Gangwani, Ph.D., a Product Leader specializing in clinical and biological data with expertise in Clinical Decision Support Systems."
        }
        imageSrc="/images/327104-014.jpg"
        imageAlt="Karishma Gangwani"
      />

      <section className="py-12 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Areas of Expertise</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Bringing diverse experience and proven capabilities to every project</p>
          </div>
          <FeatureGrid items={expertise} />
        </Container>
      </section>

      <PageSection title={"Core Values"} subtitle={"The principles that guide my work and partnerships"} bg={"bg-slate-50"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl mb-3">{value.title}</h3>
              <p className="text-slate-600">{value.description}</p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Experience Highlights */}
      <section className="py-12 bg-white">
        <Container>
          <h2 className="text-3xl md:text-4xl mb-12 text-center">Professional Journey</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="border-l-4 border-blue-600 pl-8 py-4">
              <h3 className="text-xl mb-2">Product Data Scientist - Clinical Data/Digital Health</h3>
              <p className="text-slate-600 mb-3">St. Jude Children's Research Hospital, Memphis, TN | July 2022 - July 2025</p>
              <p className="text-slate-700">
                Directed end-to-end product lifecycle for oncology biomarker discovery and risk-based 
                patient stratification tools (ProteinPaint ecosystem). Led cross-functional teams to win 
                competitive RFPs and secured Blue Sky funding for population-scale genomic resources. 
                Established data governance frameworks ensuring WCAG AA, Section 508, and HIPAA compliance.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-8 py-4">
              <h3 className="text-xl mb-2">Communications Lead</h3>
              <p className="text-slate-600 mb-3">Genetics Society of America | October 2021 - May 2023</p>
              <p className="text-slate-700">
                Translated complex science concepts into accessible content for global audiences. 
                Produced high-impact stories on mental health and scientist well-being, leading to 
                global discussions on healthier research work environments.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-8 py-4">
              <h3 className="text-xl mb-2">Market Research Analyst</h3>
              <p className="text-slate-600 mb-3">PATH, Columbus, OH | May - August 2021</p>
              <p className="text-slate-700">
                Led go-to-market strategy and regulatory research for new infrastructure product. 
                Built automated analytics workflows (Python) cutting manual reporting time by 40%. 
                Implemented Voice of Customer and NPS programs to improve retention.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-8 py-4">
              <h3 className="text-xl mb-2">Doctoral Scientist & Teaching Assistant</h3>
              <p className="text-slate-600 mb-3">University of Dayton, OH | January 2017 - July 2022</p>
              <p className="text-slate-700">
                Earned Ph.D. in Biology with focus on cancer biology and developmental genetics. 
                Secured competitive funding including Sigma Xi Research Award. Designed SDG-focused 
                lab projects enabling students to propose ethical business and community solutions.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-8 py-4">
              <h3 className="text-xl mb-2">Research Assistant</h3>
              <p className="text-slate-600 mb-3">Glenmark Pharma, Navi Mumbai, India | September 2015 - 2016</p>
              <p className="text-slate-700">
                Optimized processes by identifying cost-effective media substitutes. Synthesized 
                biological findings from 30+ cell lines into actionable insights for pain and oncology 
                therapeutics portfolio decision-making.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Recognition */}
      <section className="py-12 bg-blue-600 text-white">
        <Container maxWidth="max-w-4xl">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">Recognition & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl mb-2">7+</div>
              <p className="text-blue-100">Years Product Experience</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2">3 FTEs</div>
              <p className="text-blue-100">Funded via Strategic Awards</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2">5+</div>
              <p className="text-blue-100">Peer-Reviewed Publications</p>
            </div>
          </div>
          <div className="mt-12 space-y-3 text-center">
            <p className="text-blue-100">• Sigma Xi Research Award & Grant</p>
            <p className="text-blue-100">• St. Jude Strategic Milestone Award</p>
            <p className="text-blue-100">• Wiki Scholar Award for Evidence-Based Communication</p>
            <p className="text-blue-100">• Early Childhood Development Certification (Harvard EdX)</p>
            <p className="text-blue-100">• Data Science Bootcamp (Erdos Institute)</p>
          </div>
        </Container>
      </section>

      <CTA title={"Let's Connect"} text={"Interested in working together? I'd love to hear about your project."} href="/contact" buttonLabel={"Get in Touch"} />
    </div>
  );
}