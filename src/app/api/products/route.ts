import products from "@/json/products";

export async function GET() {
  const data = products;
  return Response.json(data);
}
