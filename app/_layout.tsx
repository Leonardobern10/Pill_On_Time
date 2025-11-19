import TabNavigation from "@/src/components/navigation/TabNavigation";
import { ThemeProvider } from "@/src/theme/ThemeProvider";
import {
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_900Black,
  useFonts,
} from "@expo-google-fonts/montserrat";

export default function RootLayout() {
  const [loaded] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_900Black,
  });

  if (!loaded) return null;

  return (
    <ThemeProvider>
      <TabNavigation />
    </ThemeProvider>
  );
}
