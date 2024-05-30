import { HorizontalMovieContainerProps } from "@/types";
import CardMovie from "./CardMovie";

function HorizontalMovieContainer({
  movies,
  title,
  description,
}: HorizontalMovieContainerProps) {
  return (
    <div>
      <h2 className="mb-2 text-3xl font-black uppercase">{title}</h2>
      <p className="mb-8">{description}</p>
      <div className="flex space-x-10 overflow-scroll scrollbar-hide">
        {movies.map((movie) => (
          <div className="" key={movie.id}>
            <CardMovie movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HorizontalMovieContainer;
