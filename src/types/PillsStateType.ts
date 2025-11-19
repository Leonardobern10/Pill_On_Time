import { PillDataFormProps } from "./PillDataFormProps";

export type PillsStateType = {
  pills: PillDataFormProps[];
  filteredPills: PillDataFormProps[];
  count: number;
  countToday: number;
  countTaked: number;
  loadPills: () => Promise<void>;
  loadPillsToday: () => Promise<void>;
  addPill: (pill: PillDataFormProps) => Promise<void>;
  delPill: (id: number) => Promise<void>;
  getPillsByName: (name: string) => Promise<void>;
  getPillsCount: () => Promise<void>;
  updatePill: (id: number, newData: PillDataFormProps) => Promise<void>;
};
