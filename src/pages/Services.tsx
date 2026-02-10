import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { 
  FlaskConical, 
  Settings, 
  Megaphone, 
  MessageSquare, 
  DollarSign, 
  FileText 
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Services() {
  const services = [
    {
      icon: FlaskConical,
      title: "Digital Health & Clinical Decision Support",
      description: "Building evidence-based clinical tools that transform patient care through data-driven insights.",
      details: [
        "Clinical Decision Support Systems (CDS)",
        "Biomarker discovery & patient stratification",
        "Multi-omic and clinical data integration",
        "Real-time evidence-based tools",
        "Digital health product strategy",
      ],
    },
    {
      icon: Settings,
      title: "Product Strategy & Development",
      description: "End-to-end product leadership from concept to market with focus on digital health and research tools.",
      details: [
        "Product lifecycle management",
        "Cross-functional team leadership",
        "UX strategy for complex datasets",
        "Technical validation & oversight",
        "Scalable platform architecture",
      ],
    },
    {
      icon: Megaphone,
      title: "Data Science & Analytics",
      description: "Leveraging advanced analytics and data storytelling to drive decision-making and business growth.",
      details: [
        "Data strategy & governance frameworks",
        "Multi-method analysis (quantitative & qualitative)",
        "Power BI, Python, R, SQL expertise",
        "Predictive modeling & risk stratification",
        "Automated analytics workflows",
      ],
    },
    {
      icon: MessageSquare,
      title: "Science Communications",
      description: "Translating complex scientific and technical concepts into compelling narratives for diverse audiences.",
      details: [
        "Scientific writing & editing",
        "Editorial development for grants & RFPs",
        "Educational content & training materials",
        "Conference presentations & brochures",
        "Public health impact storytelling",
      ],
    },
    {
      icon: DollarSign,
      title: "Grant Writing & Funding Strategy",
      description: "Winning competitive funding through strategic proposal development and stakeholder alignment.",
      details: [
        "Competitive grant proposals (NIH, NCI, foundations)",
        "RFP response & Blue Sky funding",
        "Budget development & justification",
        "KOL partnership management",
        "Institutional funding strategy",
      ],
    },
    {
      icon: FileText,
      title: "Market Research & Operations",
      description: "Data-driven market strategies and operational optimization for growth and efficiency.",
      details: [
        "Go-to-market strategy & regulatory research",
        "Voice of Customer (VoC) & NPS programs",
        "Process optimization & workflow automation",
        "Vendor evaluation & partnership strategy",
        "Customer retention analytics",
      ],
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6">Comprehensive Consulting Services</h1>
            <p className="text-xl text-slate-700">
              Strategic expertise across research, operations, marketing, and communications to 
              drive measurable business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-blue-600" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <div className="bg-blue-100 rounded-full p-1 mr-2 mt-0.5 flex-shrink-0">
                            <div className="bg-blue-600 rounded-full w-1.5 h-1.5"></div>
                          </div>
                          <span className="text-slate-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">My Approach</h2>
              <p className="text-lg text-slate-700 mb-6">
                Every project is unique, and I tailor my consulting approach to meet your specific 
                needs and objectives. My methodology combines:
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Discovery & Analysis</h3>
                    <p className="text-slate-600">
                      Understanding your challenges, goals, and context through comprehensive research and stakeholder engagement.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Strategy Development</h3>
                    <p className="text-slate-600">
                      Creating data-driven strategies aligned with your objectives and industry best practices.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Implementation Support</h3>
                    <p className="text-slate-600">
                      Guiding execution with actionable recommendations and ongoing support to ensure success.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Measurement & Optimization</h3>
                    <p className="text-slate-600">
                      Tracking results and continuously refining strategies to maximize impact and ROI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1770259406678-420c4adc44f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBicmFuZGluZyUyMGNyZWF0aXZlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MDcxMzYzNHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Consulting approach"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Let's Work Together</h2>
          <p className="text-xl mb-8 text-blue-100">
            Ready to take your business to the next level? Get in touch to discuss your project.
          </p>
          <a href="/contact">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Contact Me
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}