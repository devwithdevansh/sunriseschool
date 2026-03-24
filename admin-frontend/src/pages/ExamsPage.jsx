import SectionPage from '../components/SectionPage.jsx'

export default function ExamsPage() {
  return (
    <SectionPage
      eyebrow="Exams"
      title="Exams"
      description="Manage exam information, yearly schedules, and related notes."
      routePath="/exams"
      items={[
        { title: 'Exam List', description: 'Track exam names, descriptions, and academic year.' },
        { title: 'Schedules', description: 'Prepare space for timetable and instruction uploads.' },
        { title: 'Planning', description: 'Extend this section as exam APIs are added.' },
      ]}
    />
  )
}
