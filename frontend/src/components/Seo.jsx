import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE, ROUTE_SEO, DEFAULT_SEO } from '../seo/seoConfig.js'

const SCHOOL_ID = `${SITE_URL}/#school`
const WEBSITE_ID = `${SITE_URL}/#website`

const buildBreadcrumbList = (pathname) => {
  if (pathname === '/') return null

  const segments = pathname.split('/').filter(Boolean)
  const items = [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` }]

  let path = ''
  segments.forEach((segment, idx) => {
    path += `/${segment}`
    const entry = ROUTE_SEO[path]
    items.push({
      '@type': 'ListItem',
      position: idx + 2,
      name: entry?.breadcrumb || segment,
      item: `${SITE_URL}${path}`,
    })
  })

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  }
}

const Seo = () => {
  const { pathname } = useLocation()
  const entry = ROUTE_SEO[pathname] || DEFAULT_SEO
  const canonicalUrl = `${SITE_URL}${pathname === '/' ? '/' : pathname.replace(/\/$/, '')}`
  const breadcrumbList = buildBreadcrumbList(pathname)

  const organizationGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'School',
        '@id': SCHOOL_ID,
        name: SITE_NAME,
        alternateName: 'Sunrise School',
        url: `${SITE_URL}/`,
        logo: DEFAULT_OG_IMAGE,
        image: DEFAULT_OG_IMAGE,
        description: DEFAULT_SEO.description,
        foundingDate: '2016',
        parentOrganization: {
          '@type': 'Organization',
          name: 'Shree Meenaben Gangubhai Humbal Education and Charitable Trust',
        },
        telephone: '+91-8799140051',
        email: 'sunriseschool8261@gmail.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Sadhuvasvani Kunj Road, Near Railnagar',
          addressLocality: 'Rajkot',
          addressRegion: 'Gujarat',
          addressCountry: 'IN',
        },
      },
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        publisher: { '@id': SCHOOL_ID },
      },
    ],
  }

  return (
    <Helmet>
      <title>{entry.title}</title>
      <meta name="description" content={entry.description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={entry.title} />
      <meta property="og:description" content={entry.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={entry.title} />
      <meta name="twitter:description" content={entry.description} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
      <meta property="twitter:url" content={canonicalUrl} />

      <script type="application/ld+json">{JSON.stringify(organizationGraph)}</script>
      {breadcrumbList && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbList)}</script>
      )}
    </Helmet>
  )
}

export default Seo
