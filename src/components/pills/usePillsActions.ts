import { usePillsStore } from "@/src/store/pillsStore";

export const usePillsActions = () => {
  const { delPill, loadPillsToday } = usePillsStore();

  const handleComplete = async (id: number | undefined) => {
    if (!id) return;
    await delPill(id);
    await loadPillsToday();
  };

  return { handleComplete, delPill };
};
