import { commonUnits } from "@/src/data/commomUnitsForPills";
import { selectItems } from "@/src/data/selectFreqData";
import { useFormPills } from "@/src/hooks/useFormPIlls";
import { generateHours } from "@/src/services/generateHours";
import { getOnePill } from "@/src/services/pillService";
import { usePillsStore } from "@/src/store/pillsStore";
import { useTheme } from "@/src/theme/ThemeProvider";
import { InitDataFormType } from "@/src/types/InitDataFormType";
import { PillDataFormProps } from "@/src/types/PillDataFormProps";
import { useState } from "react";
import { Alert, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ZodError } from "zod";
import ButtonDefault from "../ButtonDefault/ButtonDefault";
import Input from "../InputString/Input";
import Select from "../Select/Select";
import { formPillsStyle } from "./FormPills.styles";

export default function FormPills({
  id,
  name,
  quantity,
  unid,
  freq,
  hour,
  obs,
  update,
}: InitDataFormType) {
  const { colors } = useTheme(); // Obtém as cores do tema
  const { addPill, updatePill } = usePillsStore();
  const style = formPillsStyle(colors);

  const [dataForm, setDataForm] = useState<PillDataFormProps>({
    id: id ? id : undefined,
    name: name ? name : "",
    quantity: quantity ? quantity : "",
    unid: unid ? unid : "comprimidos",
    freq: freq ? freq : "1x ao dia",
    hour: hour ? hour : "00:00",
    date: new Date().toLocaleDateString("en-CA"),
    obs: obs ? obs : "",
  });

  const { submit } = useFormPills(
    setDataForm,
    dataForm,
    update,
    id,
    getOnePill,
    updatePill,
    addPill
  );

  const handleSave = async () => {
    const { success, errors } = await submit();

    if (errors) {
      Alert.alert(
        "Erro ao realizar cadastro",
        (errors as ZodError).issues[0].message
      );
    }

    if (success && !errors) {
      Alert.alert("Operação concluida", "Cadastro realizado com sucesso!");
    }
  };

  return (
    <SafeAreaView style={style.safeArea}>
      <ScrollView style={style.scroll}>
        <View style={style.container}>
          <Input
            onChangeText={(value: string) =>
              setDataForm({ ...dataForm, name: value })
            }
            value={dataForm.name}
            placeholder="Ex. Losartana Potássica"
            label="Nome do medicamento"
          />
          <View style={style.midleSection}>
            <Input
              onChangeText={(value: string) =>
                setDataForm({ ...dataForm, quantity: value })
              }
              value={dataForm.quantity}
              placeholder="0"
              label="Dosagem"
              width="35%"
              keyboardType="number-pad"
            />
            <Select
              label="Unid."
              selectData={commonUnits}
              selectValue={dataForm.unid}
              setSelectValue={(value: string) =>
                setDataForm({ ...dataForm, unid: value })
              }
              width="60%"
            />
          </View>
          <Select
            label="Frequência"
            selectData={selectItems}
            selectValue={dataForm.freq}
            setSelectValue={(value: string) =>
              setDataForm({ ...dataForm, freq: value })
            }
          />
          <Select
            label="Horas"
            selectData={generateHours(0, 23)}
            selectValue={dataForm.hour}
            setSelectValue={(value: string) =>
              setDataForm({ ...dataForm, hour: value })
            }
          />
          <Input
            onChangeText={(value: string) =>
              setDataForm({ ...dataForm, obs: value })
            }
            value={dataForm.obs!}
            boxText
            placeholder="Ex. Tomar com alimentos"
            label="Observações (opcional)"
          />
          <ButtonDefault
            textDefault={update ? "Atualizar" : "Adicionar"}
            textPressed="Desfazer"
            setStatus={handleSave}
            press={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
