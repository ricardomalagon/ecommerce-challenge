import products from "@/json/products";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  const data = products.find((item) => item.id === Number(slug));
  return Response.json(data);
}
