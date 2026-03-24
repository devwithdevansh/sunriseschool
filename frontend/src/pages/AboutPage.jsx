import { useEffect, useState } from 'react'
import { getPage } from '../services/pages.js'

export default function AboutPage() {
  const [pageData, setPageData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    async function loadPage() {
      try {
        const response = await getPage('about-school')
        const page =
          response?.data?.data ||
          response?.data ||
          response

        if (isMounted) {
          setPageData(page)
          setError('')
        }
      } catch (requestError) {
        if (isMounted) {
          setError(
            requestError?.response?.data?.message || 'Failed to load About page.'
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
  }, [])

  return (
    <section className="content-card">
      <span className="section-tag">About</span>
      {loading ? <p>Loading About page...</p> : null}
      {!loading && error ? <p className="error-text">{error}</p> : null}
      {!loading && !error ? (
        <>
          <h2>{pageData?.title || 'About Sunrise School'}</h2>
          <p className="content-copy">{pageData?.content || 'Content will appear here.'}</p>
        </>
      ) : null}
    </section>
  )
}
