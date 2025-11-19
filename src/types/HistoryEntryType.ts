export type HistoryEntryType = {
  id: number;
  pill_id: number | null;
  pill_name: string;
  pill_quantity: string;
  pill_unid: string;
  pill_freq: string;
  pill_hour: string;
  pill_obs?: string;
  action: string;
  taken_at: string;
};
