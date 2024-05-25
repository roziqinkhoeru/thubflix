type DogImg = {
  id: string;
  width: number;
  height: number;
  url: string;
};

interface Dogs {
  bred_for: string;
  breed_group: string;
  height: { imperial: string; metric: string };
  id: number;
  life_span: string;
  name: string;
  origin?: string;
  reference_image_id: string;
  temperament: string;
  weight: { imperial: string; metric: string };
}

interface DogImages {
  id: string;
  url: string;
  breeds: Dogs[];
  width: string;
  height: string;
}

interface DogBreeds extends Dogs {
  image: DogImg;
}

interface DogFavorites {
  id: string;
  name: string;
}

export type { DogBreeds, DogFavorites, DogImages, Dogs };
