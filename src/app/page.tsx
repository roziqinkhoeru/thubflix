import Header from "@/components/shared/Header";
import HorizontalMovieContainer from "@/components/shared/HorizontalMovieContainer";
import {
  getNowPlayingMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getApi";

export default async function Home() {
  const playNowMovies = await getNowPlayingMovies();
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();

  return (
    <>
      <Header />
      <main className="container mx-auto mt-10 max-w-7xl px-6">
        <section className="mb-12 w-full">
          <HorizontalMovieContainer
            movies={playNowMovies}
            title="🎬 Play Now"
            description="Highlights movies that are currently playing in theaters."
          />
        </section>
        <section className="mb-12 w-full">
          <HorizontalMovieContainer
            movies={upcomingMovies}
            title="🎥 Upcoming Release"
            description="A preview of trailers for movies that are scheduled for release in the
        near future."
          />
        </section>
        <section className="mb-12 w-full">
          <HorizontalMovieContainer
            movies={topRatedMovies}
            title="⭐ Top Rated"
            description="A collection of trailers for the highest-rated movies according to user
        reviews or ratings from TMDB."
          />
        </section>
      </main>
    </>
  );
}
