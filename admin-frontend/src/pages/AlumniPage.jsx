import SectionPage from '../components/SectionPage.jsx'

export default function AlumniPage() {
  return (
    <SectionPage
      eyebrow="Alumni"
      title="Alumni"
      description="Highlight alumni stories, batches, and profile photos."
      routePath="/alumni"
      items={[
        { title: 'Stories', description: 'Feature alumni experiences and achievements.' },
        { title: 'Batch Info', description: 'Organize alumni by passing year or batch.' },
        { title: 'Profiles', description: 'Prepare forms for name, story, and profile image.' },
      ]}
    />
  )
}
