import SectionPage from '../components/SectionPage.jsx'

export default function MediaPage() {
  return (
    <SectionPage
      eyebrow="Media"
      title="Media Library"
      description="Manage school images, videos, PDFs, and categorized media assets."
      routePath="/media"
      items={[
        { title: 'Uploads', description: 'Prepare upload forms for images, videos, and PDF files.' },
        { title: 'Categories', description: 'Group assets by gallery, notice, event, or document type.' },
        { title: 'Preview', description: 'Add file preview cards once media APIs are connected.' },
      ]}
    />
  )
}
