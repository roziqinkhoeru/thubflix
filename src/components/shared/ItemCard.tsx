import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface ItemCardProps {
  id: string;
  name: string;
  imageUrl: string;
  bredFor: string;
  origin: string;
  breedGroup: string;
}

function ItemCard({
  id,
  name,
  imageUrl,
  bredFor,
  origin,
  breedGroup,
}: ItemCardProps) {
  const listOfOrigin = origin !== "" ? origin?.split(",") : null;

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <CardTitle className="line-clamp-2 text-xl">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-3.5">
          <figure className="h-40 w-full overflow-hidden rounded-md">
            <Image
              quality={95}
              src={imageUrl}
              alt={`Cat ${name}`}
              width={200}
              height={200}
              className="h-full w-full object-cover object-top"
            />
          </figure>
        </div>
        <div className="mb-2 flex flex-wrap items-center gap-2">
          {listOfOrigin &&
            listOfOrigin?.map((original, index) => (
              <Badge key={index} variant="outline" className="text-slate-700">
                {original}
              </Badge>
            ))}
        </div>
        <p className="mb-2 text-sm text-slate-600">
          <span className="font-semibold">Bred For :</span> {bredFor}
        </p>
        <p className="text-sm text-slate-600">
          <span className="font-semibold">Breed :</span> {breedGroup}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button asChild>
          <Link href={`/dog/${id}`} className="w-full">
            View more
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ItemCard;
