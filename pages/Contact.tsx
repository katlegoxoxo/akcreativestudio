
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      <section className="pt-20 pb-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-6xl font-black tracking-tighter uppercase">Connect</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
             <h2 className="text-sm font-bold tracking-[0.3em] text-zinc-500 uppercase mb-8">Get In Touch</h2>
             <div className="space-y-12">
               <div className="flex gap-6">
                 <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center text-white flex-shrink-0">
                    <Mail size={20} />
                 </div>
                 <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest text-zinc-500 mb-1">Email Inquiry</h4>
                    <p className="text-xl font-bold text-white">hello@akcreative.studio</p>
                 </div>
               </div>

               <div className="flex gap-6">
                 <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center text-white flex-shrink-0">
                    <Phone size={20} />
                 </div>
                 <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest text-zinc-500 mb-1">Phone</h4>
                    <p className="text-xl font-bold text-white">+1 (323) 555-0198</p>
                 </div>
               </div>

               <div className="flex gap-6">
                 <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center text-white flex-shrink-0">
                    <MapPin size={20} />
                 </div>
                 <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest text-zinc-500 mb-1">HQ Location</h4>
                    <p className="text-xl font-bold text-white">1420 Entertainment Plaza<br />Hollywood, CA 90028</p>
                 </div>
               </div>
             </div>

             <div className="mt-16 pt-12 border-t border-white/10">
                <h4 className="text-xs font-bold tracking-widest text-zinc-500 uppercase mb-6">Social Ecosystem</h4>
                <div className="flex gap-6">
                  <a href="#" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                     <Instagram size={20} /> <span className="text-sm font-bold tracking-widest">INSTAGRAM</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                     <Twitter size={20} /> <span className="text-sm font-bold tracking-widest">TWITTER</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                     <Linkedin size={20} /> <span className="text-sm font-bold tracking-widest">LINKEDIN</span>
                  </a>
                </div>
             </div>
          </div>

          <div className="bg-zinc-950 p-10 border border-white/5">
             <h3 className="text-2xl font-black mb-8 uppercase tracking-tight">Direct Inquiry</h3>
             <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black tracking-widest text-zinc-500 uppercase">First Name</label>
                    <input type="text" className="w-full bg-black border border-white/10 p-4 focus:outline-none focus:border-white transition-all text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black tracking-widest text-zinc-500 uppercase">Last Name</label>
                    <input type="text" className="w-full bg-black border border-white/10 p-4 focus:outline-none focus:border-white transition-all text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black tracking-widest text-zinc-500 uppercase">Email Address</label>
                  <input type="email" className="w-full bg-black border border-white/10 p-4 focus:outline-none focus:border-white transition-all text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black tracking-widest text-zinc-500 uppercase">Subject</label>
                  <select className="w-full bg-black border border-white/10 p-4 focus:outline-none focus:border-white transition-all text-white appearance-none">
                    <option>General Inquiry</option>
                    <option>Artist Representation</option>
                    <option>Partnership Proposal</option>
                    <option>Press Inquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black tracking-widest text-zinc-500 uppercase">Message</label>
                  <textarea rows={5} className="w-full bg-black border border-white/10 p-4 focus:outline-none focus:border-white transition-all text-white resize-none" />
                </div>
                <button className="w-full py-5 bg-white text-black font-black uppercase tracking-widest text-xs hover:bg-zinc-200 transition-all">
                  Send Transmission
                </button>
             </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
