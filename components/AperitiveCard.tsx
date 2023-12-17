import { IIncludedDish } from "@/server/api/event/types/event.type";
import { AlertOctagon } from "lucide-react";

interface IAperitiveCardProps {
  dish: IIncludedDish;
}

const AperitiveCard = ({ dish }: IAperitiveCardProps) => {
  return (
    <div className="w-full rounded-lg bg-secondary p-4 space-y-4">
      <p className="text-xl uppercase font-bold">{dish.name}</p>
      <p className="text-sm font-medium p-2 bg-background/50 rounded-lg">
        {dish.description}
      </p>
      {dish.allergens.length !== 0 && (
        <div className="flex gap-2 items-center">
          <AlertOctagon className="text-yellow-500" />
          <p className="font-bold text-yellow-500">ALLERGENS</p>
        </div>
      )}
      <ul className="flex gap-2">
        {dish.allergens.map((allergen, index) => (
          <li key={index} className="text-sm rounded-full bg-primary p-1">
            {allergen}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AperitiveCard;
