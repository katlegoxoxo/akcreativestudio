import { Talent, TalentCategory, Event, MediaItem, Reel } from './types';

export const TALENT_ROSTER: Talent[] = [
  {
    id: '1',
    name: 'ANELE ZONDO',
    category: 'Musician & Model',
    image: "/artist_images/Anele-Zondo.png",

    bio: 'A multifaceted star and "Base Beauty," blending her career as a chart-topping musician with her status as a high-fashion model and TV personality.',
    socials: { instagram: '@anele_zondo', twitter: '@anele_zondo' }
  },
  {
    id: '2',
    name: 'SJAVA',
    category: 'Musician',
    image: "/artist_images/Sjava.jpg",
    bio: 'Master storyteller and award-winning artist blending contemporary sounds with deep-rooted Zulu culture and soul.',
    socials: { instagram: '@sjava_atm', spotify: 'sjava' }
  },

  {
    id: '3',
    name: 'MR.JAZZIQ',
    category: 'Musician',
    image: "/artist_images/mr-jzzaiq.jpg",
    bio: 'Amapiano pioneer and label head driving the sound of the streets from local townships to the global stage.',
    socials: { instagram: '@mrjazziq', spotify: 'mr-jazziq' }
  },
  {
    id: '6',
    name: 'MS COSMO',
    category: 'Musician',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800',
    bio: 'Preeminent Hip-Hop DJ and broadcaster, a major force in urban music culture across the continent.',
    socials: { instagram: '@mscosmodj', twitter: '@mscosmo' }
  },
  {
    id: '7',
    name: 'JESSE SUNTELE',
    category: 'Musician',
    image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=800',
    bio: 'Charismatic rapper and actor known for his lyrical prowess and commanding presence on screen and stage.',
    socials: { instagram: '@jesse_suntele_' }
  },
  {
    id: '8',
    name: 'MALUMZ ON DECKS',
    category: 'Musician',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800',
    bio: 'Multi-platinum House duo specializing in melodic grooves and sophisticated soulful production.',
    socials: { instagram: '@malumzondecks', spotify: 'malumz-on-decks' }
  },
  {
    id: '9',
    name: 'KELVIN MOMO',
    category: 'Musician',
    image: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80&w=800',
    bio: 'The master of "Private School Amapiano," crafting jazzy textures that define a more sophisticated side of the genre.',
    socials: { instagram: '@kelvinmomo_', spotify: 'kelvin-momo' }
  },
  {
    id: '10',
    name: 'BABALWA M',
    category: 'Musician',
    image: 'https://images.unsplash.com/photo-1485872222634-5a6711ad73ae?auto=format&fit=crop&q=80&w=800',
    bio: 'Enchanting vocalist whose soulful tones have become the signature sound of modern Amapiano collaborations.',
    socials: { instagram: '@babalwa__m', spotify: 'babalwa-m' }
  }
];

export const EVENTS_DATA: Event[] = [
  {
    id: 'e1',
    title: 'NEON NIGHTS FESTIVAL',
    date: 'August 15, 2024',
    location: 'Johannesburg, SA',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80',
    description: 'A curated showcase of urban music legends and rising stars managed by ak CREATIVE.',
    type: 'Upcoming'
  },
  {
    id: 'e2',
    title: 'THE VANGUARD GALA',
    date: 'October 12, 2024',
    location: 'Cape Town, SA',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80',
    description: 'An exclusive annual celebration of artistry and impact in the African entertainment industry.',
    type: 'Upcoming'
  },
  {
    id: 'e3',
    title: 'URBAN BEATS SUMMIT',
    date: 'March 10, 2024',
    location: 'Durban, SA',
    image: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80',
    description: 'A networking powerhouse for producers and songwriters across the region.',
    type: 'Past'
  }
];

export const REELS_DATA: Reel[] = [
  {
    id: 'r1',
    artistName: 'Anele Zondo',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-girl-dancing-in-front-of-a-club-light-34538-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=400',
    label: 'Live Performance'
  },
  {
    id: 'r2',
    artistName: 'Mr JazziQ',
    videoUrl: '/artist_reels/jazziq.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=400',

    label: 'Live Performance'
  },
  {
    id: 'r3',
    artistName: 'Sjava',
    videoUrl: '/artist_reels/sjava.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1514525253344-f814d0743b1c?auto=format&fit=crop&q=80&w=400',
    label: 'Live Performance'
  }
];

export const MEDIA_DATA: MediaItem[] = [
  {
    id: 'm1',
    title: 'Anele Zondo - Live Performance',
    type: 'Video',
    thumbnail: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=400',
    link: 'https://youtube.com'
  },
  {
    id: 'm2',
    title: 'Sjava - Isina Muva Press Kit',
    type: 'Document',
    thumbnail: 'https://images.unsplash.com/photo-1514525253344-f814d0743b1c?auto=format&fit=crop&q=80&w=400',
    link: '#'
  },
  {
    id: 'm3',
    title: 'Kelvin Momo - Private School Sessions',
    type: 'Audio',
    thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=400',
    link: 'https://spotify.com'
  }
];
