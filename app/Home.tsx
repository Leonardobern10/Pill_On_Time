import NullPills from "@/src/components/global/NullPills/NullPills";
import PillsComponent from "@/src/components/pills/PillsComponent";
import ResumeStatistics from "@/src/components/stats/ResumeStatistics";
import { usePillsStore } from "@/src/store/pillsStore";
import { useTheme } from "@/src/theme/ThemeProvider";
import { typography } from "@/src/theme/tipography";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { headerStyle } from "../assets/styles/Home.styles";

// 👉 Componente principal que usa o tema
export const Home = () => {
  const { theme, colors, toggleTheme } = useTheme();
  const style = headerStyle(colors);
  const {
    pills,
    getPillsCount,
    loadPillsToday,
    count,
    countToday,
    countTaked,
  } = usePillsStore();

  useFocusEffect(
    useCallback(() => {
      loadPillsToday();
      getPillsCount();
    }, [])
  );

  return (
    <SafeAreaView style={style.safeArea}>
      {/* Header */}
      <View style={style.headerContainer}>
        <View>
          <Text style={typography(colors).companyName}>Pill On Time</Text>
          <Text style={typography(colors).caption}>
            Seus medicamentos em dia
          </Text>
        </View>

        <View style={style.headerContainerIcons}>
          <AntDesign
            name="bell"
            size={30}
            color={colors.paper.text}
            style={style.iconStyle}
          />
          <Pressable
            onPress={() => {
              console.log("Tema alterado: ", theme);
              toggleTheme();
            }}
          >
            <AntDesign
              name={theme === "dark" ? "moon" : "sun"}
              size={30}
              color={colors.paper.text}
              style={style.iconStyle}
            />
          </Pressable>
        </View>
      </View>

      {/* Conteúdo */}
      <ScrollView style={style.scrollStyle}>
        <ResumeStatistics
          countPills={count}
          pillsToday={countTaked}
          pillsPendents={countToday}
        />
        <View style={style.pillsGroup}>
          {pills.length === 0 || !pills ? (
            <NullPills text="Sem remédios para hoje" />
          ) : (
            pills?.map((el, index) => (
              <PillsComponent
                id={el.id}
                key={index}
                name={el.name}
                quantity={el.quantity}
                unid={el.unid}
                freq={el.freq}
                hour={el.hour}
                obs={el.obs}
                type="default"
              />
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
