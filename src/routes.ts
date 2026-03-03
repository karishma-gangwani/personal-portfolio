import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./features/home";
import { Services } from "./features/services";
import { CaseStudies, CaseStudyDetail } from "./features/case-studies";
import { About } from "./features/about";
import { Contact } from "./features/contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "case-studies", Component: CaseStudies },
      { path: "case-studies/:id", Component: CaseStudyDetail },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },
]);
