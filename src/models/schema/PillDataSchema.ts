import { z } from "zod";
// opcional: importe seus dados reais para validar unidades / frequências
// import { commonUnits } from "@/src/data/commomUnitsForPills";
// import { selectItems } from "@/src/data/selectFreqData";

// se preferir usar os arrays reais, descomente as importações acima e construa allowedUnits/allowedFreqs dinâmicamente:
// const allowedUnits = commonUnits.map(u => u.title);
// const allowedFreqs = selectItems.map(s => typeof s === 'string' ? s : s.title);

// Exemplo fallback (caso não queira importar agora)
const allowedUnits = [
  "litros (Lt)",
  "mililitros (mL)",
  "comprimidos",
  "gramas (g)",
  "miligramas (mg)",
];

const allowedFreqs = [
  "1x ao dia",
  "2x ao dia",
  "3x ao dia",
  "a cada 8 horas",
  // adicione conforme seu selectItems
];

export const pillSchema = z.object({
  id: z.number().int().positive().optional(),

  name: z
    .string()
    .min(1, { message: "Nome é obrigatório" })
    .max(120, { message: "Nome muito longo" })
    .trim(),

  // quantidade como string (porque você usa input text), mas validador garante número positivo
  quantity: z
    .string()
    .min(1, { message: "Quantidade é obrigatória" })
    .refine(
      (val) => {
        const n = Number(val.replace(",", "."));
        return !Number.isNaN(n) && n > 0;
      },
      { message: "Quantidade deve ser um número maior que zero" }
    ),

  // unidade obrigatória e deve ser uma das permitidas
  unid: z
    .string()
    .min(1, { message: "Unidade é obrigatória" })
    .refine((v) => allowedUnits.includes(v), {
      message: "Unidade inválida",
    }),

  // frequência obrigatória e opcionalmente valida contra valores permitidos
  freq: z
    .string()
    .min(1, { message: "Frequência é obrigatória" })
    .refine((v) => allowedFreqs.includes(v), {
      message: "Frequência inválida",
    }),

  // hora no formato HH:MM (00:00 - 23:59)
  hour: z.string(),

  // data no formato ISO YYYY-MM-DD
  date: z.string(), // ← obrigatório

  obs: z
    .string()
    .max(500, { message: "Observação muito longa (máx 500 caracteres)" })
    .optional(),
});

// tipo TypeScript inferido
export type PillFormType = z.infer<typeof pillSchema>;
