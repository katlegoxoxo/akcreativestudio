
import React, { useState } from 'react';
import { Search, Instagram, Music, Twitter, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { TALENT_ROSTER } from '../constants';
import ScrollReveal from '../components/ScrollReveal';

const TalentPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const filteredTalent = TALENT_ROSTER.filter(t => 
    t.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleInquiry = (artistName: string) => {
    // Navigate to bookings page with artist name pre-filled
    navigate('/bookings', { state: { artist: artistName } });
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Header */}
      <section className="pt-24 pb-16 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <ScrollReveal>
            <div>
              <h1 className="text-7xl font-black tracking-tighter uppercase mb-4 leading-none">The Roster</h1>
              <p className="text-zinc-500 text-xl max-w-xl font-light">
                Our exclusive ecosystem of boundary-pushing musicians and creators.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
              <input
                type="text"
                placeholder="Find an artist..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-zinc-950 border border-white/10 text-white pl-12 pr-6 py-4 rounded-none focus:outline-none focus:border-white transition-all w-full md:w-80 font-medium placeholder:text-zinc-700"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          {filteredTalent.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
              {filteredTalent.map((talent, index) => (
                <ScrollReveal key={talent.id} delay={index * 100}>
                  <div className="group flex flex-col h-full">
                    <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 mb-8">
                      <img
                        src={talent.image}
                        alt={talent.name}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale hover:grayscale-0 transition-all"
                      />
                      
                      {/* Social Overlay */}
                      <div className="absolute top-6 right-6 flex flex-col gap-3 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                        {talent.socials.instagram && (
                          <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition-colors border border-white/10"><Instagram size={18} /></a>
                        )}
                        {talent.socials.spotify && (
                          <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition-colors border border-white/10"><Music size={18} /></a>
                        )}
                        {talent.socials.twitter && (
                          <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition-colors border border-white/10"><Twitter size={18} /></a>
                        )}
                      </div>

                      {/* Artist Category Tag */}
                      <div className="absolute bottom-6 left-6">
                        <span className="bg-black/90 text-white text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 border border-white/10 backdrop-blur-sm">
                          {talent.category}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-4xl font-black mb-4 tracking-tighter uppercase group-hover:text-zinc-400 transition-colors duration-300">
                      {talent.name}
                    </h3>
                    
                    <p className="text-zinc-500 text-base leading-relaxed mb-8 flex-grow font-light">
                      {talent.bio}
                    </p>

                    <button 
                      onClick={() => handleInquiry(talent.name)}
                      className="group/btn flex items-center justify-between w-full py-5 border-t border-white/10 hover:border-white transition-all text-[11px] font-black tracking-[0.3em] uppercase"
                    >
                      Inquire for Booking
                      <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="py-40 text-center">
              <p className="text-zinc-600 text-2xl font-black uppercase tracking-widest">Artist not found.</p>
              <button 
                onClick={() => setSearchQuery('')} 
                className="mt-6 text-white text-xs font-black border-b-2 border-white pb-1 uppercase tracking-widest hover:text-zinc-400 hover:border-zinc-400 transition-all"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default TalentPage;
