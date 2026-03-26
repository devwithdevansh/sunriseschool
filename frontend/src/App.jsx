import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import AcademicsPage from './pages/AcademicsPage.jsx'
import ActivitiesPage from './pages/ActivitiesPage.jsx'
import ResultsPage from './pages/ResultsPage.jsx'
import GalleryPage from './pages/GalleryPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import KGPage from './pages/KGPage.jsx'
import PrimaryPage from './pages/PrimaryPage.jsx'
import HigherSecondaryPage from './pages/HigherSecondaryPage.jsx'
import Result10EMPage from './pages/Result10EMPage.jsx'
import Result10GMPage from './pages/Result10GMPage.jsx'
import Result12CommercePage from './pages/Result12CommercePage.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
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
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Route>
    </Routes>
  )
}
