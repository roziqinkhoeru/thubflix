"use client";

import ItemCard from "@/components/shared/ItemCard";
import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import * as React from "react";

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

export default function Home() {
  const [dogs, setDogs] = React.useState<Dogs[]>([]);
  const [reqLimit, setReqLimit] = React.useState<number>(10);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const fetchDog = async () => {
    setIsLoading(true);
    try {
      const apiKey = process.env.NEXT_PUBLIC_DOG_API_KEY;
      if (!apiKey) {
        throw new Error("API key is missing");
      }

      const response = await fetch(
        `https://api.thedogapi.com/v1/breeds?limit=${reqLimit}`,
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

  React.useEffect(() => {
    fetchDog();
  }, [reqLimit]);

  return (
    <>
      <Navbar />
      <main className="container mx-auto mt-10 max-w-7xl px-6">
        <section className="mx-auto mb-12 w-full">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Create project</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Name of your project" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="framework">Framework</Label>
                    <Select>
                      <SelectTrigger id="framework">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="next">Next.js</SelectItem>
                        <SelectItem value="sveltekit">SvelteKit</SelectItem>
                        <SelectItem value="astro">Astro</SelectItem>
                        <SelectItem value="nuxt">Nuxt.js</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Deploy</Button>
            </CardFooter>
          </Card>
        </section>
        <section className="my-12">
          <div className="mb-10 grid grid-cols-12 gap-5">
            {isLoading && dogs.length === 0 && (
              <div className="col-span-12 flex items-center justify-center">
                <p className="text-lg font-semibold">Loading...</p>
              </div>
            )}
            {dogs?.map((dog) => (
              <div className="col-span-3" key={dog?.id}>
                <ItemCard
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
    </>
  );
}
