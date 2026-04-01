import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import About from './pages/About.jsx'
import AcademicsPage from './pages/AcademicsPage.jsx'
import ActivitiesPage from './pages/ActivitiesPage.jsx'
import ResultsPage from './pages/ResultsPage.jsx'
import GalleryPage from './pages/GalleryPage.jsx'
import Contact from './pages/Contact.jsx'

import KGPage from './pages/KGPage.jsx'
import PrimaryPage from './pages/PrimaryPage.jsx'
import HigherSecondaryPage from './pages/HigherSecondaryPage.jsx'
import Result10EMPage from './pages/Result10EMPage.jsx'
import Result10GMPage from './pages/Result10GMPage.jsx'
import Result12CommercePage from './pages/Result12CommercePage.jsx'
import Management from './pages/Management.jsx'
import Inquiry from './pages/Inquiry.jsx'
import CoCurricular from './pages/CoCurricular.jsx'
import CompetitiveExams from './pages/CompetitiveExams.jsx'
import Sports from './pages/Sports.jsx'
import Transportation from './pages/Transportation.jsx'
import Stationary from './pages/Stationary.jsx'








export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/management" element={<Management />} />

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
        <Route path="/stationary" element={<Stationary />} />
        <Route path="/contact" element={<Contact />} />







        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Route>
    </Routes>
  )
}
