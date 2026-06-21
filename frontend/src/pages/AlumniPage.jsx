import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Users, Calendar, MapPin, ArrowRight } from 'lucide-react';
import heroBg from '../assets/images/ANNUAL/0D5A5278.JPG';
import imgAlum1 from '../assets/images/Students/IMG_1381.JPG.jpeg';
import imgAlum2 from '../assets/images/Students/IMG_1383.JPG.jpeg';
import imgAlum3 from '../assets/images/Students/IMG_1385.JPG.jpeg';
import imgAlum4 from '../assets/images/ANNUAL/0D5A5514.JPG';
import imgMentorship from '../assets/images/ANNUAL/DSC05613.JPG';

const ALUMNI_DATA = [
  {
    name: "Dr. Aakash Patel",
    batch: "Class of 2012",
    role: "Senior Surgeon, AIIMS",
    image: imgAlum1,
    quote: "Sunrise School gave me the foundation to pursue my medical dreams."
  },
  {
    name: "Priya Sharma",
    batch: "Class of 2015",
    role: "Software Engineer, Google",
    image: imgAlum2,
    quote: "The emphasis on logical thinking and technology set me on the right path."
  },
  {
    name: "Rahul Desai",
    batch: "Class of 2010",
    role: "Founder & CEO, TechX",
    image: imgAlum3,
    quote: "Leadership skills I learned in school activities are what I use every day now."
  },
  {
    name: "Neha Mehta",
    batch: "Class of 2018",
    role: "Architect, BuildSpace",
    image: imgAlum4,
    quote: "Creative freedom and excellent guidance shaped my career design."
  }
];

const STATS = [
  { label: "Global Alumni", value: "5000+", icon: <Users size={32} className="text-brand-orange" /> },
  { label: "Success Rate", value: "99%", icon: <Award size={32} className="text-blue-500" /> },
  { label: "Top Universities", value: "150+", icon: <GraduationCap size={32} className="text-brand-dark" /> },
  { label: "Entrepreneurs", value: "300+", icon: <Briefcase size={32} className="text-purple-500" /> }
];

const AlumniPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-hidden font-sans">
      {/* 1. HERO SECTION (Cinematic Image Infused) */}
      <section className="relative h-[75vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <img src={heroBg} alt="Sunrise Alumni" className="absolute inset-0 w-full h-full object-cover" />
        
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-900/70 to-gray-900/30" />
        <div className="absolute inset-0 bg-brand-blue/20 mix-blend-multiply" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[12px] font-black tracking-[0.4em] uppercase text-brand-orange mb-6 block drop-shadow-md">Our Legacy</span>
            <h1 className="text-[clamp(3rem,8vw,8rem)] font-black tracking-tighter mb-6 uppercase text-white leading-[0.9] drop-shadow-2xl">
              Sunrise <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-brand-orange">Alumni</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md"
          >
            Connecting generations of excellence. Our alumni are shaping the future across the globe, carrying the spirit of Sunrise School in every endeavor.
          </motion.p>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="relative z-20 -mt-16 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 flex flex-col items-center text-center group"
            >
              <div className="mb-4 p-4 rounded-full bg-gray-50 group-hover:bg-blue-50 transition-colors">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-black text-brand-dark mb-1 tracking-tight">{stat.value}</h3>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. ALUMNI PROFILES & SUCCESS STORIES */}
      <section className="py-32 bg-white relative overflow-hidden mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-4 tracking-tighter uppercase">Global Achievers</h2>
            <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">Stories of our outstanding alumni who have made exceptional contributions in their respective fields.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ALUMNI_DATA.map((alumni, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-brand-blue/20 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                  <img 
                    src={alumni.image} 
                    alt={alumni.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-20">
                    <span className="inline-block px-3 py-1 bg-brand-orange text-white text-[10px] font-black uppercase tracking-wider rounded-sm mb-2">
                      {alumni.batch}
                    </span>
                    <h3 className="text-xl font-bold text-white leading-tight">{alumni.name}</h3>
                  </div>
                </div>
                
                <div className="p-6 relative">
                  <div className="text-sm font-bold text-brand-blue mb-4 uppercase tracking-widest">{alumni.role}</div>
                  <p className="text-gray-600 text-sm font-medium italic leading-relaxed">"{alumni.quote}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ALUMNI EVENTS & REUNIONS */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-4 tracking-tighter uppercase">Upcoming Events</h2>
              <div className="w-24 h-1 bg-brand-orange rounded-full mb-6"></div>
              <p className="text-lg text-gray-500 font-medium">Reconnect with old friends and expand your professional network at our upcoming alumni gatherings.</p>
            </motion.div>
            <motion.button
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mt-6 md:mt-0 flex items-center space-x-2 text-brand-blue font-bold uppercase tracking-widest hover:text-brand-orange transition-colors group"
            >
              <span>View All Events</span>
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              { title: "Annual Grand Reunion 2026", date: "August 15, 2026", location: "Sunrise School Campus", type: "Reunion" },
              { title: "Alumni Tech Summit", date: "September 10, 2026", location: "Grand Hyatt, Mumbai", type: "Networking" },
              { title: "Career Guidance Seminar", date: "October 05, 2026", location: "Virtual (Zoom)", type: "Mentorship" }
            ].map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="inline-block px-3 py-1 bg-blue-50 text-brand-blue text-[10px] font-black uppercase tracking-wider rounded-sm mb-6">
                  {event.type}
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-6 leading-tight group-hover:text-brand-orange transition-colors">{event.title}</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-500 font-medium text-sm">
                    <Calendar size={16} className="mr-3 text-brand-orange" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-500 font-medium text-sm">
                    <MapPin size={16} className="mr-3 text-brand-orange" />
                    {event.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MENTORSHIP & GIVE BACK */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#0a192f] rounded-[3rem] overflow-hidden flex flex-col lg:flex-row relative shadow-2xl">
            {/* Left Image Side */}
            <div className="lg:w-1/2 relative min-h-[400px]">
              <div className="absolute inset-0 bg-brand-blue/30 mix-blend-multiply z-10"></div>
              <img 
                src={imgMentorship} 
                alt="Mentorship" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            {/* Right Content Side */}
            <div className="lg:w-1/2 p-12 md:p-16 flex flex-col justify-center relative z-20">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-brand-orange mb-4 block">Give Back</span>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">Shape Future Leaders</h2>
                <p className="text-gray-300 mb-8 leading-relaxed font-medium">
                  Our mentorship program relies on the invaluable experience of our alumni. Guide current students, offer internships, or contribute to the Sunrise Scholarship Fund to make a lasting impact.
                </p>
                
                <ul className="space-y-4 mb-10">
                  {['Mentorship Programs', 'Guest Speaking', 'Career Counseling', 'Scholarship Funding'].map((item, id) => (
                    <li key={id} className="flex items-center text-white font-bold text-sm tracking-wide uppercase">
                      <div className="w-2 h-2 bg-brand-orange rounded-full mr-4"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                
                <button className="px-8 py-4 border-2 border-brand-orange text-brand-orange text-sm font-black uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-colors rounded-sm">
                  Become a Mentor
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. JOIN ALUMNI NETWORK CTA */}
      <section className="py-24 relative bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-brand-dark rounded-[3rem] overflow-hidden shadow-2xl relative"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
            
            <div className="p-12 md:p-20 text-center relative z-20">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">Stay Connected</h2>
              <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
                Join our official Alumni Network to stay updated with school events, connect with mentors, and give back to the Sunrise community.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-brand-orange text-white text-sm font-black uppercase tracking-widest hover:bg-orange-600 transition-colors rounded-sm shadow-lg hover:shadow-orange-500/30">
                  Register Now
                </button>
                <button className="px-8 py-4 bg-transparent border border-gray-600 text-white text-sm font-black uppercase tracking-widest hover:border-white transition-colors rounded-sm">
                  Alumni Login
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* FOOTER STRIP */}
      <div className="bg-white py-12 text-center border-t border-gray-100">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">
          © {new Date().getFullYear()} Sunrise School Alumni Network
        </p>
      </div>
    </div>
  );
};

export default AlumniPage;
