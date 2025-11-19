import { db } from "../config/db";
import { FreqMap } from "../models/FreqMap";
import { PillDataFormProps } from "../types/PillDataFormProps";

export async function addPill(pill: PillDataFormProps) {
  const { name, quantity, freq, hour, unid, obs } = pill;
  const statement = await db.prepareAsync(
    "INSERT INTO pills (name, quantity, unid, freq, hour, date, obs) VALUES ($name, $quantity, $unid, $freq, $hour, $date, $obs);"
  );

  try {
    const freqValue = FreqMap[freq]; // converte string em número
    if (!freqValue) throw new Error(`Frequência inválida: ${freq}`);

    const times = genPills(freqValue, hour);

    for (const time of times) {
      const now = new Date();
      const [h, m] = time.split(":").map(Number);

      const doseDate = new Date(now);
      doseDate.setHours(h, m, 0, 0);

      if (doseDate < now) {
        doseDate.setDate(doseDate.getDate() + 1);
      }

      const localDate = doseDate.toLocaleDateString("en-CA"); // formato YYYY-MM-DD

      const params = {
        $name: name ?? "",
        $quantity: quantity ?? 0,
        $unid: unid ?? "",
        $freq: freq ?? "",
        $hour: time,
        $date: localDate,
        $obs: obs ?? "",
      };
      await statement.executeAsync(params as any);
    }
  } catch (error) {
    console.error("Erro ao cadastrar remédio!", error);
  } finally {
    await statement.finalizeAsync();
  }
}

export async function getAllPills(): Promise<PillDataFormProps[] | null> {
  try {
    const result = await db.getAllAsync<PillDataFormProps>(
      `SELECT * FROM pills;`
    );
    return result;
  } catch (error) {
    console.error("Não foi possivel obter os registros: " + error);
    return null;
  } finally {
    console.info("Operação de consulta concluida!");
  }
}

/** */
export async function delPill(id: number): Promise<void> {
  console.log("Removendo registro...");
  try {
    await db.runAsync("DELETE FROM pills WHERE id = ?", [id]);
    console.log(`Registro id: ${id} removido com sucesso!`);
  } catch (error) {
    console.error("Erro ao deletar registro: " + error);
  }
}

export async function updatePill(
  id: number,
  newData: PillDataFormProps
): Promise<void> {
  console.log("Iniciando atualização de cadastro...");
  const { name, quantity, unid, freq, hour, obs } = newData;
  try {
    await db.runAsync(
      "UPDATE pills SET name=?, quantity=?, unid=?, freq=?, hour=?, obs=? WHERE id=?;",
      [name, quantity, unid, freq, hour, obs || "", id]
    );
    console.log(`Remédio com ID ${id} atualizado com sucesso! `);
  } catch (error) {
    console.error("Erro ao atualizar remédio: ", error);
  }
}

export async function getOnePill(
  id: number
): Promise<PillDataFormProps | null> {
  console.log(`🔍 Buscando dado de id: ${id}`);
  try {
    const pill = await db.getFirstAsync<PillDataFormProps>(
      "SELECT * FROM pills WHERE id = ?;",
      [id]
    );

    if (!pill) {
      console.warn(`⚠️ Nenhum remédio encontrado com o ID ${id}`);
      return null;
    }

    console.log("✅ Remédio encontrado:", pill);
    return pill;
  } catch (error) {
    console.error("❌ Erro ao obter medicamento:", error);
    return null;
  }
}

export function genPills(freq: number, startTime: string): string[] {
  const totalDoses = freq;
  const hoursPerDose = 24 / totalDoses;

  const [startHour, startMinute] = startTime.split(":").map(Number);
  const startMinutes = startHour * 60 + startMinute;

  const result: string[] = [];

  for (let i = 0; i < totalDoses; i++) {
    const currentMinutes = (startMinutes + i * hoursPerDose * 60) % (24 * 60);
    const hour = Math.floor(currentMinutes / 60);
    const minute = Math.round(currentMinutes % 60);
    result.push(
      `${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}`
    );
  }

  return result;
}

export async function getPillsByDate(date: string) {
  try {
    const pills = await db.getAllAsync<PillDataFormProps>(
      "SELECT * FROM pills WHERE date = ? ORDER BY hour ASC;",
      [date]
    );
    return pills;
  } catch (error) {
    console.error("Erro ao buscar remédios por data:", error);
    return [];
  }
}

export async function getPillsForToday() {
  const today = new Date();
  const localDate = today.toLocaleDateString("en-CA");
  return getPillsByDate(localDate);
}

export async function getPillsForTomorrow() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const localDate = tomorrow.toLocaleDateString("en-CA");
  return getPillsByDate(localDate);
}

export async function getPillsByName(name: string) {
  console.log("Iniciando busca por nome...");
  try {
    const result = db.getAllAsync("SELECT * FROM pills WHERE name=?;", [name]);
    console.log(result);
    return result;
  } catch (error) {
    console.error("Erro ao buscar por nome: ", error);
  } finally {
    console.log("Encerrando busca por nome...");
  }
}

export async function getPillsCount(): Promise<number> {
  try {
    const result = await db.getFirstAsync<{ count: number }>(
      "SELECT COUNT(*) as count FROM pills;"
    );
    console.log(result);
    return result?.count ?? 0;
  } catch (error) {
    console.error("Erro ao obter quantidade de remédios:", error);
    return 0;
  }
}
