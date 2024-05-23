import { CategoryType } from "./types";

import wine from "@/assets/images/wine-glass.png";
import beer from "@/assets/images/beer.png";

export const categories: CategoryType[] = [
  { id: 1, name: "beer", icon: beer },
  { id: 2, name: "wine", icon: wine },
];

export const formatNumber = (num: number) => {
  const integerPart = Math.floor(num / 100);
  const decimalPart = num % 100;
  return `${integerPart}.${decimalPart.toString().padStart(2, "0")}`;
};

export function createSlug(id: number, name: string) {
  const formattedName = name.toLowerCase().replace(/ /g, "-");
  return `${id}-${formattedName}`;
}
