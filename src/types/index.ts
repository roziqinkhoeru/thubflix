type DogImg = {
  id: string;
  width: number;
  height: number;
  url: string;
};

interface Dogs {
  bred_for: string;
  breed_group: string;
  height: { imperial: string; metric: string };
  id: number;
  life_span: string;
  name: string;
  origin?: string;
  reference_image_id: string;
  temperament: string;
  weight: { imperial: string; metric: string };
}

interface DogImages {
  id: string;
  url: string;
  breeds: Dogs[];
  width: string;
  height: string;
}

interface DogBreeds extends Dogs {
  image: DogImg;
}

interface DogFavorites {
  id: string;
  name: string;
}

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Genre {
  id: number;
  name: string;
}

interface ProductionCompanies {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

interface ProductionCountries {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguages {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface DetailMovie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompanies[];
  production_countries: ProductionCountries[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguages[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface SearchResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

interface HeaderCarouselProps {
  movies: Movie[];
}

interface CardMovieProps {
  movie: Movie;
}

interface HorizontalMovieContainerProps {
  movies: Movie[];
  title: string;
  description: string;
}

export type {
  CardMovieProps,
  DetailMovie,
  DogBreeds,
  DogFavorites,
  DogImages,
  Dogs,
  HeaderCarouselProps,
  HorizontalMovieContainerProps,
  SearchResponse,
};
