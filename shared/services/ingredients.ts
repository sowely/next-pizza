import { Ingredient } from "@prisma/client";
import { axiosInstance } from "./instance";
import { ENDPOINTS } from "./constants";

export const getAll = async (): Promise<Ingredient[]> => {
  return (await axiosInstance.get<Ingredient[]>(ENDPOINTS.INGREDIENTS)).data;
};
