import stock_price from "@/json/stock-price";

type StockPriceKeys = keyof typeof stock_price;

export async function GET(
  request: Request,
  { params }: { params: { slug: StockPriceKeys } }
) {
  const slug = params.slug;

  const data = stock_price[slug];
  return Response.json(data);
}
