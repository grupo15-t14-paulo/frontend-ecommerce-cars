import { z } from "zod";

export const imageCreateSchema = z.object({
  urlImage: z.string().min(1).max(255),
});

export const imageReturnSchema = imageCreateSchema.extend({
  id: z.string().uuid(),
});

export const carCreateSchema = z.object({
  brand: z.string().min(1).max(100),
  model: z.string().min(1).max(100),
  year: z.string(),
  typeCar: z.string(),
  mileage: z.string(),
  color: z.string().min(1).max(100),
  fipePrice: z.string(),
  price: z.string(),
  description: z.string().optional().nullable(),
  imageCover: z.string().min(1).max(250),
  isAvailable: z.boolean().optional().nullable(),
  images: imageCreateSchema.array(),
});

export const returnCarSchema = carCreateSchema.extend({
  id: z.string().uuid(),
  createdAt: z.string(),
});

export const returnAllCarsSchema = returnCarSchema.array();

export const carUpdateSchema = carCreateSchema.omit({ images: true }).partial();
