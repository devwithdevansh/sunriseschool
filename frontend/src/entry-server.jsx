// SSR entry used only by scripts/prerender.mjs at build time (never shipped
// to the browser). Deliberately imports page components eagerly instead of
// via React.lazy like App.jsx does — react-dom/server's renderToStaticMarkup
// can't await a lazy import mid-render, and code-splitting only matters for
// the client bundle anyway.
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from './layouts/MainLayout.jsx';

import HomePage from './pages/HomePage.jsx';
import About from './pages/About.jsx';
import Management from './pages/Management.jsx';
import TrusteeMessage from './pages/TrusteeMessage.jsx';
import AcademicsPage from './pages/AcademicsPage.jsx';
import KGPage from './pages/KGPage.jsx';
import PrimaryPage from './pages/PrimaryPage.jsx';
import HigherSecondaryPage from './pages/HigherSecondaryPage.jsx';
import ActivitiesPage from './pages/ActivitiesPage.jsx';
import CoCurricular from './pages/CoCurricular.jsx';
import CompetitiveExams from './pages/CompetitiveExams.jsx';
import Sports from './pages/Sports.jsx';
import ResultsPage from './pages/ResultsPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import AlumniPage from './pages/AlumniPage.jsx';
import Transportation from './pages/Transportation.jsx';
import Stationery from './pages/Stationery.jsx';
import Inquiry from './pages/Inquiry.jsx';
import Contact from './pages/Contact.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';

// Mirrors the static (non-backend-driven) subset of App.jsx's routes.
// /notice and /results/10-em|10-gm|12-commerce are intentionally omitted —
// they fetch live data client-side and aren't prerendered.
function StaticApp() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/management" element={<Management />} />
        <Route path="/about/message" element={<TrusteeMessage />} />
        <Route path="/academics" element={<AcademicsPage />} />
        <Route path="/academics/kg" element={<KGPage />} />
        <Route path="/academics/primary" element={<PrimaryPage />} />
        <Route path="/academics/higher-secondary" element={<HigherSecondaryPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/co-curricular" element={<CoCurricular />} />
        <Route path="/competitive-exams" element={<CompetitiveExams />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/alumni" element={<AlumniPage />} />
        <Route path="/transportation" element={<Transportation />} />
        <Route path="/stationery" element={<Stationery />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Route>
    </Routes>
  );
}

export function render(url) {
  const helmetContext = {};

  const appHtml = renderToStaticMarkup(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <StaticApp />
      </StaticRouter>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;
  const headHtml = [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ].join('\n');

  return { appHtml, headHtml };
}
