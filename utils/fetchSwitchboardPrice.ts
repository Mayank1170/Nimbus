import { SymbolType, priceIds } from "../constants";
import { FetchPriceResponse, SwitchboardResponse } from "../types";

export async function fetchSwitchboardPrice(symbol: string): Promise<FetchPriceResponse> {
  const switchboardId = priceIds[symbol as SymbolType]?.switchboard;

  if (!switchboardId) {
    throw new Error(`Unsupported symbol: ${symbol}`);
  }

  try {
    const response = await fetch(
      `https://crossbar.switchboard.xyz/simulate/${switchboardId}`,
      { method: "GET" }
    );

    if (!response.ok) {
      console.error(`Network response was not ok: ${response.statusText}, Status Code: ${response.status}`);
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data: SwitchboardResponse[] = await response.json();

    console.log('Switchboard API response:', data); // Log the API response

    if (!data || !data[0].results || !data[0].results[0]) {
      return undefined;
    }

    return Number(data[0].results[0]);
  } catch (error: any) {
    console.error(`Failed to fetch Switchboard price for ${symbol}:`, error);
    return undefined;
  }
}
