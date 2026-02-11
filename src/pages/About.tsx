import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Award, Briefcase, GraduationCap, Target } from "lucide-react";
import { Button } from "../components/ui/button";

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
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl mb-6">About Me</h1>
              <p className="text-xl text-slate-700 mb-6">
                I'm Karishma Gangwani, Ph.D., a Product Leader specializing in clinical and 
                biological data with expertise in Clinical Decision Support Systems.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                With over 7 years of experience building digital health products, I bridge the gap 
                between complex technical insights and clinical adoption. My work at St. Jude Children's 
                Research Hospital focused on oncology biomarker discovery and risk-based patient 
                stratification tools, replacing legacy standards with real-time, evidence-based solutions.
              </p>
              <p className="text-lg text-slate-600">
                I combine deep technical expertise in data science with strategic product leadership, 
                data storytelling, and stakeholder management. Currently pursuing an Executive MBA while 
                continuing to advance digital public goods that serve international research networks.
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="/images/327104-014.jpg"
                alt="Karishma Gangwani"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Areas of Expertise</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Bringing diverse experience and proven capabilities to every project
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8 pb-6">
                    <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl mb-3">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Core Values</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The principles that guide my work and partnerships
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      {/* Recognition */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Let's Connect</h2>
          <p className="text-xl text-slate-600 mb-8">
            Interested in working together? I'd love to hear about your project.
          </p>
          <a href="/contact">
            <Button size="lg">
              Get in Touch
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}