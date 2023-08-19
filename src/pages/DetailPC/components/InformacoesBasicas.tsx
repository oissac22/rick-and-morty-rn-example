import { useProviderDetailPC } from "../provider";
import { CView } from "../../../components/CView";
import { TitleAndValue } from "../../../components/TitleAndValue";
import { StyleSheet } from "react-native";
import { dateStringToFormatDate } from "../../../entities";

export function InformacoesBasicas() {
    const { pcData } = useProviderDetailPC();

    return <CView style={styleInformacoesBasicas.container}>
        <TitleAndValue title="Espécie" value={pcData?.species} hiddenIfNotValue={true} />
        <TitleAndValue title="Tipo" value={pcData?.type} hiddenIfNotValue={true} />
        <TitleAndValue title="Gênero" value={pcData?.gender} hiddenIfNotValue={true} />
        <TitleAndValue title="Status" value={pcData?.status} hiddenIfNotValue={true} />
        <TitleAndValue title="Criado em" value={dateStringToFormatDate(pcData?.created)} hiddenIfNotValue={true} />
    </CView>;
}

const styleInformacoesBasicas = StyleSheet.create({
    container: {
        padding: 15
    }
})
