import { Link, useParams } from "react-router";
import { ArrowLeft } from "lucide-react";
import { CASE_STUDIES_DATA } from "../data/caseStudies";
import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";
import { Container } from "../../../components/shared/Container";
import { Button } from "../../../components/ui/button";

export function CaseStudyDetail() {
  const { id } = useParams();
  const studyId = Number(id);
  const study = CASE_STUDIES_DATA.find((item) => item.id === studyId);

  if (!study) {
    return (
      <section className="py-16 bg-slate-50">
        <Container maxWidth="max-w-4xl">
          <h1 className="text-3xl mb-4">Case study not found</h1>
          <p className="text-slate-600 mb-8">
            The requested case study does not exist or may have been removed.
          </p>
          <Link to="/case-studies">
            <Button variant="outline">Back to Case Studies</Button>
          </Link>
        </Container>
      </section>
    );
  }

  const images = Array.isArray(study.images) ? study.images : [study.images];

  return (
    <div className="bg-slate-50">
      <section className="py-8 border-b bg-white">
        <Container>
          <Link to="/case-studies" className="inline-flex items-center text-slate-700 hover:text-slate-900">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Case Studies
          </Link>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <article className="bg-white rounded-xl border p-8 lg:p-10 space-y-8">
            <header>
              <p className="text-sm text-slate-500 mb-2">{study.service}</p>
              <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">{study.title}</h1>
              <p className="text-lg text-slate-700">{study.description}</p>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {images.map((imgSrc, index) => (
                <div key={index} className="aspect-[16/9] overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src={imgSrc}
                    alt={`${study.title} visual ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-2">Challenge</h2>
              <p className="text-slate-700">{study.challenge}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-2">Solution</h2>
              <p className="text-slate-700">{study.solution}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Results</h2>
              <ul className="space-y-3">
                {study.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-green-600" />
                    </div>
                    <span className="text-slate-700">{result}</span>
                  </li>
                ))}
              </ul>
            </section>

            {study.publicationLink && (
              <section className="pt-2">
                <a
                  href={study.publicationLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                >
                  {study.publicationLink.label}
                </a>
              </section>
            )}
          </article>
        </Container>
      </section>
    </div>
  );
}
