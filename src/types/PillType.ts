import { PillDataFormProps } from "./PillDataFormProps";

export type PillStyle = "default" | "list" | "history" | undefined;

export type PillType = {
  id?: number;
  name: string;
  quantity: string;
  unid: string;
  freq: string;
  hour: string;
  obs?: string;
  updatePill?: (id: number, newData: PillDataFormProps) => Promise<void>;
  type?: PillStyle;
  takenAt?: string;
};
