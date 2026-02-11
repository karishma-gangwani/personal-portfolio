import { Link } from "react-router";
import { ArrowRight, Target, Users, TrendingUp, Award } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Hero } from "../components/shared/Hero";
import { FeatureGrid } from "../components/shared/FeatureGrid";
import { ServicesList } from "../components/shared/ServicesList";
import { CTA } from "../components/shared/CTA";
import { Container } from "../components/shared/Container";

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
    "Science Communications & Brand Building",
    "Grant Writing & Funding Strategy",
    "Market Research & Operations",
  ];

  return (
    <div>
      <Hero
        title={
          <>
            Strategic Consulting for <span className="text-blue-600">Growth & Innovation</span>
          </>
        }
        subtitle={
          "Transforming businesses through expert consulting in research, operations, marketing, and strategic communications. Delivering measurable results with data-driven solutions."
        }
        actions={
          <>
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
          </>
        }
      />

      <section className="py-12 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">What I Offer</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive consulting services tailored to drive your business forward
            </p>
          </div>
          <FeatureGrid items={highlights} />
        </Container>
      </section>

      <section className="py-12 bg-slate-50">
        <Container>
          <div className="grid grid-cols-1 gap-10 items-center">
            <div>
              <ImageWithFallback />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">Expertise Across Domains</h2>
              <p className="text-lg text-slate-700 mb-8">
                With extensive experience in both consulting and product development, I provide 
                strategic guidance across multiple disciplines.
              </p>
              <ServicesList services={services} />
              <Link to="/services">
                <Button>
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <CTA
        title={"Ready to Transform Your Business?"}
        text={"Let's discuss how strategic consulting can help you achieve your goals"}
        href="/contact"
        buttonLabel="Schedule a Consultation"
      />

      {/* Case Studies Preview */}
      <section className="py-12 bg-white">
        <Container>
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
        </Container>
      </section>
    </div>
  );
}