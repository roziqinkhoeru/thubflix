import { DetailMovie, SearchResponse } from "@/types";
import { URL } from "url";

const fetchApi = async (url: URL, cacheTime?: number) => {
  url.searchParams.set("include_adult", "false");
  url.searchParams.set("include_video", "true");
  url.searchParams.set("language", "en-US");
  url.searchParams.set("popularity.desc", "true");

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_TMDB_READ_ACCESS_KEY}`,
    },
    next: {
      revalidate: cacheTime || 60 * 60 * 24,
    },
  };

  const response = await fetch(url.toString(), options);
  const data = await response.json();

  return data;
};

export const getDiscoverMovies = async (page?: number) => {
  const url = new URL("https://api.themoviedb.org/3/discover/movie");
  url.searchParams.set("page", page?.toString() || "1");

  const data = (await fetchApi(url)) as SearchResponse;

  return data.results;
};

export const getNowPlayingMovies = async (page?: number) => {
  const url = new URL("https://api.themoviedb.org/3/movie/now_playing");
  url.searchParams.set("page", page?.toString() || "1");

  const data = (await fetchApi(url)) as SearchResponse;

  return data.results;
};

export const getUpcomingMovies = async (page?: number) => {
  const url = new URL("https://api.themoviedb.org/3/movie/upcoming");
  url.searchParams.set("page", page?.toString() || "1");

  const data = (await fetchApi(url)) as SearchResponse;

  return data.results;
};

export const getTopRatedMovies = async (page?: number) => {
  const url = new URL("https://api.themoviedb.org/3/movie/top_rated");
  url.searchParams.set("page", page?.toString() || "1");

  const data = (await fetchApi(url)) as SearchResponse;

  return data.results;
};

export const getDetailMovie = async (id: string) => {
  const url = new URL(`https://api.themoviedb.org/3/movie/${id}`);

  const data = (await fetchApi(url)) as DetailMovie;

  return data;
};
