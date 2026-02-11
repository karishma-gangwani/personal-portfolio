import { Link } from "react-router";
import { ArrowRight, Target, Users, TrendingUp, Award } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const highlights = [
    {
      icon: Target,
      title: "Product Strategy",
      description: "Digital health products & Clinical Decision Support Systems with proven clinical adoption.",
    },
    {
      icon: Users,
      title: "Clinical Data Expertise",
      description: "Biomarker discovery, patient stratification, and multi-omic data integration.",
    },
    {
      icon: TrendingUp,
      title: "Data Storytelling",
      description: "Bridging technical insights with stakeholder communication for funding success.",
    },
    {
      icon: Award,
      title: "Process Excellence",
      description: "Data governance, compliance (WCAG, HIPAA), and operational optimization.",
    },
  ];

  const services = [
    "Digital Health & Clinical Decision Support",
    "Product Strategy & Development",
    "Data Science & Analytics",
    "Science Communications",
    "Grant Writing & Funding Strategy",
    "Market Research & Operations",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-slate-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                Strategic Consulting for <span className="text-blue-600">Growth & Innovation</span>
              </h1>
              <p className="text-lg text-slate-700 mb-8">
                Transforming businesses through expert consulting in research, operations, marketing, 
                and strategic communications. Delivering measurable results with data-driven solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services">
                  <Button size="lg" className="w-full sm:w-auto">
                    Explore Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                // src="https://images.unsplash.com/photo-1758691463198-dc663b8a64e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb25zdWx0aW5nJTIwb2ZmaWNlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MDcxMzYzM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                // alt="Professional consulting workspace"
                // className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">What I Offer</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive consulting services tailored to drive your business forward
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl mb-3">{highlight.title}</h3>
                    <p className="text-slate-600">{highlight.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 items-center">
            <div>
              <ImageWithFallback
                // src="https://images.unsplash.com/photo-1760346546771-a81d986459ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwcGxhbm5pbmclMjBtZWV0aW5nfGVufDF8fHx8MTc3MDcxMzYzM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                // alt="Business strategy planning"
                // className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">Expertise Across Domains</h2>
              <p className="text-lg text-slate-700 mb-8">
                With extensive experience in both consulting and product development, I provide 
                strategic guidance across multiple disciplines.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                      <div className="bg-blue-600 rounded-full w-2 h-2"></div>
                    </div>
                    <span className="text-slate-700">{service}</span>
                  </div>
                ))}
              </div>
              <Link to="/services">
                <Button>
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center items-center">
          <h2 className="text-3xl md:text-4xl mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how strategic consulting can help you achieve your goals
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Featured Case Studies</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore successful projects across consulting and product development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1614934273523-1c9f0f666c33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMGxhYm9yYXRvcnklMjBzY2llbmNlfGVufDF8fHx8MTc3MDYyOTA1MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Research consulting"
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <div className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full mb-3">
                  Consulting
                </div>
                <h3 className="text-xl mb-2">Research & Analysis Projects</h3>
                <p className="text-slate-600 mb-4">
                  Strategic research initiatives delivering actionable insights for science and policy domains.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1613843439331-2080752b4518?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwZGV2ZWxvcG1lbnQlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDcxMzYzNXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Product development"
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <div className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full mb-3">
                  Product Development
                </div>
                <h3 className="text-xl mb-2">Product Leadership</h3>
                <p className="text-slate-600 mb-4">
                  End-to-end product development and strategy for innovative technology solutions.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <Link to="/case-studies">
              <Button variant="outline" size="lg">
                View All Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}