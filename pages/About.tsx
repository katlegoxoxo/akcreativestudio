
import React from 'react';
import { Target, Users, Zap, ShieldCheck } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const About: React.FC = () => {
  return (
    <div className="bg-black text-white">
      {/* Page Header */}
      <section className="pt-32 pb-32 bg-zinc-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 uppercase leading-none">Our DNA</h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-zinc-500 text-xl max-w-3xl mx-auto font-light leading-relaxed">
              Founded on the principle that creativity is a currency, ak CREATIVE studio bridges the gap between raw talent and global recognition.
            </p>
          </ScrollReveal>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      </section>

      {/* Story Section */}
      <section className="py-32 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <ScrollReveal>
              <h2 className="text-[10px] font-bold tracking-[0.5em] text-zinc-600 uppercase">The Origin Story</h2>
              <h3 className="text-5xl font-black uppercase tracking-tighter mt-4">WHERE VISION <br />MEETS EXECUTION</h3>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="space-y-6 text-zinc-400 text-lg leading-relaxed font-light">
                <p>
                  Started in 2018 in a small studio loft in Downtown LA, ak CREATIVE began with a single mission: to treat artist management as a fine art. We didn't just want to book gigs; we wanted to build legacies.
                </p>
                <p>
                  Today, we operate across three continents, representing a diverse roster of musicians, innovators, and creators who are pushing the boundaries of what's possible in the digital and physical realms.
                </p>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal threshold={0.3}>
            <div className="relative aspect-square">
              <div className="absolute inset-0 border border-white/10 -m-4 z-0" />
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
                alt="Studio Life"
                className="w-full h-full object-cover grayscale relative z-10"
              />
              <div className="absolute -bottom-10 -left-10 bg-zinc-900 p-10 border border-white/10 hidden md:block z-20">
                 <span className="text-6xl font-black block tracking-tighter">150+</span>
                 <span className="text-[10px] font-bold tracking-[0.3em] text-zinc-500 uppercase mt-2 block">Successful Tours</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* AK Creative Studio Highlight */}
      <section className="py-40 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="inline-block px-4 py-1 border-2 border-black font-black text-[10px] tracking-[0.4em] mb-10 uppercase">THE PRODUCTION ARM</div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.8] uppercase">AK Creative <br /><span className="text-zinc-400 italic font-serif">Studio</span></h2>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <p className="text-2xl max-w-2xl mx-auto mb-20 leading-relaxed font-light">
              Our specialized production arm focused exclusively on high-end live events, immersive stage design, and cinematic broadcast productions.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-left border-t border-black/10 pt-16">
            {[
              { title: "Stage Design", desc: "Bespoke lighting and scenic architecture for stadiums and arenas." },
              { title: "Touring Logistics", desc: "Full-scale global tour management and technical support." },
              { title: "Creative Direction", desc: "Conceptualizing brand identity and visual storytelling for live shows." }
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={500 + (idx * 200)}>
                <h4 className="font-black text-2xl mb-3 uppercase tracking-tighter">{item.title}</h4>
                <p className="text-zinc-600 leading-relaxed">{item.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 text-center mb-24">
          <ScrollReveal>
            <h2 className="text-[10px] font-bold tracking-[0.5em] text-zinc-600 uppercase mb-4">Our Integrity</h2>
            <h3 className="text-5xl font-black uppercase tracking-tighter">Built on Excellence</h3>
          </ScrollReveal>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: <Target size={40} />, title: "Precision", desc: "Every detail matters in the pursuit of perfection." },
            { icon: <Zap size={40} />, title: "Innovation", desc: "We lead where others follow, adopting the latest tech." },
            { icon: <Users size={40} />, title: "Community", desc: "An agency is only as strong as its relationships." },
            { icon: <ShieldCheck size={40} />, title: "Integrity", desc: "Honest representation and transparent dealings." }
          ].map((v, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="p-10 border border-white/5 bg-black hover:border-white/40 transition-all group h-full">
                <div className="text-zinc-500 group-hover:text-white transition-colors mb-6">{v.icon}</div>
                <h4 className="text-2xl font-black mb-4 uppercase tracking-tighter">{v.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed font-light">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
