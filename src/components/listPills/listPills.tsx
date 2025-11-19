import { usePillsStore } from "@/src/store/pillsStore";
import { useTheme } from "@/src/theme/ThemeProvider";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { View } from "react-native";
import NullPIlls from "../global/NullPills/NullPills";
import PillsComponent from "../pills/PillsComponent";
import { listPillsStyle } from "./listPills.style";

export default function ListPills() {
  const { colors } = useTheme();
  const { filteredPills, loadPills, delPill, updatePill } = usePillsStore();

  useFocusEffect(
    useCallback(() => {
      loadPills();
    }, [])
  );
  return (
    <View style={listPillsStyle(colors).pillsGroup}>
      {!filteredPills || filteredPills.length === 0 ? (
        <NullPIlls text="Nenhum remedio encontrado" />
      ) : (
        filteredPills?.map((el) => (
          <PillsComponent
            id={el.id!}
            key={el.id}
            name={el.name}
            quantity={el.quantity}
            unid={el.unid}
            freq={el.freq}
            hour={el.hour}
            obs={el.obs}
            type="list"
            updatePill={updatePill}
          />
        ))
      )}
    </View>
  );
}
