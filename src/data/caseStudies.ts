/**
 * Case Studies Data
 * Centralized data store for all case studies
 * This separation allows easy updates and reuse across the application
 */

import { CaseStudy } from "./caseStudy";

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 1,
    title: "ProteinPaint Ecosystem: Oncology Biomarker Discovery Platform",
    category: "product",
    sector: "healthcare",
    service: "Digital Health & CDS",
    description:
      "Led product development for clinical decision support tools transforming pediatric oncology care at St. Jude Children's Research Hospital.",
    challenge:
      "Clinicians needed real-time access to complex multi-omic data for patient risk stratification, but existing tools were too technical and time-consuming, creating barriers to clinical adoption.",
    solution:
      "Directed end-to-end product lifecycle to create intuitive, no-code interfaces for biomarker discovery and risk-based patient stratification. Implemented robust data governance (WCAG AA, Section 508, HIPAA) while maintaining 100% data accuracy.",
    results: [
      "Achieved rapid clinical adoption across multi-institutional trial sites",
      "Reduced time-to-insight from hours to minutes for oncologists",
      "Secured Blue Sky funding supporting 3 FTEs",
      "Replaced legacy standards with real-time evidence-based CDS",
    ],
    images:
      "https://images.unsplash.com/photo-1614934273523-1c9f0f666c33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMGxhYm9yYXRvcnklMjBzY2llbmNlfGVufDF8fHx8MTc3MDYyOTA1MHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    title: "Survivorship Analytics: Health Equity in Cancer Care",
    category: "product",
    sector: "healthcare",
    service: "Data Science & Analytics",
    description:
      "Developed survivorship analytics integrating demographic variables to address healthcare disparities and inform equity-centered clinical protocols.",
    challenge:
      "Existing survivorship data lacked integration of demographic factors (race, age, socioeconomic status), limiting ability to identify and address health disparities in long-term cancer survivors.",
    solution:
      "Leveraged data storytelling to identify funding gaps and public health disparities. Built analytics platform that integrated demographic variables with clinical outcomes, directly informing institutional health policies.",
    results: [
      "Informed institutional health policy changes",
      "Identified critical public health disparities in survivorship care",
      "Enabled equity-centered clinical protocol development",
      "Published in AACR Cancer Discovery (2024)",
    ],
    images:
      "https://images.unsplash.com/photo-1613843439331-2080752b4518?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwZGV2ZWxvcG1lbnQlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDcxMzYzNXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    title: "Competitive RFP Win: Global KOL Partnership Strategy",
    category: "consulting",
    sector: "pharma",
    service: "Grant Writing & Funding",
    description:
      "Led stakeholder alignment and proposal development to win competitive NIH/NCI funding for population-scale genomic resources.",
    challenge:
      "Highly competitive RFP landscape requiring alignment between cross-functional teams (engineers, bioinformaticians) and global Key Opinion Leaders while demonstrating clear value proposition.",
    solution:
      "Orchestrated high-stakes stakeholder management across institutions. Developed compelling data-driven narratives and technical validation strategy. Managed editorial development of proposal with clear impact metrics.",
    results: [
      "Won competitive RFP against multiple institutions",
      "Secured multi-year funding for population-scale project",
      "Established partnerships with NIH, NCI, and ASH",
      "Tool adoption by NCI Genomic Data Commons (2024)",
    ],
    images:
      "https://images.unsplash.com/photo-1760346546771-a81d986459ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwcGxhbm5pbmclMjBtZWV0aW5nfGVufDF8fHx8MTc3MDcxMzYzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    title: "Market Strategy for Healthcare Infrastructure Product",
    category: "consulting",
    sector: "healthcare",
    service: "Market Research & Operations",
    description:
      "Go-to-market strategy and operational optimization for PATH's new infrastructure product launch.",
    challenge:
      "New product entering complex regulatory environment with unclear vendor landscape and manual reporting processes limiting scalability.",
    solution:
      "Conducted comprehensive market and regulatory research, evaluating 20+ vendors. Built automated Python workflows for analytics and sentiment analysis. Implemented VoC and NPS programs to identify retention issues.",
    results: [
      "Successfully navigated complex regulatory requirements",
      "Cut manual reporting time by 40% through automation",
      "Identified critical onboarding friction points",
      "Recommended strategic shift stabilizing customer growth",
    ],
    images:
      "https://images.unsplash.com/photo-1758691463198-dc663b8a64e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb25zdWx0aW5nJTIwb2ZmaWNlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MDcxMzYzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 5,
    title: "Science Communication: Mental Health in Research",
    category: "consulting",
    sector: "research",
    service: "Science Communications",
    description:
      "High-impact science communication initiative for Genetics Society of America addressing scientist well-being.",
    challenge:
      "Critical need to raise awareness about mental health challenges in research environments, but complex topic requiring accessible framing for the global scientific community.",
    solution:
      "Translated complex psychological and systemic issues into accessible content. Produced evidence-based stories combining research findings with personal narratives to drive engagement and action.",
    results: [
      "Generated global discussions on healthier research environments",
      "Published in ecrLife (2022)",
      "Recognized with Wiki Scholar Award for evidence-based neutral communication",
      "Influenced institutional policy conversations internationally",
    ],
    publicationLink: {
      label: "Read the full study",
      url: "https://ecrlife.org/avoiding_overcommitment/",
    },
    images: ["/images/fig1_overcommitting-1.png", "/images/fig2_overcommitting.png"],
  },
  {
    id: 6,
    title: "Process Optimization: Pharma R&D Efficiency",
    category: "consulting",
    sector: "pharma",
    service: "Market Research & Operations",
    description:
      "Operational efficiency improvements for Glenmark Pharma's oncology and pain therapeutics programs.",
    challenge:
      "Supply chain bottlenecks and budget constraints threatened timeline for TRPA1 (GRC-17536) and parallel therapeutic programs across 30+ cell line experiments.",
    solution:
      "Identified cost-effective media substitutes to remove supply bottlenecks. Synthesized complex biological findings into standardized workflows and actionable insights for portfolio decision-making.",
    results: [
      "Maintained project timelines despite budget constraints",
      "Reduced costs while preserving experimental quality",
      "Standardized workflows across multiple programs",
      "Informed strategic portfolio decisions for pain & oncology therapeutics",
    ],
    images: "/images/cell-culture.png",
  },
];
