export interface PlayerBio {
  fullName: string;
  shortName: string;
  nickname: string;
  birthDate: string;
  birthPlace: string;
  nationality: string;
  position: string;
  secondaryPositions: string[];
  preferredFoot: string;
  height: string;
  currentClub: {
    name: string;
    shirtNumber: number;
    joinedYear: number;
    contractUntil: string;
  };
  nationalTeam: {
    name: string;
    shirtNumber: number;
    debutYear: number;
  };
  tagline: string;
  shortBio: string;
  fullBio: string[];
  quote: {
    text: string;
    author: string;
    role: string;
  };
}

export interface CareerStage {
  id: string;
  team: string;
  league: string;
  period: string;
  years: string;
  role: string;
  appearances: string;
  goals: string;
  assists: string;
  badge: string;
  color: string;
  description: string;
  highlights: string[];
}

export interface Achievement {
  id: string;
  title: string;
  competition: string;
  year: string;
  category: "international" | "club" | "individual";
  team: string;
  iconName: "trophy" | "award" | "medal" | "sparkles" | "star";
  description: string;
  impact: string;
  featured?: boolean;
}

export interface StyleMetric {
  name: string;
  category: string;
  score: number; // 0-100 illustrative representation
  dots: number; // 1-5 scale
  description: string;
}

export interface SignatureMove {
  name: string;
  alias: string;
  description: string;
  tacticalRole: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: "matches" | "trophies" | "spain" | "editorial";
  imageUrl: string;
  fallbackGradient: string;
  alt: string;
  aspectRatio?: "square" | "tall" | "wide";
  dateOrEvent: string;
}

export interface QuickStat {
  label: string;
  value: string;
  sublabel: string;
}
