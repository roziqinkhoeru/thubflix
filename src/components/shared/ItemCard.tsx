import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface ItemCardProps {
  name: string;
  imageUrl: string;
  bredFor: string;
  temper: string;
  breedGroup: string;
}

function ItemCard({
  name,
  imageUrl,
  bredFor,
  temper,
  breedGroup,
}: ItemCardProps) {
  const listOfTemper = temper?.split(",");

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>
          <span className="font-semibold">Breed :</span> {breedGroup}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-3">
          <Image
            quality={95}
            src={imageUrl}
            alt={`Cat ${name}`}
            width={200}
            height={200}
            className="h-auto w-full rounded-lg"
          />
        </div>
        <p className="mb-3 text-sm text-slate-600">
          <span className="font-semibold">Bred For :</span> {bredFor}
        </p>
        <p className="mb-3 text-sm font-semibold text-slate-600">Temper :</p>
        <div className="flex flex-wrap items-center gap-2">
          {listOfTemper?.map((temperament, index) => (
            <Badge key={index} variant="outline" className="text-slate-700">
              {temperament}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
}

export default ItemCard;
