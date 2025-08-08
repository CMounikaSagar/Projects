import {z} from 'zod';
import { is } from 'zod/v4/locales';

// Primitive data type

const stringSchema = z.string();
const numberSchema = z.number();
const booleanSchema = z.boolean();
const dateSchema = z.date();
const bigintSchema = z.bigint();
const undefinedSchema = z.undefined();
const nullSchema = z.null();

const objectSchema = z.object({
    name: z.string(),
    age: z.number().int().positive(),
    isActive: z.boolean().default(true),
    createdAt: z.date().optional(),
});