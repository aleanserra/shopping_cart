import { useQuery } from "react-query";
import { Product } from "../../interfaces/products.interface";
import { api } from "../api";

export async function getProducts(): Promise<Product[]> {
  const { data } = await api.get("products");
  return data.products;
}

export function useProducts() {
  return useQuery("products", getProducts, {
    staleTime: 1000 * 5, //5 seconds
  });
}
