import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, Eye, EyeOff, Loader2, ShieldCheck, AlertCircle } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const API_URL = 'http://localhost:5000/api'

export default function LoginPage() {
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [shake, setShake] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      })

      const data = await res.json()

      if (!res.ok) {
        setLoading(false)
        setError(data.message || 'Invalid password. Please try again.')
        setShake(true)
        setTimeout(() => setShake(false), 600)
        return
      }

      login(data.token, data.user)
      navigate('/', { replace: true })
    } catch (err) {
      setLoading(false)
      setError('Cannot connect to server. Is the backend running?')
      setShake(true)
      setTimeout(() => setShake(false), 600)
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 40%, #0f172a 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      fontFamily: "'Inter', sans-serif",
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
        backgroundSize: '40px 40px',
        pointerEvents: 'none'
      }} />

      {/* Glow orbs */}
      <div style={{
        position: 'absolute', top: '15%', left: '10%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '15%', right: '10%',
        width: '350px', height: '350px',
        background: 'radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none'
      }} />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ width: '100%', maxWidth: '420px', position: 'relative', zIndex: 1 }}
      >
        {/* Card */}
        <motion.div
          animate={shake ? { x: [-8, 8, -8, 8, -4, 4, 0] } : {}}
          transition={{ duration: 0.5 }}
          style={{
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '28px',
            padding: '48px 40px',
            boxShadow: '0 32px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)'
          }}
        >
          {/* Logo / Icon */}
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, duration: 0.5, type: 'spring', stiffness: 200 }}
              style={{
                width: '72px', height: '72px',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                borderRadius: '20px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 24px',
                boxShadow: '0 12px 40px rgba(99,102,241,0.4)'
              }}
            >
              <ShieldCheck size={36} color="white" />
            </motion.div>

            <h1 style={{
              margin: '0 0 8px',
              fontSize: '1.6rem',
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '-0.02em'
            }}>
              Sunrise Admin
            </h1>
            <p style={{
              margin: 0,
              fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.45)',
              fontWeight: 500
            }}>
              Secure Admin Portal · Sunrise School
            </p>
          </div>

          {/* Error Message */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -10, height: 0 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  background: 'rgba(239,68,68,0.15)',
                  border: '1px solid rgba(239,68,68,0.3)',
                  borderRadius: '12px',
                  padding: '12px 16px',
                  marginBottom: '20px'
                }}
              >
                <AlertCircle size={16} color="#f87171" style={{ flexShrink: 0 }} />
                <p style={{ margin: 0, fontSize: '0.8rem', color: '#f87171', fontWeight: 600 }}>
                  {error}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'rgba(255,255,255,0.5)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '10px'
              }}>
                Admin Password
              </label>
              <div style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)',
                  color: 'rgba(255,255,255,0.3)'
                }}>
                  <Lock size={18} />
                </div>
                <input
                  type={showPass ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  required
                  autoFocus
                  style={{
                    width: '100%',
                    padding: '16px 52px',
                    background: 'rgba(255,255,255,0.07)',
                    border: `1px solid ${error ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.12)'}`,
                    borderRadius: '14px',
                    color: '#fff',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    outline: 'none',
                    transition: 'all 0.2s',
                    boxSizing: 'border-box',
                    fontFamily: 'inherit',
                    letterSpacing: showPass ? 'normal' : '0.2em'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'rgba(99,102,241,0.6)'}
                  onBlur={(e) => e.target.style.borderColor = error ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.12)'}
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  style={{
                    position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)',
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: 'rgba(255,255,255,0.3)', padding: '4px',
                    display: 'flex', alignItems: 'center'
                  }}
                >
                  {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={loading || !password}
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              style={{
                width: '100%',
                padding: '17px',
                background: loading || !password
                  ? 'rgba(99,102,241,0.4)'
                  : 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                border: 'none',
                borderRadius: '14px',
                color: '#fff',
                fontSize: '0.9rem',
                fontWeight: 800,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                cursor: loading || !password ? 'not-allowed' : 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                fontFamily: 'inherit',
                boxShadow: loading || !password ? 'none' : '0 8px 32px rgba(99,102,241,0.4)',
                transition: 'all 0.2s'
              }}
            >
              {loading ? (
                <>
                  <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
                  Authenticating...
                </>
              ) : (
                <>
                  <ShieldCheck size={18} />
                  Sign In to Admin
                </>
              )}
            </motion.button>
          </form>

          {/* Footer */}
          <p style={{
            margin: '28px 0 0',
            textAlign: 'center',
            fontSize: '0.75rem',
            color: 'rgba(255,255,255,0.2)',
            fontWeight: 500
          }}>
            🔒 Protected area — Sunrise School Management System
          </p>
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        input::placeholder { color: rgba(255,255,255,0.2) !important; letter-spacing: normal; }
      `}</style>
    </div>
  )
}
