import { Route, Routes, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import AdminLayout from './components/AdminLayout.jsx'
import LoginPage from './pages/LoginPage.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import NoticesPage from './pages/NoticesPage.jsx'
import ResultsPage from './pages/ResultsPage.jsx'
import InquiriesPage from './pages/InquiriesPage.jsx'
import { Toaster } from 'react-hot-toast'
import './App.css'

export default function App() {
  return (
    <AuthProvider>
      <Toaster position="top-right" toastOptions={{
        style: {
          borderRadius: '14px',
          background: '#0f172a',
          color: '#fff',
          fontWeight: 600,
          fontSize: '0.9rem'
        }
      }} />
      <Routes>
        {/* Public route — Login page */}
        <Route path="/login" element={<LoginPage />} />

        {/* Protected routes — wrapped in AdminLayout */}
        <Route
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<HomePage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/notices" element={<NoticesPage />} />
          <Route path="/inquiries" element={<InquiriesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}
