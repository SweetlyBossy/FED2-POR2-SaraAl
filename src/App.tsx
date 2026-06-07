import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./component/layout";
import PortfolioPage from "./pages/PortfolioPage";
import ProjectsPage from "./pages/Projects";
import ProjectArticle from "./pages/ProjectArticle";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects/:id" element={<ProjectArticle />} />
        </Routes>
      </Layout>
    </Router>
  );
}
