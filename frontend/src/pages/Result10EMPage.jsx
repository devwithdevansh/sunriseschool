import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Download, Phone, Award, Users, TrendingUp, CheckCircle, ChevronDown } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';

const statistics = [
  { label: 'Pass Percentage', value: 98, suffix: '%', icon: <TrendingUp size={32} className="text-blue-500" /> },
  { label: 'Highest Score', value: 99.2, suffix: '%', icon: <Award size={32} className="text-amber-500" /> },
  { label: 'Distinctions (>90%)', value: 45, suffix: '+', icon: <CheckCircle size={32} className="text-green-500" /> },
  { label: 'Total Students', value: 120, suffix: '', icon: <Users size={32} className="text-purple-500" /> },
];

const toppers = [
  { name: 'Aarav Patel', score: 99.2, img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&q=80', rank: 1 },
  { name: 'Diya Shah', score: 98.8, img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80', rank: 2 },
  { name: 'Rohan Desai', score: 98.5, img: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&q=80', rank: 3 },
];

const studentsData = [
  { id: '10EM001', name: 'Aarav Patel', percentage: 99.2, grade: 'A1' },
  { id: '10EM002', name: 'Diya Shah', percentage: 98.8, grade: 'A1' },
  { id: '10EM003', name: 'Rohan Desai', percentage: 98.5, grade: 'A1' },
  { id: '10EM004', name: 'Kavya Mehta', percentage: 92.4, grade: 'A1' },
  { id: '10EM005', name: 'Aryan Joshi', percentage: 88.5, grade: 'A2' },
  { id: '10EM006', name: 'Riya Trivedi', percentage: 85.0, grade: 'A2' },
  { id: '10EM007', name: 'Dev Patel', percentage: 78.5, grade: 'B1' },
  { id: '10EM008', name: 'Nisha Modi', percentage: 75.2, grade: 'B1' },
  { id: '10EM009', name: 'Raj Kumar', percentage: 65.4, grade: 'B2' },
  { id: '10EM010', name: 'Pooja Singh', percentage: 58.0, grade: 'C1' },
];

const chartData = [
  { grade: 'A1', count: 45 },
  { grade: 'A2', count: 35 },
  { grade: 'B1', count: 25 },
  { grade: 'B2', count: 10 },
  { grade: 'C1+', count: 5 },
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

const Result10EMPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGrade, setFilterGrade] = useState('All');

  const filteredStudents = studentsData.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) || s.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGrade = filterGrade === 'All' || s.grade === filterGrade;
    return matchesSearch && matchesGrade;
  });

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20 ">
      
      {/* HERO SECTION */}
      <section className="relative w-full h-[75vh] flex items-center justify-center max-w-[96%] mx-auto mt-4 rounded-[2rem] overflow-hidden bg-white shadow-lg border border-blue-50">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 pointer-events-none"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-4 px-6 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 backdrop-blur-md text-blue-200 text-sm font-bold uppercase tracking-widest"
          >
            Academic Year 2024-2025
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tight mb-4 drop-shadow-lg"
          >
            Class 10 EM <br/>
            <span className="text-blue-300">Board Results</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-blue-100/90 mb-10 max-w-2xl mx-auto font-medium"
          >
            Celebrating the outstanding academic excellence and hard work of our English Medium students.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, delay: 0.6 }}
            onClick={() => document.getElementById('results-table').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white text-blue-900 rounded-full font-bold shadow-xl hover:shadow-2xl hover:bg-blue-50 transition-all flex items-center mx-auto space-x-2"
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
              className="bg-white/80 backdrop-blur-xl border border-white p-8 rounded-[2rem] shadow-xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-4 bg-slate-50 rounded-2xl">
                  {stat.icon}
                </div>
                <div className="text-4xl font-black text-slate-800">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
              </div>
              <h3 className="text-slate-500 font-bold uppercase tracking-wider text-sm">{stat.label}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TOPPERS SECTION */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-black text-slate-900 mb-4">Our Star Performers</h2>
          <div className="w-20 h-1.5 bg-blue-500 rounded-full mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center items-end gap-8 md:gap-12">
          {toppers.map((topper, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: topper.rank === 1 ? 0 : 0.2 }}
              className={`relative bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-8 flex flex-col items-center text-center transform transition-all hover:scale-105 ${topper.rank === 1 ? 'w-full md:w-1/3 z-10 -translate-y-4 shadow-blue-500/20 shadow-2xl border-blue-100' : 'w-full md:w-1/4'}`}
            >
              <div className="absolute -top-6 bg-gradient-to-r from-amber-400 to-amber-600 text-white font-black px-6 py-2 rounded-full shadow-lg border-2 border-white">
                Rank {topper.rank}
              </div>
              <div className={`w-32 h-32 rounded-full overflow-hidden mb-6 mt-4 shadow-inner border-4 border-white ${topper.rank===1 ? 'w-40 h-40 ring-4 ring-blue-100' : 'ring-2 ring-slate-100'}`}>
                <img src={topper.img} alt={topper.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">{topper.name}</h3>
              <div className="text-3xl font-black text-blue-600">
                {topper.score}%
              </div>
              <p className="text-slate-500 mt-2 font-medium">Grade A1</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PERFORMANCE GRAPH SECTION */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-slate-100">
          <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Grade Distribution</h2>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="grade" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontWeight: 600 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                <RechartsTooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="count" radius={[8, 8, 8, 8]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#3b82f6' : index === 1 ? '#60a5fa' : index === 2 ? '#93c5fd' : '#bfdbfe'} />
                  ))}
                  <LabelList dataKey="count" position="top" fill="#334155" fontWeight={700} />
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
          className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden"
        >
          <div className="p-8 md:p-10 bg-slate-50 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <h2 className="text-3xl font-black text-slate-900">Student Directory</h2>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative">
                <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search name or ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-6 py-3 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64 bg-white"
                />
              </div>
              <div className="relative">
                <Filter size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <select 
                  value={filterGrade}
                  onChange={(e) => setFilterGrade(e.target.value)}
                  className="pl-12 pr-10 py-3 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white w-full sm:w-auto"
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
                <tr className="bg-white text-slate-500 uppercase text-xs tracking-wider border-b border-slate-100">
                  <th className="py-6 px-8 font-black">Student Name</th>
                  <th className="py-6 px-8 font-black">Seat Number</th>
                  <th className="py-6 px-8 font-black">Percentage</th>
                  <th className="py-6 px-8 font-black rounded-tr-3xl">Grade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                <AnimatePresence>
                  {filteredStudents.length > 0 ? (
                    filteredStudents.map((student, idx) => (
                      <motion.tr 
                        key={student.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="hover:bg-slate-50 transition-colors"
                      >
                        <td className="py-5 px-8 font-bold text-slate-900">{student.name}</td>
                        <td className="py-5 px-8 font-medium text-slate-500">{student.id}</td>
                        <td className="py-5 px-8">
                          <span className="inline-block bg-blue-50 text-blue-700 font-bold px-3 py-1 rounded-full text-sm">
                            {student.percentage}%
                          </span>
                        </td>
                        <td className="py-5 px-8 font-black text-slate-900">{student.grade}</td>
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
          className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-[3rem] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between text-white shadow-2xl overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="relative z-10 mb-8 md:mb-0 md:mr-8 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Get the Official Results List</h2>
            <p className="text-blue-200 text-lg max-w-xl">Download the complete digitally signed PDF for Class 10 English Medium Board Results.</p>
          </div>
          
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0">
            <button className="px-8 py-4 bg-white text-blue-900 rounded-full font-bold shadow-xl hover:bg-slate-50 hover:scale-105 transition-all flex items-center justify-center space-x-2">
              <Download size={20} />
              <span>Download PDF</span>
            </button>
            <button className="px-8 py-4 bg-blue-800/50 text-white rounded-full font-bold border border-blue-400/30 hover:bg-blue-800 transition-colors flex items-center justify-center space-x-2 backdrop-blur-sm">
              <Phone size={20} />
              <span>Contact Office</span>
            </button>
          </div>
        </motion.div>
      </section>
      
    </div>
  );
};

export default Result10EMPage;
