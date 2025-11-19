import { create } from "zustand";
import { addHistoryEntry } from "../services/historyService";
import {
  addPill,
  delPill,
  getAllPills,
  getPillsCount,
  getPillsForToday,
  updatePill,
} from "../services/pillService";
import { PillDataFormProps } from "../types/PillDataFormProps";
import { PillsStateType } from "../types/PillsStateType";

export const usePillsStore = create<PillsStateType>((set, get) => ({
  pills: [],
  filteredPills: [],
  count: 0,
  countToday: 0,
  countTaked: 0,

  loadPills: async () => {
    const data = await getAllPills();
    console.log(data);
    set({
      pills: data || [],
      filteredPills: data || [],
    });
  },

  loadPillsToday: async () => {
    const data = await getPillsForToday();
    console.log(data);
    console.log("Medicamentos tomados hoje: ", get().countToday);
    set({ pills: data || [], countToday: data?.length });
  },
  addPill: async (pill) => {
    await addPill(pill);
    await getPillsCount().then((count) => set({ count }));
    const updated = await getAllPills();
    set({ pills: updated || [] });
  },

  getPillsByName: async (text: string) => {
    const all = get().pills;

    if (text.length < 3) {
      // Reset
      set({ filteredPills: all });
      return;
    }

    const filtered = all.filter((pill) =>
      pill.name.toLowerCase().includes(text.toLowerCase())
    );

    set({ filteredPills: filtered });
  },

  delPill: async (id: number) => {
    await addHistoryEntry(id);
    await delPill(id);
    await getPillsCount().then((count) => set({ count }));
    const updated = await getAllPills();
    set({
      pills: updated || [],
      filteredPills: updated!,
      countTaked: get().countToday + 1,
    });
  },

  updatePill: async (id: number, newData: PillDataFormProps) => {
    await updatePill(id, newData);
    const updated = await getAllPills();
    set({ pills: updated || [], filteredPills: updated! });
  },

  getPillsCount: async () => {
    const totalCount = await getPillsCount();
    console.log(totalCount);
    set({ count: totalCount });
  },
}));
