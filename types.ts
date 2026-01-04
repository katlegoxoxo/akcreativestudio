export enum TalentCategory {
  MUSICIANS = 'Musician',
  ARTISTS = 'Artist'
}

export interface Talent {
  id: string;
  name: string;
  category: string; // Use string for flexible labels like "Musician & Model"
  image: string;
  bio: string;
  socials: {
    instagram?: string;
    spotify?: string;
    twitter?: string;
  };
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
  type: 'Past' | 'Upcoming';
}

export interface MediaItem {
  id: string;
  title: string;
  type: 'Video' | 'Audio' | 'Document';
  thumbnail: string;
  link: string;
}

export interface Reel {
  id: string;
  artistName: string;
  videoUrl: string;
  thumbnail: string;
  label: string;
}
