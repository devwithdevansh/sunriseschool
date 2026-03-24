import SectionPage from '../components/SectionPage.jsx'

export default function NoticesPage() {
  return (
    <SectionPage
      eyebrow="Notices"
      title="Notices"
      description="Create and publish circulars, announcements, and file attachments."
      routePath="/notices"
      items={[
        { title: 'Announcements', description: 'Create notice cards with title, description, and date.' },
        { title: 'Attachments', description: 'Link PDFs or supporting files to each notice.' },
        { title: 'Scheduling', description: 'Prepare date-based publishing and archival flows.' },
      ]}
    />
  )
}
