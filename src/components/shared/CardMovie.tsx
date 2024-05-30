import { getImageUrl } from "@/lib/getImageUrl";
import { CardMovieProps } from "@/types";
import Link from "next/link";
import { formatDate } from "../../lib/dateUtils";

function CardMovie({ movie }: CardMovieProps) {
  return (
    <Link
      href={`/movie/${movie?.id}`}
      className="block w-full flex-shrink-0 cursor-pointer"
    >
      <div
        className="aspect-poster-movie mb-4 w-[172px] rounded-xl bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: `url(${getImageUrl(movie?.poster_path)})`,
        }}
      />
      <p className="mb-2.5 line-clamp-2 font-bold">{movie?.title}</p>
      <p className="text-sm">{formatDate(movie?.release_date)}</p>
    </Link>
  );
}

export default CardMovie;
