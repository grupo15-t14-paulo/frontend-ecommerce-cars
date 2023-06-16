import { carCreateSchema } from "../../providers/AdsProvider/interfaces";
import {z} from 'zod'

export type TRegisterAnnoucementForm = z.infer<typeof carCreateSchema>