import { Route, Routes } from 'react-router-dom'
import AdminLayout from './components/AdminLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import NoticesPage from './pages/NoticesPage.jsx'
import ResultsPage from './pages/ResultsPage.jsx'
import InquiriesPage from './pages/InquiriesPage.jsx'
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/notices" element={<NoticesPage />} />
        <Route path="/inquiries" element={<InquiriesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
