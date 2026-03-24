import SectionPage from '../components/SectionPage.jsx'

export default function AdminUsersPage() {
  return (
    <SectionPage
      eyebrow="Admin"
      title="Admin Users"
      description="Manage CMS administrators and access-related settings."
      routePath="/admin-users"
      items={[
        { title: 'Accounts', description: 'Display CMS usernames and role information.' },
        { title: 'Security', description: 'Prepare password update and access controls.' },
        { title: 'Audit', description: 'Add logging and admin activity history later.' },
      ]}
    />
  )
}
