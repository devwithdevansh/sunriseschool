import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Download, Phone, Award, Users, TrendingUp, CheckCircle, ChevronDown, Briefcase } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';

const statistics = [
  { label: 'Pass Percentage', value: 99, suffix: '%', icon: <TrendingUp size={32} className="text-slate-800" /> },
  { label: 'Highest Score', value: 99.8, suffix: '%', icon: <Award size={32} className="text-yellow-600" /> },
  { label: 'Distinctions (>90%)', value: 85, suffix: '+', icon: <CheckCircle size={32} className="text-emerald-600" /> },
  { label: 'Total Students', value: 250, suffix: '', icon: <Briefcase size={32} className="text-indigo-800" /> },
];

const toppers = [
  { name: 'Siddharth Mehta', score: 99.8, img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80', rank: 1 },
  { name: 'Priya Verma', score: 99.3, img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80', rank: 2 },
  { name: 'Aman Sharma', score: 99.0, img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80', rank: 3 },
];

const studentsData = [
  { id: '12COM001', name: 'Siddharth Mehta', percentage: 99.8, grade: 'A1' },
  { id: '12COM002', name: 'Priya Verma', percentage: 99.3, grade: 'A1' },
  { id: '12COM003', name: 'Aman Sharma', percentage: 99.0, grade: 'A1' },
  { id: '12COM004', name: 'Neha Gupta', percentage: 96.5, grade: 'A1' },
  { id: '12COM005', name: 'Ravi Teja', percentage: 92.4, grade: 'A1' },
  { id: '12COM006', name: 'Vikram Singh', percentage: 89.2, grade: 'A2' },
  { id: '12COM007', name: 'Shreya Iyer', percentage: 88.5, grade: 'A2' },
  { id: '12COM008', name: 'Ritika Jain', percentage: 82.1, grade: 'A2' },
  { id: '12COM009', name: 'Anil Kumar', percentage: 75.6, grade: 'B1' },
  { id: '12COM010', name: 'Karan Patel', percentage: 72.0, grade: 'B1' },
];

const chartData = [
  { grade: 'A1', count: 65 },
  { grade: 'A2', count: 80 },
  { grade: 'B1', count: 55 },
  { grade: 'B2', count: 35 },
  { grade: 'C1+', count: 15 },
];

// Animated Counter Component
const AnimatedCounter = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / value));
    
    const timer = setInterval(() => {
      start += 1;
      setCount(prev => {
        if (prev + 1 >= value) {
          clearInterval(timer);
          return value;
        }
        return prev + 1;
      });
    }, stepTime);
    
    return () => clearInterval(timer);
  }, [value]);

  return <span>{typeof value === 'number' && !Number.isInteger(value) ? value : count}{suffix}</span>;
};

