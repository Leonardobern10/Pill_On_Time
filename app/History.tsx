import { historyStyle } from "@/assets/styles/History.styles";
import NullPIlls from "@/src/components/global/NullPills/NullPills";
import PillsComponentHistory from "@/src/components/history/PillsComponenteHistory";
import { getHistory } from "@/src/services/historyService";
import { useTheme } from "@/src/theme/ThemeProvider";
import { HistoryEntryType } from "@/src/types/HistoryEntryType";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function History({ navigation }: any) {
  const { colors } = useTheme();
  const [history, setHistory] = useState<HistoryEntryType[] | null>(null);
  const styleCustom = historyStyle(colors);

  const get = useCallback(async () => {
    const data = await getHistory();
    setHistory(data);
  }, []);

  useFocusEffect(
    useCallback(() => {
      get();
    }, [])
  );

  return (
    <SafeAreaView style={styleCustom.safeArea}>
      {!history || history.length === 0 ? (
        <NullPIlls text="Nenhum remédio tomado" />
      ) : (
        <ScrollView style={styleCustom.scrollView}>
          <View style={styleCustom.view}>
            {history.map((el) => (
              <PillsComponentHistory
                key={el.id}
                name={el.pill_name}
                quantity={el.pill_quantity}
                unid={el.pill_unid}
                hour={el.pill_hour}
                takenAt={el.taken_at}
              />
            ))}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
