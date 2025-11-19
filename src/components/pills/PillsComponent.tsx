import { useTheme } from "@/src/theme/ThemeProvider";
import { typography } from "@/src/theme/tipography";
import { PillType } from "@/src/types/PillType";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import ButtonDefault from "../global/ButtonDefault/ButtonDefault";

import FormPills from "../global/FormPills/FormPills";
import { PillsComponenteStyle } from "./PillsComponent.style";
import { usePillsActions } from "./usePillsActions";

export default function PillsComponent({
  id,
  name,
  quantity,
  unid,
  freq,
  hour,
  obs,
  type,
  takenAt,
}: PillType) {
  const [took, setTook] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { colors } = useTheme();
  const style = PillsComponenteStyle(colors, type);
  const { handleComplete, delPill } = usePillsActions();
  return (
    <View style={style.viewContainer}>
      {/* Cabeçalho para remover ou editar na lista */}
      {type === "list" && (
        <View style={style.headerOptions}>
          <TouchableOpacity style={style.button} onPress={() => delPill(id!)}>
            <MaterialCommunityIcons
              name="delete-outline"
              size={30}
              color={colors.paper.text}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={style.button}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <MaterialCommunityIcons
              name="pencil-box-outline"
              size={30}
              color={colors.paper.text}
            />
          </TouchableOpacity>
        </View>
      )}
      {/** Corpo do registro */}
      <View>
        <Text style={typography(colors).heading2}>{name}</Text>
      </View>
      <View style={style.bodyContainer}>
        <View style={style.flexStartView}>
          <FontAwesome5
            name="pills"
            size={17}
            color={`${colors.primary.background}`}
          />
          <Text style={typography(colors).body2}>{quantity + " " + unid}</Text>
        </View>
        <View style={style.flexStartView}>
          <FontAwesome5
            name="clock"
            size={17}
            color={`${colors.primary.background}`}
          />
          <View style={style.flexRowBetweenView}>
            <Text style={typography(colors).body2}>
              {type === "history" ? "Programado para: " : "Próxima dose: "}
            </Text>
            <Text style={typography(colors).heading1}>{hour}</Text>
          </View>
        </View>
      </View>
      {type === "history" && (
        <View>
          <Text style={typography(colors).body2}>Tomado em:</Text>
          <Text style={typography(colors).heading2}>
            {takenAt ? new Date(takenAt).toLocaleString() : ""}
          </Text>
        </View>
      )}
      <View style={style.isHistory}>
        <Text style={[typography(colors).body2, style.takedText]}>
          {type === "history" ? "Tomado" : freq}
        </Text>
      </View>
      {obs && (
        <View style={style.obsView}>
          <Text style={typography(colors).body2}>{obs}</Text>
        </View>
      )}
      {!type ||
        (type === "default" && (
          <View>
            <ButtonDefault
              textDefault="Tomar remédio"
              textPressed="Desfazer"
              setStatus={setTook}
              press={took}
              onComplete={() => handleComplete(id)}
            />
          </View>
        ))}
      {type === "list" && (
        <Modal
          animationType="fade"
          visible={modalVisible}
          backdropColor={colors.paper.background}
          onRequestClose={() => setModalVisible(!modalVisible)}
        >
          <View style={style.modal}>
            <View style={style.modalContent}>
              <FormPills
                update={true} // 👈 indica modo de atualização
                id={id!} // 👈 envia o id real para o update
                name={name}
                quantity={quantity}
                unid={unid}
                freq={freq}
                hour={hour}
                obs={obs}
              />
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}
