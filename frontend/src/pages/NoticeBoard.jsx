import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Calendar, Download, Search, Pin, ChevronDown, FileText, Filter } from 'lucide-react';

const MOCK_NOTICES = [
  {
    id: 1,
    title: "Urgent: School Closure due to Heavy Rainfall",
    date: "May 04, 2026",
    category: "General",
    isPinned: true,
    content: "Please be informed that the school will remain closed tomorrow due to the red alert issued by the meteorological department for Rajkot. All scheduled unit tests will be postponed, and the new dates will be announced shortly. Stay safe.",
    attachment: null,
  },
  {
    id: 2,
    title: "Term 2 Final Examination Timetable",
    date: "May 02, 2026",
    category: "Exams",
    isPinned: true,
    content: "The official timetable for the Term 2 Final Examinations for classes 1 through 12 has been released. Examinations will commence from the 20th of May. Please download the attached PDF for detailed dates, subjects, and timings. Admit cards will be distributed in classrooms next week.",
    attachment: { name: "Term2_Timetable_Final.pdf", size: "1.2 MB" },
  },
  {
    id: 3,
    title: "Annual Sports Meet 2026 Registration",
    date: "Apr 28, 2026",
    category: "Events",
    isPinned: false,
    content: "Registration for the upcoming Annual Sports Meet is now open. Students interested in athletics (100m, 200m, 400m), team sports (Basketball, Volleyball), and relay races must submit their names to their respective House Captains by the end of this week. Trials will begin next Monday.",
    attachment: null,
  },
  {
    id: 4,
    title: "Parent-Teacher Meeting (PTM) for Primary Section",
    date: "Apr 25, 2026",
    category: "Academics",
    isPinned: false,
    content: "A mandatory Parent-Teacher Meeting is scheduled for all Primary Section students (Class 1-5) this Saturday from 9:00 AM to 12:30 PM. Parents are requested to review their child's unit test papers and discuss academic progress with the class teachers.",
    attachment: { name: "PTM_Guidelines_Seating.pdf", size: "840 KB" },
  },
  {
    id: 5,
    title: "Revised Fee Payment Guidelines",
    date: "Apr 20, 2026",
    category: "General",
    isPinned: false,
    content: "To enhance convenience, we have completely upgraded our fee payment portal. All upcoming tuition and transport fees must now be paid strictly through the online payment gateway available on the school website. Cash payments at the administrative counter will no longer be accepted.",
    attachment: { name: "Fee_Payment_Tutorial.pdf", size: "2.5 MB" },
  },
  {
    id: 6,
    title: "Summer Vacation Announcement",
    date: "Apr 15, 2026",
    category: "Holidays",
    isPinned: false,
    content: "The school management is pleased to announce that the school will remain closed for the summer vacation starting from May 10th to June 15th. We wish all students and parents a joyful and restful break. Holiday homework assignments have been uploaded to the student portal.",
    attachment: null,
  },
  {
    id: 7,
    title: "Science Exhibition: Call for Projects",
    date: "Apr 10, 2026",
    category: "Events",
    isPinned: false,
    content: "The Science Department is hosting the Annual Science Exhibition next month. Students from Class 8-12 are encouraged to form teams of up to 3 members and submit their working model proposals to their science teachers by Friday.",
    attachment: { name: "Exhibition_Rules.pdf", size: "450 KB" },
  }
];

const CATEGORIES = ["All", "Academics", "Exams", "Events", "Holidays", "General"];

