import { useEffect, useState } from "react";
import { getAllPills } from "../services/pillService";
import { PillDataFormProps } from "../types/PillDataFormProps";

export const useGetAllPills = () => {
  const [listPills, setListPills] = useState<PillDataFormProps[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      try {
        const res = await getAllPills();
        console.log(res);
        setListPills(res);
      } catch (error) {
        console.error(error);
        setListPills(null);
      } finally {
        setLoading(false);
      }
    };
    get();
  }, []);

  return { listPills, loading };
};
