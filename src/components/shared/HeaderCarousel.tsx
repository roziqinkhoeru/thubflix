"use client";

import { getImageUrl } from "@/lib/getImageUrl";
import { HeaderCarouselProps } from "@/types";
import AutoPlay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

function HeaderCarousel({ movies }: HeaderCarouselProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [AutoPlay()]);

  return (
    <div
      className="-mt-18 relative cursor-pointer overflow-hidden"
      ref={emblaRef}
    >
      <div className="flex">
        {movies.map((movie) => (
          <div key={movie?.id} className="relative min-w-0 flex-full">
            <div
              className="h-[580px] w-full bg-cover bg-top bg-no-repeat"
              style={{
                backgroundImage: `url(${getImageUrl(movie?.backdrop_path, true)})`,
              }}
            />
            <div className="absolute left-0 top-0 z-20 hidden h-full w-full space-y-5 bg-transparent bg-gradient-to-r from-slate-900/90 via-transparent to-transparent p-10 pt-40 text-white lg:inline xl:pt-64">
              <h2 className="max-w-xl text-5xl font-bold">{movie?.title}</h2>
              <p className="line-clamp-3 max-w-xl">{movie?.overview}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 left-0 top-0 bg-gradient-to-b from-slate-900/10 via-slate-900/30 to-slate-300/70 dark:to-slate-950" />
    </div>
  );
}

export default HeaderCarousel;
