
import React from 'react';
import { Calendar, MapPin, ExternalLink, ChevronRight } from 'lucide-react';
import { EVENTS_DATA } from '../constants';
import ScrollReveal from '../components/ScrollReveal';

const Events: React.FC = () => {
  const upcomingEvents = EVENTS_DATA.filter(e => e.type === 'Upcoming');
  const pastEvents = EVENTS_DATA.filter(e => e.type === 'Past');

  return (
    <div className="bg-black min-h-screen">
      {/* Header */}
      <section className="pt-20 pb-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <h1 className="text-6xl font-black tracking-tighter uppercase mb-4">Productions</h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-zinc-400 text-lg max-w-xl">
              From intimate showcases to massive global tours, explore the footprint of ak CREATIVE studio's elite production division.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-black uppercase">Upcoming</h2>
              <div className="h-px flex-grow bg-white/10" />
            </div>
          </ScrollReveal>

          <div className="space-y-12">
            {upcomingEvents.map((event, index) => (
              <ScrollReveal key={event.id} delay={index * 100}>
                <div className="group grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-5 relative overflow-hidden aspect-video lg:aspect-[4/3]">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
                    />
                    <div className="absolute top-4 left-4 bg-white text-black px-4 py-2 font-black text-xs uppercase tracking-widest z-10">
                      Live Premiere
                    </div>
                  </div>
                  <div className="lg:col-span-7">
                    <div className="flex flex-wrap gap-4 text-xs font-bold tracking-widest text-zinc-500 mb-6 uppercase">
                      <span className="flex items-center gap-2"><Calendar size={14} /> {event.date}</span>
                      <span className="flex items-center gap-2"><MapPin size={14} /> {event.location}</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black mb-6 uppercase leading-tight group-hover:text-zinc-400 transition-colors">{event.title}</h3>
                    <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                      {event.description} Join us for an unforgettable evening of performance art and live music production.
                    </p>
                    <button className="flex items-center gap-4 text-xs font-black tracking-[0.2em] uppercase border-b-2 border-white pb-2 hover:text-zinc-400 hover:border-zinc-400 transition-all">
                      Register for tickets <ExternalLink size={14} />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Past Major Highlights */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-16">
              <h2 className="text-3xl font-black uppercase text-zinc-500">Archive</h2>
              <div className="h-px flex-grow bg-white/10" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <ScrollReveal key={event.id} delay={index * 150}>
                <div className="bg-black p-6 border border-white/5 hover:border-white/20 transition-all group cursor-pointer h-full">
                  <div className="aspect-[16/10] mb-6 overflow-hidden relative">
                     <img 
                       src={event.image} 
                       alt={event.title} 
                       className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                     />
                  </div>
                  <span className="text-[10px] font-bold text-zinc-600 tracking-widest uppercase mb-2 block">{event.date}</span>
                  <h4 className="text-xl font-bold mb-4 uppercase group-hover:text-white transition-colors">{event.title}</h4>
                  <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
                    Successful production in {event.location}. Curated talent from our exclusive roster.
                  </p>
                  <div className="flex items-center justify-between">
                     <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Post-Event Recap</span>
                     <ChevronRight size={18} className="text-zinc-700 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
