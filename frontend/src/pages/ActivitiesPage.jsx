import React from 'react';
import Section from '../components/Section.jsx';
import Card from '../components/Card.jsx';
import { Camera, Music2, Brain, Users2, Trophy, Heart } from 'lucide-react';

const ActivitiesPage = () => {
  return (
    <div>
      <section className="bg-brand-orange py-20 text-white text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Beyond the Classroom</h1>
          <p className="text-xl opacity-90">Unlocking potential through diverse extracurricular activities.</p>
        </div>
      </section>

      <Section title="Club Activities" subtitle="Finding passion through varied engagement.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card title="Photography Club" icon={Camera} description="Capture the world through your lens. Learn the art of visual storytelling." />
          <Card title="Music & Choir" icon={Music2} description="Developing vocal and instrumental skills. Join our school band or choir." />
          <Card title="Robotics & AI" icon={Brain} description="Build and program robots. Explore the future of technology in our STEM lab." />
          <Card title="Debate & Elocution" icon={Users2} description="Master the art of public speaking and critical argumentation." />
          <Card title="Sports Academy" icon={Trophy} description="State-of-the-art facilities for cricket, football, and athletics." />
          <Card title="Nature Club" icon={Heart} description="Environment awareness and sustainability projects within our campus." />
        </div>
      </Section>
    </div>
  );
};

export default ActivitiesPage;
