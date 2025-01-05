import { Product } from "@prisma/client"
import { axiosInstance } from "./instance"
import { ENDPOINTS } from "./constants";

export const search = async (query: string): Promise<Product[]> => {
    return (await axiosInstance.get<Product[]>(ENDPOINTS.SEARCH_PRODUCTS, { params: { query } })).data;
}