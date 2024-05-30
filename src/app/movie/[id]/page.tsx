import ButtonBack from "@/components/shared/ButtonBack";
import { getDetailMovie } from "@/lib/getApi";
import { getImageUrl } from "@/lib/getImageUrl";
import { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const id = params.id;

  const movie = await getDetailMovie(id);

  return {
    title: movie.title,
  };
}

const MovieDetails = async ({ params: { id } }: { params: { id: string } }) => {
  const movie = await getDetailMovie(id);

  return (
    <div className="container mx-auto max-w-7xl px-6">
      <div className="mb-6 mt-12">
        <ButtonBack />
      </div>
      <div className="flex flex-col items-center gap-5 lg:flex-row">
        <div className="group min-h-96 w-full overflow-hidden rounded-md lg:w-1/2">
          <Image
            src={getImageUrl(movie?.backdrop_path)}
            alt={movie?.title}
            width={1920}
            height={1080}
            className="h-full w-full object-cover transition group-hover:scale-110"
          />
        </div>
        <div className="flex w-full flex-col gap-2 lg:w-1/2">
          <h2 className="text-2xl font-semibold underline decoration-[1px]">
            {movie?.original_title}
          </h2>
          <p className="mt-2 text-sm leading-6 tracking-wide">
            {movie?.overview}
          </p>
          <p className="text-sm text-gray-200">
            IMDB:{" "}
            <span className="font-medium text-white">{movie.vote_average}</span>
          </p>
          <p className="text-sm text-gray-200">
            Votes:{" "}
            <span className="font-medium text-white">{movie.vote_count}</span>
          </p>
          <p className="text-sm text-gray-200">
            Release Data:{" "}
            <span className="font-medium text-white">{movie.release_date}</span>
          </p>
          <p className="text-sm text-gray-200">
            Genres:{" "}
            {movie?.genres.map((item: any) => (
              <span key={item?.id} className="mr-1 font-medium text-white">
                {item?.name},
              </span>
            ))}
          </p>
          <p className="text-sm text-gray-200">
            Tag Line:{" "}
            <span className="font-medium text-white">{movie.tagline}</span>
          </p>
          <p className="text-sm text-gray-200">
            Status:{" "}
            <span
              className={`font-medium ${
                movie?.status === "Released" ? "text-green-500" : "text-red-500"
              }`}
            >
              {movie.status}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
