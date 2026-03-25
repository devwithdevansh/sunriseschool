import { useEffect, useState } from 'react'
import {
  createPage,
  deletePage,
  getAllPages,
  getPage,
  updatePage,
} from '../services/pages.js'

const initialFormState = {
  slug: '',
  title: '',
  content: '',
}

export default function PagesManager() {
  const [pages, setPages] = useState([])
  const [formData, setFormData] = useState(initialFormState)
  const [editingSlug, setEditingSlug] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoadingPage, setIsLoadingPage] = useState(false)
  const [deletingSlug, setDeletingSlug] = useState('')

  useEffect(() => {
    loadPages()
  }, [])

  async function loadPages() {
    try {
      const response = await getAllPages()
      const pageList = response?.data || []
      setPages(pageList)
      setError('')
    } catch (requestError) {
      setError(
        requestError?.response?.data?.message || 'Failed to load pages.'
      )
    } finally {
      setLoading(false)
    }
  }

  function handleInputChange(event) {
    const { name, value } = event.target
    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  function resetForm() {
    setFormData(initialFormState)
    setEditingSlug('')
    setError('')
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setIsSubmitting(true)
    setSuccessMessage('')
    setError('')

    try {
      if (editingSlug) {
        await updatePage(formData)
        setSuccessMessage('Page updated successfully.')
      } else {
        await createPage(formData)
        setSuccessMessage('Page created successfully.')
      }

      await loadPages()
      resetForm()
    } catch (requestError) {
      setError(
        requestError?.response?.data?.message || 'Failed to save page.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  async function handleEdit(slug) {
    setIsLoadingPage(true)
    setSuccessMessage('')
    setError('')

    try {
      const response = await getPage(slug)
      const page =
        response?.data?.data ||
        response?.data ||
        response

      setFormData({
        slug: page?.slug || '',
        title: page?.title || '',
        content: page?.content || '',
      })
      setEditingSlug(page?.slug || slug)
    } catch (requestError) {
      setError(
        requestError?.response?.data?.message || 'Failed to load page details.'
      )
    } finally {
      setIsLoadingPage(false)
    }
  }

  async function handleDelete(slug) {
    setDeletingSlug(slug)
    setSuccessMessage('')
    setError('')

    try {
      await deletePage(slug)
      setPages((currentPages) => currentPages.filter((page) => page.slug !== slug))

      if (editingSlug === slug) {
        resetForm()
      }

      setSuccessMessage('Page deleted successfully.')
    } catch (requestError) {
      setError(
        requestError?.response?.data?.message || 'Failed to delete page.'
      )
    } finally {
      setDeletingSlug('')
    }
  }

  return (
    <>
      <header className="topbar">
        <div>
          <h2>Pages Manager</h2>
          <p>Create, edit, and delete website pages from the CMS.</p>
        </div>
        <div className="status-pill">{pages.length} pages</div>
      </header>

      <section className="dashboard-grid">
        <article className="card full-width">
          <span className="eyebrow">All Pages</span>
          {loading ? <p>Loading pages...</p> : null}
          {!loading && error ? <p className="error-text">{error}</p> : null}
          {!loading && successMessage ? <p className="success-text">{successMessage}</p> : null}

          {!loading ? (
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Slug</th>
                    <th>Title</th>
                    <th>Updated At</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {pages.length === 0 ? (
                    <tr>
                      <td colSpan="4">No pages found.</td>
                    </tr>
                  ) : (
                    pages.map((page) => (
                      <tr key={page.slug}>
                        <td>{page.slug}</td>
                        <td>{page.title}</td>
                        <td>{page.updated_at || '-'}</td>
                        <td className="table-actions">
                          <button
                            type="button"
                            className="secondary-button"
                            onClick={() => handleEdit(page.slug)}
                            disabled={isLoadingPage || deletingSlug === page.slug}
                          >
                            {isLoadingPage && editingSlug === page.slug ? 'Loading...' : 'Edit'}
                          </button>
                          <button
                            type="button"
                            className="danger-button"
                            onClick={() => handleDelete(page.slug)}
                            disabled={deletingSlug === page.slug}
                          >
                            {deletingSlug === page.slug ? 'Deleting...' : 'Delete'}
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          ) : null}
        </article>

        <article className="card full-width">
          <span className="eyebrow">{editingSlug ? 'Edit Page' : 'Create Page'}</span>
          <form className="form-grid" onSubmit={handleSubmit}>
            <div className="field-group">
              <label htmlFor="page-slug" className="field-label">Slug</label>
              <input
                id="page-slug"
                className="field-input"
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleInputChange}
                placeholder="home-page"
                disabled={Boolean(editingSlug)}
              />
            </div>

            <div className="field-group">
              <label htmlFor="page-title" className="field-label">Title</label>
              <input
                id="page-title"
                className="field-input"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Home"
              />
            </div>

            <div className="field-group">
              <label htmlFor="page-content" className="field-label">Content</label>
              <textarea
                id="page-content"
                className="field-textarea"
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                placeholder="Welcome"
              />
            </div>

            <div className="form-actions">
              <button
                type="submit"
                className="primary-button"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? (editingSlug ? 'Updating...' : 'Creating...')
                  : (editingSlug ? 'Update Page' : 'Create Page')}
              </button>

              {editingSlug ? (
                <button
                  type="button"
                  className="secondary-button"
                  onClick={resetForm}
                  disabled={isSubmitting}
                >
                  Cancel Edit
                </button>
              ) : null}
            </div>
          </form>
        </article>
      </section>
    </>
  )
}
