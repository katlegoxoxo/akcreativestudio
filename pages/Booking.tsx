
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Calendar, User, Briefcase, MessageSquare, Send, CheckCircle, Mail } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Booking: React.FC = () => {
  const location = useLocation();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    clientName: '',
    email: '',
    talentInterest: '',
    eventType: 'Festival',
    budgetRange: 'Standard',
    description: ''
  });

  useEffect(() => {
    // If we arrived from a specific artist's "Inquire" button
    if (location.state && (location.state as any).artist) {
      setFormData(prev => ({
        ...prev,
        talentInterest: (location.state as any).artist
      }));
    }
  }, [location.state]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <ScrollReveal>
          <div className="text-center max-w-xl">
            <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-10">
              <CheckCircle size={40} className="text-white" />
            </div>
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-6">Transmission Received</h2>
            <p className="text-zinc-500 text-lg mb-10 leading-relaxed font-light">
              Your inquiry for <span className="text-white font-bold">{formData.talentInterest || 'our talent'}</span> has been successfully logged. An agent from ak CREATIVE studio will contact you within 24 hours to discuss logistics and availability.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="px-10 py-5 border border-white text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all"
            >
              Back to Inquiries
            </button>
          </div>
        </ScrollReveal>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen pb-32">
      {/* Header */}
      <section className="pt-24 pb-16 bg-zinc-950 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <h1 className="text-7xl font-black tracking-tighter uppercase mb-4 leading-none">Bookings</h1>
            <p className="text-zinc-500 text-xl max-w-2xl font-light">
              Secure world-class talent and production for your next landmark event.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Info Side */}
          <div className="lg:col-span-5">
            <ScrollReveal>
              <div className="space-y-12">
                <div>
                  <h3 className="text-xs font-black tracking-[0.3em] text-zinc-600 uppercase mb-6">The Process</h3>
                  <div className="space-y-8">
                    <div className="flex gap-6">
                      <div className="text-white font-black text-2xl italic opacity-20">01</div>
                      <div>
                        <h4 className="font-black text-lg uppercase tracking-tight mb-2">Detailed Briefing</h4>
                        <p className="text-zinc-500 text-sm leading-relaxed">Provide event specifics, budget expectations, and technical requirements.</p>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <div className="text-white font-black text-2xl italic opacity-20">02</div>
                      <div>
                        <h4 className="font-black text-lg uppercase tracking-tight mb-2">Vetting & Availability</h4>
                        <p className="text-zinc-500 text-sm leading-relaxed">Our agents confirm the artist's schedule and logistics within the ak CREATIVE studio network.</p>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <div className="text-white font-black text-2xl italic opacity-20">03</div>
                      <div>
                        <h4 className="font-black text-lg uppercase tracking-tight mb-2">Execution</h4>
                        <p className="text-zinc-500 text-sm leading-relaxed">Contracting, technical riders, and world-class show delivery.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 border border-white/5 bg-zinc-950/50">
                  <h4 className="text-[10px] font-black tracking-[0.2em] text-white uppercase mb-4">Urgent Inquiries</h4>
                  <div className="flex items-center gap-3 text-zinc-400">
                    <Mail size={16} />
                    <span className="text-sm">priority@akcreative.studio</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={200}>
              <form onSubmit={handleSubmit} className="space-y-8 bg-zinc-950 p-10 border border-white/5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black tracking-widest text-zinc-600 uppercase flex items-center gap-2">
                      <User size={12} /> Contact Name
                    </label>
                    <input 
                      required
                      type="text" 
                      value={formData.clientName}
                      onChange={e => setFormData({...formData, clientName: e.target.value})}
                      placeholder="Your Name"
                      className="w-full bg-black border border-white/10 p-4 focus:outline-none focus:border-white transition-all text-white font-medium" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black tracking-widest text-zinc-600 uppercase flex items-center gap-2">
                      <Mail size={12} /> Email Address
                    </label>
                    <input 
                      required
                      type="email" 
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      placeholder="email@company.com"
                      className="w-full bg-black border border-white/10 p-4 focus:outline-none focus:border-white transition-all text-white font-medium" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black tracking-widest text-zinc-600 uppercase flex items-center gap-2">
                      <Briefcase size={12} /> Talent Interest
                    </label>
                    <input 
                      type="text" 
                      value={formData.talentInterest}
                      onChange={e => setFormData({...formData, talentInterest: e.target.value})}
                      placeholder="e.g. Kelvin Momo"
                      className="w-full bg-black border border-white/10 p-4 focus:outline-none focus:border-white transition-all text-white font-medium" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black tracking-widest text-zinc-600 uppercase flex items-center gap-2">
                      <Calendar size={12} /> Event Type
                    </label>
                    <select 
                      value={formData.eventType}
                      onChange={e => setFormData({...formData, eventType: e.target.value})}
                      className="w-full bg-black border border-white/10 p-4 focus:outline-none focus:border-white transition-all text-white font-medium appearance-none"
                    >
                      <option>Festival</option>
                      <option>Club Performance</option>
                      <option>Private Event</option>
                      <option>Tour Management</option>
                      <option>Brand Collaboration</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black tracking-widest text-zinc-600 uppercase flex items-center gap-2">
                    <MessageSquare size={12} /> Brief Description
                  </label>
                  <textarea 
                    rows={6} 
                    value={formData.description}
                    onChange={e => setFormData({...formData, description: e.target.value})}
                    placeholder="Tell us about the event date, location, and vision..."
                    className="w-full bg-black border border-white/10 p-4 focus:outline-none focus:border-white transition-all text-white resize-none font-medium" 
                  />
                </div>

                <button 
                  disabled={loading}
                  className="group w-full py-6 bg-white text-black font-black uppercase tracking-[0.4em] text-xs hover:bg-zinc-200 transition-all flex items-center justify-center gap-4 disabled:opacity-50"
                >
                  {loading ? 'Processing...' : (
                    <>
                      Send Inquiry
                      <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