const Result12CommercePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGrade, setFilterGrade] = useState('All');

  const filteredStudents = studentsData.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) || s.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGrade = filterGrade === 'All' || s.grade === filterGrade;
    return matchesSearch && matchesGrade;
  });

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen pb-20">
      
      {/* HERO SECTION - CORPORATE / DARK THEME */}
      <section className="relative w-full h-[75vh] flex items-center justify-center max-w-[96%] mx-auto mt-4 rounded-[2rem] overflow-hidden bg-slate-900 shadow-xl border border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pointer-events-none"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        
        {/* Abstract Gold accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-4 px-6 py-2 rounded-full border border-slate-700 bg-slate-800/80 backdrop-blur-md text-amber-500 text-sm font-bold uppercase tracking-widest"
          >
            Academic Year 2024-2025
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tight mb-4 drop-shadow-lg"
          >
            Class 12 Commerce <br/>
            <span className="text-amber-500">Board Results</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-medium"
          >
            Fostering the next generation of industry leaders, accountants, and successful entrepreneurs.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, delay: 0.6 }}
            onClick={() => document.getElementById('results-table').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-amber-500 text-slate-900 rounded-full font-bold shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:bg-amber-400 transition-all flex items-center mx-auto space-x-2"
          >
            <span>View Full Results</span>
            <ChevronDown size={20} />
          </motion.button>
        </div>
      </section>

      {/* HIGHLIGHTS SECTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 p-8 rounded-[2rem] shadow-2xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-4 bg-slate-800 rounded-2xl border border-slate-700">
                  {stat.icon}
                </div>
                <div className="text-4xl font-black text-white">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
              </div>
              <h3 className="text-amber-500/80 font-bold uppercase tracking-wider text-sm">{stat.label}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TOPPERS SECTION */}
      <section className="py-10 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-black text-slate-900 mb-4">Board Toppers</h2>
          <div className="w-20 h-1.5 bg-amber-500 rounded-full mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center items-end gap-8 md:gap-12">
          {toppers.map((topper, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: topper.rank === 1 ? 0 : 0.2 }}
              className={`relative bg-white rounded-[2rem] shadow-2xl border border-slate-200 p-8 flex flex-col items-center text-center transform transition-all hover:scale-105 ${topper.rank === 1 ? 'w-full md:w-1/3 z-10 -translate-y-4 shadow-slate-900/10 border-slate-300' : 'w-full md:w-1/4'}`}
            >
              <div className="absolute -top-6 bg-slate-900 text-amber-500 font-black px-6 py-2 rounded-full shadow-lg border-2 border-amber-500">
                Rank {topper.rank}
              </div>
              <div className={`w-32 h-32 rounded-full overflow-hidden mb-6 mt-4 shadow-inner border-4 border-white ${topper.rank===1 ? 'w-40 h-40 ring-4 ring-amber-500' : 'ring-2 ring-slate-200'}`}>
                <img src={topper.img} alt={topper.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">{topper.name}</h3>
              <div className="text-3xl font-black text-slate-800">
                {topper.score}%
              </div>
              <p className="text-amber-600 mt-2 font-bold bg-amber-50 px-3 py-1 rounded-full uppercase text-xs tracking-widest">A1 Grade</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PERFORMANCE GRAPH SECTION */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="bg-slate-900 rounded-[2.5rem] p-10 shadow-xl border border-slate-800">
          <h2 className="text-3xl font-black text-white mb-8 text-center">Grade Distribution</h2>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
                <XAxis dataKey="grade" axisLine={false} tickLine={false} tick={{ fill: '#cbd5e1', fontWeight: 600 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#cbd5e1' }} />
                <RechartsTooltip 
                  cursor={{ fill: '#1e293b' }}
                  contentStyle={{ backgroundColor: '#0f172a', borderRadius: '1rem', border: '1px solid #334155', color: '#fff', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.5)' }}
                />
                <Bar dataKey="count" radius={[8, 8, 8, 8]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#f59e0b' : index === 1 ? '#fbbf24' : index === 2 ? '#fcd34d' : '#fde68a'} />
                  ))}
                  <LabelList dataKey="count" position="top" fill="#f8fafc" fontWeight={700} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* TABLE SECTION */}
      <section id="results-table" className="py-16 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2.5rem] shadow-xl border border-slate-200 overflow-hidden"
        >
          <div className="p-8 md:p-10 bg-slate-50 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <h2 className="text-3xl font-black text-slate-900">Student Directory</h2>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative">
                <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search name or ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-6 py-3 rounded-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 w-full md:w-64 bg-white"
                />
              </div>
              <div className="relative">
                <Filter size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <select 
                  value={filterGrade}
                  onChange={(e) => setFilterGrade(e.target.value)}
                  className="pl-12 pr-10 py-3 rounded-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 appearance-none bg-white w-full sm:w-auto"
                >
                  <option value="All">All Grades</option>
                  <option value="A1">A1</option>
                  <option value="A2">A2</option>
                  <option value="B1">B1</option>
                  <option value="B2">B2</option>
                  <option value="C1">C1</option>
                </select>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-amber-500 uppercase text-xs tracking-wider">
                  <th className="py-6 px-8 font-black">Student Name</th>
                  <th className="py-6 px-8 font-black">Seat Number</th>
                  <th className="py-6 px-8 font-black">Percentage</th>
                  <th className="py-6 px-8 font-black rounded-tr-3xl">Grade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <AnimatePresence>
                  {filteredStudents.length > 0 ? (
                    filteredStudents.map((student, idx) => (
                      <motion.tr 
                        key={student.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="hover:bg-amber-50/30 transition-colors bg-white"
                      >
                        <td className="py-5 px-8 font-bold text-slate-900">{student.name}</td>
                        <td className="py-5 px-8 font-medium text-slate-500">{student.id}</td>
                        <td className="py-5 px-8">
                          <span className="inline-block bg-slate-900 text-white font-bold px-3 py-1 rounded-md text-sm">
                            {student.percentage}%
                          </span>
                        </td>
                        <td className="py-5 px-8 font-black text-amber-600">{student.grade}</td>
                      </motion.tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="py-10 text-center text-slate-500 font-medium">
                        No students found matching your criteria.
                      </td>
                    </tr>
                  )}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* CTA SECTION */}
      <section className="px-6 pb-10 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-[3rem] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between text-white shadow-2xl overflow-hidden relative border border-slate-800"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="relative z-10 mb-8 md:mb-0 md:mr-8 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Get the Official Results List</h2>
            <p className="text-slate-400 text-lg max-w-xl">Download the complete digitally signed PDF for Class 12 Commerce Board Results.</p>
          </div>
          
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0">
            <button className="px-8 py-4 bg-amber-500 text-slate-900 rounded-full font-bold shadow-xl hover:bg-amber-400 hover:scale-105 transition-all flex items-center justify-center space-x-2">
              <Download size={20} />
              <span>Download PDF</span>
            </button>
            <button className="px-8 py-4 bg-slate-800 text-white rounded-full font-bold border border-slate-600 hover:bg-slate-700 transition-colors flex items-center justify-center space-x-2 backdrop-blur-sm">
              <Phone size={20} />
              <span>Contact Office</span>
            </button>
          </div>
        </motion.div>
      </section>
      
    </div>
  );
};

export default Result12CommercePage;
