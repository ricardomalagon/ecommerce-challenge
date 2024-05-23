import instance from "@/lib/instance";
import { ProductType, PriceStock } from "@/lib/types";

export function getProducts(): Promise<{ data: ProductType[] }> {
  return instance.get("products");
}

export function getStockPrice(sku: number): Promise<{ data: PriceStock }> {
  return instance.get(`stock-price/${sku}`);
}

export function getProduct(id: number): Promise<{ data: ProductType }> {
  return instance.get(`products/${id}`);
}
