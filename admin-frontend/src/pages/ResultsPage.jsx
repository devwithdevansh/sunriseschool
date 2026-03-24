import SectionPage from '../components/SectionPage.jsx'

export default function ResultsPage() {
  return (
    <SectionPage
      eyebrow="Results"
      title="Results"
      description="Publish academic results by class, medium, stream, and year."
      routePath="/results"
      items={[
        { title: 'Documents', description: 'Link downloadable result PDFs for each batch.' },
        { title: 'Filters', description: 'Organize result files by class, medium, and year.' },
        { title: 'Publishing', description: 'Add upload and visibility controls for result announcements.' },
      ]}
    />
  )
}
