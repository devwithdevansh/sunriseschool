import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, MessageSquare, Navigation, ArrowRight, Send } from 'lucide-react';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 uppercase">
              Contact <span className="text-neutral-500">Us</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-600 font-medium leading-relaxed">
              We’re here to help you with admissions and inquiries. Reach out to us today.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-12 flex justify-center"
          >
            <div className="w-1 h-20 bg-gradient-to-b from-neutral-900 to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTACT INFO SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: Phone, title: "Phone Number", value: "+91 98765 43210", link: "tel:+919876543210" },
              { icon: Mail, title: "Email Address", value: "admissions@sunriseschool.edu", link: "mailto:admissions@sunriseschool.edu" },
              { icon: MapPin, title: "School Address", value: "123 Knowledge Lane, Education City, Rajkot", link: "https://maps.google.com/?q=Sunrise+School+Rajkot" }
            ].map((info, index) => (
              <motion.a
                href={info.link}
                key={index}
                variants={itemVariants}
                className="bg-neutral-50 p-10 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300 group text-center block"
              >
                <div className="w-16 h-16 rounded-full bg-neutral-900 text-white flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform">
                  <info.icon className="w-8 h-8" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-neutral-400 mb-4">{info.title}</h3>
                <p className="text-xl md:text-2xl font-black text-neutral-900 leading-tight">{info.value}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. QUICK ACTIONS SECTION */}
      <section className="py-20 bg-neutral-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="tel:+919876543210" className="flex items-center justify-center gap-4 bg-white text-neutral-900 p-8 rounded-2xl font-black uppercase tracking-widest hover:bg-neutral-200 transition-all group shadow-2xl">
              <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" /> Call Now
            </a>
            <a href="https://wa.me/919876543210" className="flex items-center justify-center gap-4 bg-emerald-500 text-white p-8 rounded-2xl font-black uppercase tracking-widest hover:bg-emerald-600 transition-all group shadow-2xl">
              <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" /> WhatsApp
            </a>
            <a href="https://maps.google.com/?q=Sunrise+School+Rajkot" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-4 bg-blue-500 text-white p-8 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-600 transition-all group shadow-2xl">
              <Navigation className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* 4. CONTACT FORM SECTION */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 italic">Send a <span className="text-neutral-500">Message</span></h2>
            <p className="text-neutral-500 font-medium leading-relaxed">Fill out the form below and our team will get back to you shortly.</p>
          </div>

          <motion.form 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 mb-2 ml-1">Your Name</label>
              <input type="text" placeholder="John Doe" className="w-full px-6 py-5 bg-neutral-50 border border-neutral-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all font-medium" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 mb-2 ml-1">Phone Number</label>
              <input type="tel" placeholder="+91 00000 00000" className="w-full px-6 py-5 bg-neutral-50 border border-neutral-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all font-medium" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 mb-2 ml-1">Message</label>
              <textarea rows="5" placeholder="Tell us how we can help you..." className="w-full px-6 py-5 bg-neutral-50 border border-neutral-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all font-medium resize-none"></textarea>
            </motion.div>
            <motion.div variants={itemVariants} className="pt-4 group">
              <button className="w-full py-6 bg-neutral-900 text-white font-black text-lg uppercase tracking-widest hover:bg-neutral-800 transition-all duration-300 flex items-center justify-center gap-3">
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </motion.div>
          </motion.form>
        </div>
      </section>

      {/* 5. GOOGLE MAP SECTION */}
      <section className="py-20 bg-neutral-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 italic">Visit Our <span className="text-neutral-500">Campus</span></h2>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
          >
            <iframe 
              src="https://www.google.com/maps?q=Sunrise+School+Rajkot&output=embed"
              className="w-full h-[400px] md:h-[600px] border-0 grayscale hover:grayscale-0 transition-all duration-1000"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="py-24 md:py-40 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-12 tracking-tighter uppercase leading-[0.9]">
              Visit Sunrise <br /> <span className="text-neutral-500">School</span> Today
            </h2>
            <div className="flex justify-center mt-16 group">
              <a href="https://maps.google.com/?q=Sunrise+School+Rajkot" target="_blank" rel="noopener noreferrer" className="relative shadow-2xl">
                <button className="px-10 py-5 bg-neutral-900 text-white font-black text-lg uppercase tracking-widest hover:bg-neutral-800 transition-all duration-300 flex items-center gap-3">
                  Get Directions
                  <Navigation className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER STRIP */}
      <div className="bg-white py-8 border-t border-neutral-100 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.5em] text-neutral-300">
          © {new Date().getFullYear()} Sunrise School Rajkot • Reach Us
        </p>
      </div>
    </div>
  );
};

export default Contact;
