import Input from "@/src/components/global/InputString/Input";
import ListPills from "@/src/components/listPills/listPills";
import { usePillsStore } from "@/src/store/pillsStore";
import { useTheme } from "@/src/theme/ThemeProvider";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PillsStyle } from "../assets/styles/Pills.style";

export default function Pills({ navigation }: any) {
  const [searchText, setSearchText] = useState<string>("");
  const { getPillsByName } = usePillsStore();
  const { colors } = useTheme();
  const pillStyle = PillsStyle(colors);

  function handleSearch(value: string) {
    setSearchText(value);
    getPillsByName(value);
  }

  return (
    <SafeAreaView style={pillStyle.safeAreaStyle}>
      <View style={pillStyle.containerInputStyle}>
        <Input
          value={searchText}
          onChangeText={handleSearch}
          label="Pesquisar"
          placeholder="Digite o nome do remédio"
        />
      </View>
      <ScrollView style={pillStyle.scrollStyle}>
        <ListPills />
      </ScrollView>
    </SafeAreaView>
  );
}
