import SectionPage from '../components/SectionPage.jsx'

export default function StaffPage() {
  return (
    <SectionPage
      eyebrow="Staff"
      title="Staff Directory"
      description="Organize teachers, roles, departments, and subject assignments."
      routePath="/staff"
      items={[
        { title: 'Profiles', description: 'List staff members with photos and department details.' },
        { title: 'Filters', description: 'Filter by department, subject, and designation.' },
        { title: 'Updates', description: 'Prepare forms for adding or editing faculty records.' },
      ]}
    />
  )
}
