export type FetchPriceResponse = number | undefined;

export interface SwitchboardResponse {
  results: string[];
}

export interface PythResponse {
  id: string;
  price: {
    [x: string]: any;
    price: string;
  };
}
