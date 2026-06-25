/**
 * useBackButtonGuard
 * ------------------
 * Intercepts the browser / mobile back button while the user is authenticated.
 *
 * Strategy (loop-safe):
 *  1. On mount, push a "guard" entry on top of the history stack so there is
 *     always a forward entry for authenticated pages.
 *  2. Listen to the native `popstate` event.
 *  3. When popstate fires AND the user is authenticated, immediately navigate
 *     to `redirectTo` (default: "/") using React Router's `navigate` with
 *     `replace: true` so no loop entry is added.
 *  4. On unmount (logout / component destroy) the listener is cleaned up.
 *
 * Works on:
 *  - Chrome / Safari / Firefox desktop
 *  - Android Chrome back gesture
 *  - iOS Safari swipe-back
 *  - Vercel / any static host (no server config needed)
 */

import { useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

/**
 * @param {string} redirectTo  - Where to send the user on back press (default: "/")
 */
export function useBackButtonGuard(redirectTo = '/') {
  const navigate = useNavigate()
  const location = useLocation()
  const { isAuthenticated } = useAuth()

  // Track whether we've already pushed the guard sentinel this session
  const guardPushed = useRef(false)

  useEffect(() => {
    // Only activate for authenticated users
    if (!isAuthenticated) return

    // Push a duplicate entry into the browser history so that when the user
    // presses Back, we get a popstate event BEFORE leaving our app's pages.
    // We only do this once per location change to avoid bloating history.
    if (!guardPushed.current) {
      window.history.pushState(
        { guardEntry: true },  // state marker — helps debugging
        '',
        window.location.href   // same URL, no visual change
      )
      guardPushed.current = true
    }

    const handlePopState = (event) => {
      // If authenticated and back button is pressed, redirect instead
      if (isAuthenticated) {
        // Replace current entry with dashboard so forward/back stay clean
        navigate(redirectTo, { replace: true })

        // Re-push the guard so back button is blocked again after redirect
        window.history.pushState({ guardEntry: true }, '', window.location.href)
      }
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [isAuthenticated, navigate, redirectTo, location.pathname])

  // Reset guard flag on every route change so it re-pushes for new pages
  useEffect(() => {
    guardPushed.current = false
  }, [location.pathname])
}
