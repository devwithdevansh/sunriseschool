import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Settings, 
  Shield, 
  Globe, 
  Bell, 
  Lock, 
  Save, 
  User, 
  Camera,
  Info,
  Smartphone
} from 'lucide-react'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general')

  const tabs = [
    { id: 'general', label: 'General', icon: Globe },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">System Settings</h2>
          <p className="text-slate-500 font-medium">Configure institutional defaults and administrative security.</p>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Settings Navigation */}
        <aside className="lg:w-64 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-[20px] font-bold text-sm transition-all ${
                activeTab === tab.id 
                ? 'bg-slate-900 text-white shadow-xl shadow-slate-200' 
                : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-100'
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </aside>

        {/* Settings Content */}
        <div className="flex-1">
          {activeTab === 'general' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
              <article className="bg-white rounded-[40px] border border-slate-100 p-10 shadow-sm">
                <h3 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-3">
                  <Info className="text-blue-500" size={24} /> Institutional Profile
                </h3>
                
                <div className="space-y-8">
                  <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-slate-50 rounded-[32px] border border-slate-100">
                    <div className="relative group">
                      <div className="w-24 h-24 bg-white rounded-[32px] flex items-center justify-center border-4 border-white shadow-xl">
                        <span className="text-3xl font-black text-blue-600">SS</span>
                      </div>
                      <button className="absolute -bottom-2 -right-2 p-3 bg-slate-900 text-white rounded-2xl shadow-lg hover:scale-110 transition-all">
                        <Camera size={16} />
                      </button>
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 text-lg mb-1">School Logo</h4>
                      <p className="text-sm text-slate-500 font-medium mb-4">Update the logo displayed on the website and admin panel.</p>
                      <button className="text-xs font-black uppercase tracking-widest text-blue-600 px-4 py-2 bg-blue-50 rounded-xl hover:bg-blue-100 transition-all">Replace Mark</button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="field-group">
                      <label className="field-label">School Name</label>
                      <input type="text" className="field-input" defaultValue="Sunrise School Rajkot" />
                    </div>
                    <div className="field-group">
                      <label className="field-label">Official Email</label>
                      <input type="email" className="field-input" defaultValue="info@sunriseschool.com" />
                    </div>
                    <div className="field-group">
                      <label className="field-label">Contact Number</label>
                      <input type="text" className="field-input" defaultValue="+91 98250 12345" />
                    </div>
                    <div className="field-group">
                      <label className="field-label">Office Hours</label>
                      <input type="text" className="field-input" defaultValue="08:00 AM - 02:00 PM" />
                    </div>
                  </div>
                </div>
              </article>

              <div className="flex justify-end gap-4">
                <button className="px-10 py-4 bg-slate-900 text-white font-bold rounded-2xl flex items-center gap-2 hover:bg-blue-600 transition-all shadow-xl shadow-slate-200">
                  <Save size={18} /> Save Changes
                </button>
              </div>
            </motion.div>
          )}

          {activeTab === 'security' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
              <article className="bg-white rounded-[40px] border border-slate-100 p-10 shadow-sm">
                <h3 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-3">
                  <Lock className="text-orange-500" size={24} /> Authentication
                </h3>
                
                <div className="space-y-8">
                  <div className="field-group">
                    <label className="field-label">Current Password</label>
                    <input type="password" className="field-input" placeholder="••••••••" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="field-group">
                      <label className="field-label">New Password</label>
                      <input type="password" className="field-input" placeholder="Min 8 characters" />
                    </div>
                    <div className="field-group">
                      <label className="field-label">Confirm New Password</label>
                      <input type="password" className="field-input" placeholder="Repeat new password" />
                    </div>
                  </div>
                </div>
              </article>

              <article className="bg-white rounded-[40px] border border-slate-100 p-10 shadow-sm">
                <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <Smartphone className="text-green-500" size={24} /> Two-Factor Auth
                </h3>
                <div className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <div>
                    <p className="font-bold text-slate-900">Enable SMS Verification</p>
                    <p className="text-xs text-slate-500 font-medium mt-1">Receive a code on your phone when logging in.</p>
                  </div>
                  <button className="w-12 h-6 bg-slate-200 rounded-full relative transition-colors hover:bg-slate-300">
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
                  </button>
                </div>
              </article>

              <div className="flex justify-end gap-4">
                <button className="px-10 py-4 bg-slate-900 text-white font-bold rounded-2xl flex items-center gap-2 hover:bg-blue-600 transition-all shadow-xl shadow-slate-200">
                  <Save size={18} /> Update Security
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
