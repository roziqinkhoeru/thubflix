"use client";

import ButtonBack from "@/components/shared/ButtonBack";
import { DogFavorites } from "@/types";
import { useEffect, useState } from "react";

function Favourite() {
  const [favorite, setFavorite] = useState<DogFavorites[]>([]);

  const fetchFavorite = async () => {
    try {
      const apiKey = process.env.NEXT_PUBLIC_DOG_API_KEY;
      if (!apiKey) {
        throw new Error("API key is missing");
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DOG_API}/favourites`,
        {
          headers: {
            "x-api-key": apiKey,
          },
        },
      );
      const data = await response.json();
      setFavorite(data);
    } catch (error) {
      throw new Error("Failed to fetch favourite");
    }
  };

  useEffect(() => {
    fetchFavorite();
  }, []);

  return (
    <main className="container mx-auto mt-10 min-h-svh max-w-7xl px-6">
      <section className="my-12">
        <div className="mb-10">
          <ButtonBack />
          {favorite.length === 0 ? (
            <div className="flex items-center justify-center">
              <p className="text-lg font-semibold">No favourite yet</p>
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-5 sm:grid-cols-12">
              {favorite?.map((dogFav) => (
                <div
                  className="col-span-full xs:col-span-2 sm:col-span-6 md:col-span-4 lg:col-span-3"
                  key={dogFav?.id}
                >
                  <p className="">{dogFav?.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Favourite;
