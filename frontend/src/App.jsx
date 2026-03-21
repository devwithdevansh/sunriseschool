import { Route, Routes } from 'react-router-dom'
import AdminLayout from './components/AdminLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  )
}
