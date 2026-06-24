import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useBackButtonGuard } from '../hooks/useBackButtonGuard'

/**
 * ProtectedRoute
 * --------------
 * - Redirects unauthenticated users to /login (with replace so login is not
 *   added to history when already authenticated).
 * - Activates useBackButtonGuard so pressing the browser/mobile Back button
 *   while authenticated always redirects to "/" (dashboard) instead of /login.
 */
function AuthGuard({ children }) {
  // Hook must be called inside a component that is already inside the Router.
  // Redirect target "/" is the dashboard (HomePage) in this admin app.
  useBackButtonGuard('/')
  return children
}

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    // `replace` ensures /login never sits in the history stack while logged in
    return <Navigate to="/login" replace />
  }

  // Wrap with AuthGuard so the hook runs only when authenticated
  return <AuthGuard>{children}</AuthGuard>
}

