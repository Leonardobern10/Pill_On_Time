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
