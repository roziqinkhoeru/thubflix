import ButtonBack from "@/components/shared/ButtonBack";

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

const fetchDog = async (id: string) => {
  try {
    const apiKey = process.env.NEXT_PUBLIC_DOG_API_KEY;
    if (!apiKey) {
      throw new Error("API key is missing");
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DOG_API}/breeds/${id}`,
      {
        headers: {
          "x-api-key": apiKey,
        },
      },
    );

    const data: Dogs = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch dog");
  }
};

async function page({ params }: { params: { id: string } }) {
  const dogs = await fetchDog(params.id);

  return (
    <main className="container mx-auto mt-10 max-w-7xl px-6">
      <div className="my-12">
        <div className="mb-6">
          <ButtonBack />
        </div>
        <div>{dogs.name}</div>
        <div>{dogs.breed_group}</div>
        <div>{dogs.temperament}</div>
        <div>{dogs.bred_for}</div>
      </div>
    </main>
  );
}

export default page;
