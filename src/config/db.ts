import * as SQLite from "expo-sqlite";

// Abre o banco de dados (modo assíncrono)
export const db = SQLite.openDatabaseSync("pillontime.db");

export const createTable = async (): Promise<void> => {
  try {
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS pills (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        quantity TEXT NOT NULL,
        unid TEXT NOT NULL,
        freq TEXT NOT NULL,
        hour TEXT NOT NULL,
        date TEXT NOT NULL,
        obs TEXT,
        created_at TEXT DEFAULT (DATE('now'))
      );
    `);
    console.log("✅ Tabela criada com sucesso!");
  } catch (error: any) {
    console.error("❌ Erro ao criar tabela:", error.message);
  }
};

export const createHistoryTable = async () => {
  try {
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS history (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        pill_id INTEGER,
        pill_name TEXT,
        pill_quantity TEXT,
        pill_unid TEXT,
        pill_freq TEXT,
        pill_hour TEXT,
        pill_obs TEXT,
        action TEXT NOT NULL,
        taken_at TEXT DEFAULT (DATETIME('now', 'localtime'))
      );
    `);
    console.log("✅ Tabela de histórico criada com sucesso!");
  } catch (error: any) {
    console.error("❌ Erro ao criar tabela de histórico:", error.message);
  }
};

export const initDB = async () => {
  await createTable();
  await createHistoryTable();
  console.log("✅ Banco pronto para uso");
};
