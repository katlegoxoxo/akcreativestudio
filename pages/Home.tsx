
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Calendar, Play } from 'lucide-react';
import { TALENT_ROSTER, EVENTS_DATA, REELS_DATA } from '../constants';
import ScrollReveal from '../components/ScrollReveal';

const ReelCard = ({ reel }: { reel: typeof REELS_DATA[0] }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current && !error) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.warn("Autoplay blocked or video error:", e);
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <div
      className="group relative aspect-[9/16] bg-zinc-900 overflow-hidden cursor-pointer border-r border-white/5"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!error ? (
        <video
          ref={videoRef}
          src={reel.videoUrl}
          poster={reel.thumbnail}
          muted
          loop
          playsInline
          onError={() => setError(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${isPlaying ? 'grayscale-0 opacity-100' : 'grayscale opacity-60'
            }`}
        />
      ) : (
        <img
          src={reel.thumbnail}
          alt={reel.artistName}
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

      <div className="absolute top-6 left-6">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 ${isPlaying ? 'bg-white border-white text-black' : 'bg-white/10 border-white/20 text-white backdrop-blur-md'
          }`}>
          <Play size={14} className={isPlaying ? 'fill-current' : ''} />
        </div>
      </div>

      <div className="absolute bottom-8 left-8 right-8 transition-transform duration-500 group-hover:-translate-y-2">
        <span className="text-[9px] font-black tracking-[0.3em] text-zinc-500 uppercase mb-2 block group-hover:text-white transition-colors">
          {reel.label}
        </span>
        <h4 className="text-3xl font-black uppercase tracking-tighter leading-none group-hover:text-white">
          {reel.artistName}
        </h4>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const featuredTalent = TALENT_ROSTER.slice(0, 3);
  const featuredEvent = EVENTS_DATA[0];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <ScrollReveal delay={200}>
            <span className="inline-block py-1 px-4 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold tracking-[0.3em] mb-6 border border-white/10">
              ESTABLISHED IN CREATIVITY
            </span>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.85] uppercase">
              REDEFINING <br />
              <span className="italic font-serif text-zinc-500">The Stage</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              ak CREATIVE studio is the premier destination for world-class talent management, avant-garde event production, and elite bookings.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={800}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/talent"
                className="px-10 py-5 bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group"
              >
                Explore Roster <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/bookings"
                className="px-10 py-5 bg-transparent border border-white/20 text-white font-bold uppercase text-xs tracking-widest hover:bg-white/5 transition-all flex items-center justify-center gap-2"
              >
                Book Now <Calendar size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll Indicator Arrow */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce opacity-30">
          <div className="w-[1px] h-16 bg-white mx-auto mb-2" />
        </div>
      </section>

      {/* Featured Talent Section */}
      <section className="py-32 bg-zinc-950 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="text-[10px] font-bold tracking-[0.5em] text-zinc-600 uppercase mb-4">Elite Roster</h2>
                <h3 className="text-5xl font-black tracking-tighter uppercase">THE CURATED FEW</h3>
              </div>
              <Link to="/talent" className="text-xs font-black border-b-2 border-white pb-1 hover:text-zinc-400 hover:border-zinc-400 transition-all tracking-widest uppercase">
                VIEW ALL ARTISTS
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredTalent.map((talent, index) => (
              <ScrollReveal key={talent.id} delay={index * 200}>
                <div className="group relative aspect-[3/4] overflow-hidden bg-zinc-900 shadow-2xl">
                  <img
                    src={talent.image}
                    alt={talent.name}
                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 mb-2 block uppercase">{talent.category}</span>
                    <h4 className="text-4xl font-black mb-3 uppercase tracking-tighter">{talent.name}</h4>
                    <Link to={`/talent`} className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-300 uppercase text-white">
                      LEARN MORE <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Artist Reels Section - New */}
      <section className="py-32 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <ScrollReveal>
            <h2 className="text-[10px] font-bold tracking-[0.5em] text-zinc-600 uppercase mb-4">Cinematic Motion</h2>
            <h3 className="text-5xl font-black tracking-tighter uppercase">ARTIST REELS</h3>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <Link to="/media" className="group flex items-center gap-3 text-xs font-black border-b-2 border-white pb-1 hover:text-zinc-400 hover:border-zinc-400 transition-all tracking-widest uppercase">
              EXPLORE ALL MEDIA <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REELS_DATA.map((reel, index) => (
            <ScrollReveal key={reel.id} delay={index * 150} threshold={0.2}>
              <ReelCard reel={reel} />
            </ScrollReveal>
          ))}
        </div>

      </section>

      {/* Event Highlight */}
      <section className="py-32 bg-zinc-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <ScrollReveal threshold={0.3}>
            <div className="relative group">
              <div className="absolute -top-6 -left-6 w-32 h-32 border-l-2 border-t-2 border-white/10 group-hover:border-white/40 transition-colors" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-white/10 group-hover:border-white/40 transition-colors" />
              <img
                src={featuredEvent.image}
                alt="Featured Event"
                className="w-full aspect-[4/3] object-cover rounded-sm shadow-2xl relative z-10 grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </ScrollReveal>

          <div className="relative z-20">
            <ScrollReveal delay={200}>
              <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-600 uppercase mb-4 block">Major Event Premiere</span>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <h3 className="text-6xl font-black mb-8 leading-none uppercase tracking-tighter">{featuredEvent.title}</h3>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <p className="text-zinc-400 text-lg mb-10 leading-relaxed font-light">
                {featuredEvent.description} Experience the fusion of art, technology, and sound in a way never seen before.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <div className="flex flex-col gap-6 text-xs font-black tracking-[0.2em] uppercase">
                <div className="flex items-center gap-5 text-zinc-300">
                  <div className="w-10 h-[1px] bg-zinc-700" />
                  <span className="flex items-center gap-2"><Calendar size={16} /> {featuredEvent.date}</span>
                </div>
                <div className="flex items-center gap-5 text-zinc-300">
                  <div className="w-10 h-[1px] bg-zinc-700" />
                  <span className="flex items-center gap-2"><Star size={16} /> {featuredEvent.location}</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <Link to="/events" className="mt-12 inline-block px-10 py-5 bg-zinc-900 text-white border border-white/10 uppercase tracking-widest text-xs font-black hover:bg-white hover:text-black transition-all">
                All Major Events
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-32 border-y border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-[10px] font-bold tracking-[0.6em] text-zinc-700 mb-16 uppercase">Trusted By Industry Titans</h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-20 grayscale contrast-125 hover:opacity-100 transition-opacity duration-1000">
              <span className="text-3xl font-black italic tracking-tighter">SONY MUSIC</span>
              <span className="text-3xl font-black italic tracking-tighter">VOGUE</span>
              <span className="text-3xl font-black italic tracking-tighter">WARNER BROS</span>
              <span className="text-3xl font-black italic tracking-tighter">UNIVERSAL</span>
              <span className="text-3xl font-black italic tracking-tighter">LVMH</span>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
