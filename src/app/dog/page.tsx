"use client";

import ButtonBack from "@/components/shared/ButtonBack";
import ItemCard from "@/components/shared/ItemCard";
import { Button } from "@/components/ui/button";
import { DogBreeds } from "@/types";
import { useEffect, useState } from "react";

function Dog() {
  const [dogs, setDogs] = useState<DogBreeds[]>([]);
  const [reqLimit, setReqLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchDog = async () => {
    setIsLoading(true);
    try {
      const apiKey = process.env.NEXT_PUBLIC_DOG_API_KEY;
      if (!apiKey) {
        throw new Error("API key is missing");
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DOG_API}/breeds?limit=${reqLimit}`,
        {
          headers: {
            "x-api-key": apiKey,
          },
        },
      );

      const data = await response.json();
      setDogs(data);
    } catch (error) {
      throw new Error("Failed to fetch dog");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDog();
  }, [reqLimit]);

  return (
    <main className="container mx-auto mt-10 min-h-svh max-w-7xl px-6">
      <section className="my-12">
        <div className="mb-10">
          <ButtonBack />
        </div>
        <div className="mb-10 grid grid-cols-4 gap-5 sm:grid-cols-12">
          {isLoading && dogs.length === 0 && (
            <div className="col-span-full flex items-center justify-center">
              <p className="text-lg font-semibold">Loading...</p>
            </div>
          )}
          {dogs?.map((dog) => (
            <div
              className="col-span-full xs:col-span-2 sm:col-span-6 md:col-span-4 lg:col-span-3"
              key={dog?.id}
            >
              <ItemCard
                id={dog?.id.toString()}
                name={dog?.name}
                bredFor={dog?.bred_for ?? "-"}
                imageUrl={dog?.image?.url}
                origin={dog?.origin ?? ""}
                breedGroup={dog?.breed_group ?? "-"}
              />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Button
            onClick={() => setReqLimit((prev) => prev + 10)}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Load more"}
          </Button>
        </div>
      </section>
    </main>
  );
}

export default Dog;
