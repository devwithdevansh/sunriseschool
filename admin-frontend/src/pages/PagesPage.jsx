import SectionPage from '../components/SectionPage.jsx'

export default function PagesPage() {
  return (
    <SectionPage
      eyebrow="Pages"
      title="Pages Management"
      description="Manage website pages, slugs, and content sections from the admin panel."
      routePath="/pages"
      items={[
        { title: 'About Page', description: 'Edit and publish the about-school page content.' },
        { title: 'Admissions', description: 'Add forms, instructions, and admission notices.' },
        { title: 'Static Pages', description: 'Expand the editor to handle more page slugs.' },
      ]}
    />
  )
}
