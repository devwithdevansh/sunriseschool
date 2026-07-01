import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#f8fafc', padding: '24px', textAlign: 'center' }}>
          <AlertTriangle size={64} color="#ef4444" style={{ marginBottom: '24px' }} />
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>Something went wrong.</h1>
          <p style={{ color: '#64748b', marginBottom: '32px', maxWidth: '500px' }}>
            The application encountered an unexpected error. This usually happens if you are using an outdated version of the app.
          </p>
          <button 
            onClick={() => window.location.reload()}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '16px 32px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '12px', fontSize: '1rem', fontWeight: 700, cursor: 'pointer' }}
          >
            <RefreshCw size={20} /> Reload Application
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}