import ButtonBack from "@/components/shared/ButtonBack";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DogImages, Dogs } from "@/types";
import { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const id = params.id;

  const dogs = await fetchDog(id);

  return {
    title: dogs.name,
  };
}

const fetchDog = async (id: string) => {
  try {
    const apiKey = process.env.NEXT_PUBLIC_DOG_API_KEY;
    if (!apiKey) {
      throw new Error("API key is missing");
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DOG_API}/breeds/${id}`,
    );

    const data: Dogs = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch dog");
  }
};

const fetchDogImage = async (imageId: string) => {
  try {
    const apiKey = process.env.NEXT_PUBLIC_DOG_API_KEY;
    if (!apiKey) {
      throw new Error("API key is missing");
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DOG_API}/images/${imageId}`,
    );

    const data: DogImages = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch dog");
  }
};

async function page({ params }: { params: { id: string } }) {
  const dogs = await fetchDog(params.id);
  const dogImage = await fetchDogImage(dogs.reference_image_id);
  const listOfBreedGroup =
    dogs.breed_group !== "" ? dogs.breed_group?.split(",") : null;
  const listOfBreedFor =
    dogs.bred_for !== "" ? dogs.bred_for?.split(",") : null;
  const listOfTemperament =
    dogs.temperament !== "" ? dogs.temperament?.split(",") : null;
  const listOfOrigin = dogs.origin !== "" ? dogs.origin?.split(",") : null;

  return (
    <main className="container mx-auto mt-10 max-w-7xl px-6">
      <div className="my-12">
        <div className="mb-6">
          <ButtonBack />
        </div>
        <figure className="w-52">
          <Image
            src={dogImage.url}
            alt={dogs.name}
            width={200}
            height={200}
            className="mb-6 block h-auto w-full rounded-md"
          />
        </figure>
        <div className="mb-4 grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            placeholder="Name"
            value={dogs.name}
            readOnly
          />
        </div>
        <div className="mb-4 grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="breedGroup">Breed Group</Label>
          <div className="mt-1 flex flex-wrap items-center gap-1.5">
            {listOfBreedGroup
              ? listOfBreedGroup?.map((breedGroup, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-slate-700"
                  >
                    {breedGroup}
                  </Badge>
                ))
              : "-"}
          </div>
        </div>
        <div className="mb-4 grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="breedFor">Breed For</Label>
          <div className="mt-1 flex flex-wrap items-center gap-1.5">
            {listOfBreedFor
              ? listOfBreedFor?.map((breedFor, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-slate-700"
                  >
                    {breedFor}
                  </Badge>
                ))
              : "-"}
          </div>
        </div>
        <div className="mb-4 grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="temper">Temperament</Label>
          <div className="mt-1 flex flex-wrap items-center gap-1.5">
            {listOfTemperament
              ? listOfTemperament?.map((temper, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-slate-700"
                  >
                    {temper}
                  </Badge>
                ))
              : "-"}
          </div>
        </div>
        <div className="mb-4 grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="origin">Origin</Label>
          <div className="mt-1 flex flex-wrap items-center gap-1.5">
            {listOfOrigin
              ? listOfOrigin?.map((original, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-slate-700"
                  >
                    {original}
                  </Badge>
                ))
              : "-"}
          </div>
        </div>
        <div className="mb-4 grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="lifeSpan">Life Span</Label>
          <Input
            type="text"
            id="lifeSpan"
            placeholder="Life Span"
            value={dogs.life_span}
            readOnly
          />
        </div>
        <div className="mb-4 grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="weight">Weight</Label>
          <Input
            type="text"
            id="weightImperials"
            placeholder="Weight Imperials"
            value={`${dogs.weight.imperial} (imperials)`}
            readOnly
          />
          <Input
            type="text"
            id="weightMetric"
            placeholder="Weight Metric"
            value={`${dogs.weight.metric} (metric)`}
            readOnly
          />
        </div>
        <div className="mb-4 grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="height">Height</Label>
          <Input
            type="text"
            id="heightImperial"
            placeholder="Height Imperial"
            value={`${dogs.height.imperial} (imperial)`}
            readOnly
          />
          <Input
            type="text"
            id="heightMetric"
            placeholder="Height Metric"
            value={`${dogs.height.metric} (metric)`}
            readOnly
          />
        </div>
      </div>
    </main>
  );
}

export default page;
