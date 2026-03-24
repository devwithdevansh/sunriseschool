import SectionPage from '../components/SectionPage.jsx'

export default function ActivitiesPage() {
  return (
    <SectionPage
      eyebrow="Activities"
      title="Activities"
      description="Track sports and co-curricular achievements across school levels."
      routePath="/activities"
      items={[
        { title: 'Categories', description: 'Separate sports and co-curricular achievements.' },
        { title: 'Levels', description: 'Track school, district, state, and national participation.' },
        { title: 'Highlights', description: 'Showcase images and descriptions for each activity.' },
      ]}
    />
  )
}
