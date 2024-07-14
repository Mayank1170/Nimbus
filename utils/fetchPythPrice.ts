import { SymbolType, priceIds } from "../constants";
import { FetchPriceResponse, PythResponse } from "../types";

export async function fetchPythPrice(symbol: string): Promise<FetchPriceResponse> {
  const pythId = priceIds[symbol as SymbolType]?.pyth;

  if (!pythId) {
    throw new Error(`Unsupported symbol: ${symbol}`);
  }

  try {
    const response = await fetch(
      `https://hermes.pyth.network/api/latest_price_feeds?ids[]=${pythId}`,
      { method: "GET" }
    );
    const data: PythResponse[] = await response.json();
    console.log('Pyth API response:', data); 

    if (!data || !data[0] || !data[0].price) {
      return undefined;
    }

    const price = Number(data[0].price.price);
    const expo = data[0].price.expo;
    const scaledPrice = price * Math.pow(10, expo); // Adjust price using the expo value

    return scaledPrice;
  } catch (error: any) {
    console.error(`Failed to fetch Pyth price for ${symbol}:`, error);
    return undefined;
  }
}
