import { lightTheme } from "../theme/theme";
import { ResumeProps } from "../types/ResumeProps";

export const resumeStatsData = (
  countPills?: number,
  pillsToday?: number,
  pillsPendents?: number,
  sequency?: number
): ResumeProps[] => [
  {
    index: "001",
    title: "Medicamentos",
    value: countPills ? countPills : 0,
    icon: "pills",
    colorIcon: `${lightTheme.primary.background}`,
    desc: "Total",
  },
  {
    index: "002",
    title: "Hoje",
    value: pillsToday ? pillsToday : 0,
    icon: "check",
    colorIcon: `${lightTheme.success.background}`,
    desc: "Tomados",
  },
  {
    index: "003",
    title: "Pendentes",
    value: pillsPendents ? pillsPendents : 0,
    icon: "alert",
    colorIcon: `${lightTheme.alert.text}`,
    desc: "Hoje",
  },
  {
    index: "004",
    title: "Sequência",
    value: sequency ? sequency : 0,
    icon: "calendar",
    colorIcon: `${lightTheme.secondary.background}`,
    desc: "Dias",
  },
];
