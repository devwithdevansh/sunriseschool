import { useEffect, useState } from 'react'
import { getPage, updatePage } from '../services/pages.js'

export default function HomePage() {
  const slug = 'about-school'
  const [pageData, setPageData] = useState(null)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [saveMessage, setSaveMessage] = useState('')
  const [saveError, setSaveError] = useState('')
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    let isMounted = true

    async function loadPage() {
      try {
        const response = await getPage(slug)
        const page =
          response?.data?.data ||
          response?.data ||
          response

        if (isMounted) {
          setPageData(page)
          setTitle(page?.title || '')
          setContent(page?.content || '')
          setError('')
          setSaveError('')
        }
      } catch (requestError) {
        if (isMounted) {
          setError(
            requestError?.response?.data?.message || 'Failed to load page data.'
          )
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    loadPage()

    return () => {
      isMounted = false
    }
  }, [slug])

  async function handleSave() {
    setIsSaving(true)
    setSaveMessage('')
    setSaveError('')

    try {
      const response = await updatePage({
        slug,
        title,
        content,
      })

      const page =
        response?.data?.data ||
        response?.data ||
        response

      setPageData(page)
      setTitle(page?.title || title)
      setContent(page?.content || content)
      setSaveMessage('About page saved successfully.')
    } catch (requestError) {
      setSaveMessage('')
      setSaveError(
        requestError?.response?.data?.message || 'Failed to save page data.'
      )
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <>
      <header className="topbar">
        <div>
          <h2>Admin Dashboard</h2>
          <p>Start managing pages, media, notices, and school updates from one place.</p>
        </div>
        <div className="status-pill">Frontend ready for API integration</div>
      </header>

      <section className="dashboard-grid">
        <article className="card hero-card">
          <span className="eyebrow">Welcome</span>
          <h3 className="hero-title">Build and manage your school CMS with confidence.</h3>
          <p className="hero-copy">
            This Vite + React admin panel is set up with routing, reusable structure,
            and a service layer so we can connect forms and modules to the existing PHP backend
            without changing the API contract.
          </p>
        </article>

        <article className="card summary-card">
          <span className="eyebrow">Ready Now</span>
          <ul className="metric-list">
            <li>
              <strong>Current Slug</strong>
              <span>{slug}</span>
            </li>
            <li>
              <strong>Router</strong>
              <span>Configured</span>
            </li>
            <li>
              <strong>Axios</strong>
              <span>Installed</span>
            </li>
            <li>
              <strong>API layer</strong>
              <span>Prepared</span>
            </li>
          </ul>
        </article>

        <article className="card full-width">
          <span className="eyebrow">Page Preview</span>
          {loading ? (
            <p>Loading page content...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <>
              <h3>{pageData?.title || 'Untitled page'}</h3>
              <p className="hero-copy">{pageData?.content || 'No content available.'}</p>
            </>
          )}
        </article>

        <article className="card full-width">
          <span className="eyebrow">Edit About Page</span>
          <div className="form-grid">
            <div className="field-group">
              <label htmlFor="about-title" className="field-label">Title</label>
              <input
                id="about-title"
                className="field-input"
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Enter page title"
              />
            </div>

            <div className="field-group">
              <label htmlFor="about-content" className="field-label">Content</label>
              <textarea
                id="about-content"
                className="field-textarea"
                value={content}
                onChange={(event) => setContent(event.target.value)}
                placeholder="Enter page content"
              />
            </div>
          </div>

          <div className="form-actions">
            <button
              type="button"
              className="primary-button"
              onClick={handleSave}
              disabled={isSaving}
              aria-busy={isSaving}
            >
              {isSaving ? 'Saving...' : 'Save'}
            </button>

            {saveMessage ? <p className="success-text">{saveMessage}</p> : null}
            {saveError ? <p className="error-text">{saveError}</p> : null}
          </div>
        </article>

        <article className="card full-width">
          <span className="eyebrow">Next Modules</span>
          <ul className="quick-list">
            <li>
              <strong>Pages Management</strong>
              <span>Connect to `GET /api/pages/{slug}` and `POST /api/pages/update`</span>
            </li>
            <li>
              <strong>Media Library</strong>
              <span>Add upload and preview flows once media endpoints are available</span>
            </li>
            <li>
              <strong>Notices and Results</strong>
              <span>Extend the router with dedicated admin screens as we build them</span>
            </li>
          </ul>
        </article>
      </section>
    </>
  )
}
