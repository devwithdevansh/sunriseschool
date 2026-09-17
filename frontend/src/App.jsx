import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'

const HomePage = lazy(() => import('./pages/HomePage.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const AcademicsPage = lazy(() => import('./pages/AcademicsPage.jsx'))
const ActivitiesPage = lazy(() => import('./pages/ActivitiesPage.jsx'))
const ResultsPage = lazy(() => import('./pages/ResultsPage.jsx'))
const GalleryPage = lazy(() => import('./pages/GalleryPage.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))

const KGPage = lazy(() => import('./pages/KGPage.jsx'))
const PrimaryPage = lazy(() => import('./pages/PrimaryPage.jsx'))
const HigherSecondaryPage = lazy(() => import('./pages/HigherSecondaryPage.jsx'))
const Result10EMPage = lazy(() => import('./pages/Result10EMPage.jsx'))
const Result10GMPage = lazy(() => import('./pages/Result10GMPage.jsx'))
const Result12CommercePage = lazy(() => import('./pages/Result12CommercePage.jsx'))
const Management = lazy(() => import('./pages/Management.jsx'))
const Inquiry = lazy(() => import('./pages/Inquiry.jsx'))
const CoCurricular = lazy(() => import('./pages/CoCurricular.jsx'))
const CompetitiveExams = lazy(() => import('./pages/CompetitiveExams.jsx'))
const Sports = lazy(() => import('./pages/Sports.jsx'))
const Transportation = lazy(() => import('./pages/Transportation.jsx'))
const Stationery = lazy(() => import('./pages/Stationery.jsx'))
const AlumniPage = lazy(() => import('./pages/AlumniPage.jsx'))
const TrusteeMessage = lazy(() => import('./pages/TrusteeMessage.jsx'))
const NoticeBoard = lazy(() => import('./pages/NoticeBoard.jsx'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'))

const NotFound = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-32">
    <h1 className="text-5xl font-black text-brand-dark mb-4">404 - Page Not Found</h1>
    <p className="text-gray-500">The page you're looking for doesn't exist or has moved.</p>
  </div>
)

export default function App() {
  return (
    <Suspense fallback={null}>
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
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/results/10-em" element={<Result10EMPage />} />
          <Route path="/results/10-gm" element={<Result10GMPage />} />
          <Route path="/results/12-commerce" element={<Result12CommercePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="/co-curricular" element={<CoCurricular />} />
          <Route path="/competitive-exams" element={<CompetitiveExams />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/transportation" element={<Transportation />} />
          <Route path="/stationery" element={<Stationery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/alumni" element={<AlumniPage />} />
          <Route path="/notice" element={<NoticeBoard />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
