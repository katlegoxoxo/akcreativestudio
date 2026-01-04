
import React from 'react';
import { Play, Download, ExternalLink, Music, Film, FileText } from 'lucide-react';
import { MEDIA_DATA } from '../constants';

const Media: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      <section className="pt-20 pb-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
           <h1 className="text-6xl font-black tracking-tighter uppercase mb-4">Media Hub</h1>
           <p className="text-zinc-400 text-lg max-w-xl">
             Explore live performances, official music videos, and professional press kits for the ak CREATIVE roster.
           </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MEDIA_DATA.map((item) => (
              <div key={item.id} className="bg-zinc-950 border border-white/5 overflow-hidden group">
                <div className="relative aspect-video">
                  <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {item.type === 'Video' && (
                      <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:bg-white group-hover:text-black transition-all">
                        <Play size={24} fill="currentColor" />
                      </div>
                    )}
                    {item.type === 'Audio' && (
                      <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:bg-white group-hover:text-black transition-all">
                        <Music size={24} />
                      </div>
                    )}
                    {item.type === 'Document' && (
                      <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:bg-white group-hover:text-black transition-all">
                        <FileText size={24} />
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {item.type === 'Video' && <Film size={14} className="text-zinc-500" />}
                    {item.type === 'Audio' && <Music size={14} className="text-zinc-500" />}
                    {item.type === 'Document' && <FileText size={14} className="text-zinc-500" />}
                    <span className="text-[10px] font-black tracking-widest uppercase text-zinc-500">{item.type}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-6 text-zinc-200">{item.title}</h3>
                  <a
                    href={item.link}
                    className="flex items-center justify-between text-xs font-black tracking-[0.2em] uppercase py-3 border-t border-white/10 group-hover:text-white transition-colors"
                  >
                    {item.type === 'Document' ? 'Download Press Kit' : 'Open Content'}
                    {item.type === 'Document' ? <Download size={16} /> : <ExternalLink size={16} />}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Inquiries CTA */}
      <section className="py-24 bg-white text-black mt-12">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tighter">Professional Press Kits</h2>
            <p className="text-lg text-zinc-600 mb-10 leading-relaxed">
              Are you a member of the media or a talent booker looking for high-resolution assets, biographies, and rider requirements? Our full agency database is available for authorized partners.
            </p>
            <button className="px-10 py-5 bg-black text-white text-xs font-black uppercase tracking-widest hover:bg-zinc-800 transition-all">
              Request Full Media Access
            </button>
         </div>
      </section>
    </div>
  );
};

export default Media;
