// Declarations for modules without types
declare interface Movie {
  _id: string;
  plot: string;
  genres: string[];
  runtime: number;
  metacritic?: number;
  rated?: string;
  cast: string[];
  num_mflix_comments?: number;
  poster?: string;
  title: string;
  fullplot?: string;
  languages: string;
  released: Date;
  directors: string[];
  writers?: string[];
  awards?: {
    wins: number;
    nominations: number;
    text: string;
  };
  lastupdated: Date;
  year: number;
  imdb: {
    rating: number;
    votes: number;
    id: number;
  };
  type?: string;
  countries: string[];
  tomatoes: {
    website: string;
    viewer: {
      rating: number;
      numReviews: number;
      meter: number;
    };
    dvd: Date;
    critic: {
      rating: number;
      numRevies: number;
      meter: number;
    };
    boxOffice: string;
    consensus: string;
    rotten: number;
    production: string;
    lastUpdated: Date;
    fresh: number;
  };
}
