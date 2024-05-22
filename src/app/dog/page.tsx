"use client";

import ButtonBack from "@/components/shared/ButtonBack";
import ItemCard from "@/components/shared/ItemCard";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface Dogs {
  bred_for: string;
  breed_group: string;
  height: { imperial: string; metric: string };
  id: number;
  image: {
    id: string;
    width: number;
    height: number;
    url: string;
  };
  life_span: string;
  name: string;
  origin: string;
  reference_image_id: string;
  temperament: string;
  weight: { imperial: string; metric: string };
}

function Dog() {
  const [dogs, setDogs] = useState<Dogs[]>([]);
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
      console.log("🚀 ~ fetchDog ~ data:", data);
      setDogs(data);
    } catch (error) {
      console.error("🚀 ~ fetchDog ~ error", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDog();
  }, [reqLimit]);

  return (
    <main className="container mx-auto mt-10 max-w-7xl px-6">
      <section className="my-12">
        <div className="mb-10">
          <ButtonBack />
        </div>
        <div className="mb-10 grid grid-cols-4 gap-5 sm:grid-cols-12">
          {isLoading && dogs.length === 0 && (
            <div className="col-span-2 flex items-center justify-center sm:col-span-12">
              <p className="text-lg font-semibold">Loading...</p>
            </div>
          )}
          {dogs?.map((dog) => (
            <div className="col-span-4 lg:col-span-3" key={dog?.id}>
              <ItemCard
                id={dog?.id.toString()}
                name={dog?.name}
                bredFor={dog?.bred_for ?? "-"}
                imageUrl={dog?.image?.url}
                temper={dog?.temperament}
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
