import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

export async function registerNotifications() {
  const { status } = await Notifications.requestPermissionsAsync();

  if (status !== "granted") {
    alert("Permita notificações para receber alarmes!");
    return;
  }

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "Padrão",
      importance: Notifications.AndroidImportance.MAX,
      sound: "default", // SOM PERSONALIZADO
    });
  }
}

export const dispatchAlarm = (time: string) => {
  const [hour, minute] = time.split(":").map(Number);

  return Notifications.scheduleNotificationAsync({
    content: {
      title: "Hora do remédio!",
      body: "Não esqueça de tomar sua medicação.",
      sound: true, // ✅ apenas "true" para som padrão
    },
    trigger: {
      hour,
      minute,
      repeats: true,
    },
  });
};

// Dispara uma notificação de teste após X segundos
export const dispatchTestNotification = async (seconds: number = 5) => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Teste de Notificação",
      body: "Essa notificação é só para teste!",
      sound: true, // som padrão
      priority: Notifications.AndroidNotificationPriority.MAX,
    },
    trigger: {
      trigger: new Date(Date.now() + seconds * 1000),
      repeats: false, // dispara apenas uma vez
    },
  });
};
