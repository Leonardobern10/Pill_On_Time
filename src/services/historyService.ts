import { db } from "../config/db";
import { HistoryEntryType } from "../types/HistoryEntryType";

export const addHistoryEntry = async (pillId: number) => {
  console.log("------------ Registrando histórico -------------");

  try {
    // 1. Buscar dados da pílula
    const pill = await db.getFirstAsync<any>(
      `SELECT * FROM pills WHERE id = ?`,
      [pillId]
    );

    if (!pill) {
      console.error("❌ Pílula não encontrada para registro do histórico!");
      return;
    }

    // 2. Inserir registro completo no histórico
    await db.runAsync(
      `
      INSERT INTO history 
        (pill_id, pill_name, pill_quantity, pill_unid, pill_freq, pill_hour, pill_obs, action)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `,
      [
        pillId,
        pill.name,
        pill.quantity,
        pill.unid,
        pill.freq,
        pill.hour,
        pill.obs,
        "TAKEN",
      ]
    );

    console.log("✅ Histórico registrado com sucesso!");
  } catch (error: any) {
    console.error("❌ Erro ao registrar histórico:", error.message);
  } finally {
    console.log("------------ Fim registro histórico -------------");
  }
};

export const getHistory = async (): Promise<HistoryEntryType[]> => {
  console.log("------------ Consultando histórico -------------");

  try {
    const rows = await db.getAllAsync<HistoryEntryType>(`
      SELECT *
      FROM history
      ORDER BY taken_at DESC
    `);

    return rows;
  } catch (error: any) {
    console.error("❌ Erro ao buscar histórico:", error.message);
    return [];
  } finally {
    console.log("------------ Fim consulta histórico -------------");
  }
};
