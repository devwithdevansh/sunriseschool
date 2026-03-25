import React from 'react';
import Section from '../components/Section.jsx';
import Card from '../components/Card.jsx';
import { BookOpen, FlaskConical, Languages, Calculator, Music, Dumbbell } from 'lucide-react';

const AcademicsPage = () => {
  return (
    <div>
      <section className="bg-brand-blue py-20 text-white text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Academic Programs</h1>
          <p className="text-xl opacity-90">A rigorous curriculum designed for comprehensive growth.</p>
        </div>
      </section>

      <Section title="Our Departments" subtitle="Specialized learning across all disciplines.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card title="Science Lab" icon={FlaskConical} description="Modern laboratories for physics, chemistry, and biology to foster scientific inquiry." />
          <Card title="Mathematics" icon={Calculator} description="Focus on logical reasoning, problem-solving, and analytical skills from a young age." />
          <Card title="Languages" icon={Languages} description="Multilingual proficiency in English, Hindi, and Gujarati with a focus on communication." />
          <Card title="Humanities" icon={BookOpen} description="Exploring history, geography, and social sciences to understand our world." />
          <Card title="Fine Arts" icon={Music} description="Nurturing creative expression through music, dance, and visual arts." />
          <Card title="Physical Education" icon={Dumbbell} description="Promoting health, fitness, and teamwork through a variety of sports and activities." />
        </div>
      </Section>
    </div>
  );
};

export default AcademicsPage;
