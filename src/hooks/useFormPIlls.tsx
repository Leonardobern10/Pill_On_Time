import { useCallback, useEffect } from "react";
import { pillSchema } from "../models/schema/PillDataSchema";
import { PillDataFormProps } from "../types/PillDataFormProps";

export const useFormPills = (
  setDataForm: (value: PillDataFormProps) => void,
  dataForm: PillDataFormProps,
  update?: boolean,
  id?: number,
  getOnePill?: (id: number) => Promise<PillDataFormProps | null>,
  updatePill?: (id: number, newData: PillDataFormProps) => Promise<void>,
  addPill?: (pill: PillDataFormProps) => Promise<void>
) => {
  // ---------- LOAD ----------
  useEffect(() => {
    if (!update || !id || !getOnePill) return;

    const load = async () => {
      const pill = await getOnePill(id);

      if (pill) {
        setDataForm({
          ...pill,
          date: pill.date ?? new Date().toISOString().split("T")[0],
        });
      }
    };

    load();
  }, [update, id, getOnePill, setDataForm]);

  // ---------- SUBMIT ----------
  const submit = useCallback(async () => {
    try {
      const validated = pillSchema.parse(dataForm);

      if (update && validated.id && updatePill) {
        await updatePill(validated.id, validated);
      } else if (addPill) {
        await addPill(validated);
      }

      // reset
      setDataForm({
        id: undefined,
        name: "",
        quantity: "",
        unid: "comprimidos",
        freq: "1x ao dia",
        hour: "00:00",
        date: new Date().toISOString().split("T")[0],
        obs: "",
      });

      return { success: true, errors: null };
    } catch (error) {
      return { success: false, errors: error };
    }
  }, [update, dataForm, updatePill, addPill, setDataForm]);

  return { submit };
};
