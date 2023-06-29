import { z } from "zod";
import {
  carCreateSchema,
  returnAllCarsSchema,
} from "../../providers/AdsProvider/ads.schemas";

export type TRegisterAnnoucementForm = z.infer<typeof carCreateSchema>;
export type TReturnAnnoucement = z.infer<typeof returnAllCarsSchema>;