const NoticeBoard = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState(null);

  // Filter and sort notices
  const filteredNotices = useMemo(() => {
    let result = MOCK_NOTICES;

    if (activeCategory !== "All") {
      result = result.filter(n => n.category === activeCategory);
    }

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      result = result.filter(n => n.title.toLowerCase().includes(q) || n.content.toLowerCase().includes(q));
    }

    // Sort: Pinned first, then by ID (assuming ID reflects chronology for mock data)
    return result.sort((a, b) => {
      if (a.isPinned && !b.isPinned) return -1;
      if (!a.isPinned && b.isPinned) return 1;
      return b.id - a.id;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-900 font-sans selection:bg-brand-orange selection:text-white">
      
      {/* ── 1. CINEMATIC HERO ────────────────────────────────────────── */}
      <section className="relative pt-40 pb-24 md:pt-52 md:pb-32 px-4 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/5 blur-[100px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
        
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
            <div className="inline-flex items-center justify-center gap-3 px-4 py-2 rounded-full bg-orange-50 border border-brand-orange/20 text-brand-orange mb-8 shadow-sm">
              <Bell size={16} className="animate-pulse" />
              <span className="text-[10px] font-black tracking-[0.3em] uppercase">Latest Updates</span>
            </div>
            <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-black tracking-tighter leading-[0.85] uppercase mb-8 text-gray-900">
              Notice <span className="text-gray-300 font-light">Board</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
              Stay informed with the latest announcements, examination schedules, and official circulars from Sunrise School.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. FILTERS & SEARCH ──────────────────────────────────────── */}
      <section className="sticky top-20 z-40 bg-white/80 backdrop-blur-xl border-y border-gray-100 shadow-sm px-4 py-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Scrollable Categories */}
          <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 flex items-center gap-2 scrollbar-hide">
            <div className="flex items-center gap-2 px-2 border-r border-gray-200 mr-2 text-gray-400">
              <Filter size={18} />
            </div>
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/20' 
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-900 border border-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-72 relative group">
            <input 
              type="text" 
              placeholder="Search notices..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-50 border border-gray-200 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all text-sm font-medium"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-brand-blue transition-colors" />
          </div>

        </div>
      </section>

      {/* ── 3. NOTICE FEED ───────────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto min-h-[50vh]">
          
          {filteredNotices.length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-32">
              <div className="w-24 h-24 bg-gray-100 text-gray-300 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={40} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-2">No Notices Found</h3>
              <p className="text-gray-500 font-medium">Try adjusting your filters or search query.</p>
              <button onClick={() => { setActiveCategory("All"); setSearchQuery(""); }} className="mt-6 text-brand-blue font-bold uppercase tracking-widest text-xs hover:underline">
                Clear Filters
              </button>
            </motion.div>
          ) : (
            <motion.div layout className="space-y-6">
              <AnimatePresence mode="popLayout">
                {filteredNotices.map((notice) => {
                  const isExpanded = expandedId === notice.id;

                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      key={notice.id}
                      onClick={() => setExpandedId(isExpanded ? null : notice.id)}
                      className={`group cursor-pointer rounded-3xl border transition-all duration-500 overflow-hidden ${
                        notice.isPinned 
                          ? 'bg-white border-brand-orange/30 shadow-lg shadow-brand-orange/5' 
                          : 'bg-white border-gray-100 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/5 shadow-sm'
                      }`}
                    >
                      {/* Card Header (Always Visible) */}
                      <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center relative">
                        
                        {/* Date Block */}
                        <div className={`shrink-0 text-center px-6 py-4 rounded-2xl border ${notice.isPinned ? 'bg-orange-50 border-brand-orange/20 text-brand-orange' : 'bg-gray-50 border-gray-100 text-brand-blue group-hover:bg-blue-50 group-hover:border-brand-blue/20 transition-colors'}`}>
                          <Calendar size={20} className="mx-auto mb-2 opacity-50" />
                          <div className="font-black text-xl leading-none">{notice.date.split(',')[0]}</div>
                          <div className="text-[10px] font-bold uppercase tracking-widest mt-1 opacity-70">{notice.date.split(',')[1]}</div>
                        </div>

                        {/* Title & Meta */}
                        <div className="flex-grow pr-8">
                          <div className="flex items-center gap-3 mb-3">
                            {notice.isPinned && (
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-orange text-white text-[9px] font-black uppercase tracking-widest rounded-full shadow-sm">
                                <Pin size={10} className="fill-current" /> Pinned
                              </span>
                            )}
                            <span className="inline-flex px-3 py-1 bg-gray-100 text-gray-500 text-[9px] font-black uppercase tracking-widest rounded-full">
                              {notice.category}
                            </span>
                            {notice.attachment && (
                              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold text-gray-400">
                                <FileText size={12} /> Attachment
                              </span>
                            )}
                          </div>
                          <h2 className={`text-xl md:text-2xl font-bold tracking-tight leading-snug transition-colors ${notice.isPinned ? 'text-gray-900' : 'text-gray-900 group-hover:text-brand-blue'}`}>
                            {notice.title}
                          </h2>
                        </div>

                        {/* Expand Icon */}
                        <div className={`absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isExpanded ? 'bg-brand-blue text-white rotate-180' : 'bg-gray-50 text-gray-400 group-hover:bg-blue-50 group-hover:text-brand-blue'}`}>
                          <ChevronDown size={20} />
                        </div>
                      </div>

                      {/* Expandable Content */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          >
                            <div className="px-6 md:px-8 pb-8 pt-2 border-t border-gray-100">
                              <p className="text-gray-600 font-medium leading-relaxed text-lg mb-6">
                                {notice.content}
                              </p>
                              
                              {/* Attachment Box */}
                              {notice.attachment && (
                                <button 
                                  onClick={(e) => e.stopPropagation()} // Prevent closing accordion when clicking download
                                  className="flex items-center gap-4 p-4 rounded-2xl border border-gray-200 bg-gray-50 hover:bg-white hover:border-brand-blue/30 hover:shadow-md transition-all group/dl w-full sm:w-auto"
                                >
                                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 text-red-500 group-hover/dl:bg-red-50 transition-colors">
                                    <FileText size={24} />
                                  </div>
                                  <div className="text-left">
                                    <div className="font-bold text-sm text-gray-900 group-hover/dl:text-brand-blue transition-colors line-clamp-1">{notice.attachment.name}</div>
                                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">{notice.attachment.size} • PDF Document</div>
                                  </div>
                                  <div className="ml-auto pl-4">
                                    <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover/dl:bg-brand-blue group-hover/dl:text-white transition-colors">
                                      <Download size={14} />
                                    </div>
                                  </div>
                                </button>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

    </div>
  );
};

export default NoticeBoard;
