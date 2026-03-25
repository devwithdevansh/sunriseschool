import { Route, Routes } from 'react-router-dom'
import AdminLayout from './components/AdminLayout.jsx'
import ActivitiesPage from './pages/ActivitiesPage.jsx'
import AdminUsersPage from './pages/AdminUsersPage.jsx'
import AlumniPage from './pages/AlumniPage.jsx'
import ExamsPage from './pages/ExamsPage.jsx'
import HomePage from './pages/HomePage.jsx'
import MediaPage from './pages/MediaPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import NoticesPage from './pages/NoticesPage.jsx'
import PagesManager from './pages/PagesManager.jsx'
import ResultsPage from './pages/ResultsPage.jsx'
import StaffPage from './pages/StaffPage.jsx'
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/pages" element={<PagesManager />} />
        <Route path="/staff" element={<StaffPage />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/notices" element={<NoticesPage />} />
        <Route path="/alumni" element={<AlumniPage />} />
        <Route path="/exams" element={<ExamsPage />} />
        <Route path="/admin-users" element={<AdminUsersPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
