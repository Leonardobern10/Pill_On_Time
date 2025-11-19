import { View } from "react-native";
import { resumeStatsData } from "../../data/resumeStatsData";
import Resume from "./Resume";
import { resumeStatsStyle } from "./ResumeStatistics.styles";

export default function ResumeStatistics({
  countPills,
  pillsToday,
  pillsPendents,
  sequency,
}: {
  countPills?: number;
  pillsToday?: number;
  pillsPendents?: number;
  sequency?: number;
}) {
  return (
    <View style={resumeStatsStyle.container}>
      {resumeStatsData(countPills, pillsToday, pillsPendents, sequency).map(
        (item) => (
          <Resume
            key={item.index}
            index={item.index}
            title={item.title}
            value={item.value}
            icon={item.icon}
            colorIcon={item.colorIcon}
            desc={item.desc}
          />
        )
      )}
    </View>
  );
}
