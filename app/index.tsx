import { initDB } from "@/src/config/db";
import { registerNotifications } from "@/src/services/registerNotifications";
import { useEffect } from "react";
import { Home } from "./Home";

// 👉 O ThemeProvider deve envolver o app inteiro
export default function Index() {
  useEffect(() => {
    (async () => {
      await registerNotifications();
      await initDB();
    })();
  }, []);

  return <Home />;
}
