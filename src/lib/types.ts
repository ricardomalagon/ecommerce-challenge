export type CategoryType = {
  id: number;
  name: string;
  icon?: any;
};

export type SkuTypes = {
  code: string;
  name: string;
};

export type PriceStock = {
  stock: number;
  price: number;
};

export type ProductType = {
  id: number;
  brand: string;
  image: string;
  style: string;
  substyle: string;
  abv: string;
  origin: string;
  information: string;
  skus: SkuTypes[];
};
