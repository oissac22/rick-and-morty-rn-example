import { useProviderDetailPC } from "../provider";
import { CView } from "../../../components/CView";
import { TitleAndValue } from "../../../components/TitleAndValue";
import { StyleSheet } from "react-native";
import { useMemo } from "react";

export function InformacoesBasicas() {
    const { pcData } = useProviderDetailPC();

    const created = useMemo(() => {
        const strDate = pcData?.created;
        if (!strDate)
            return '';
        return new Date(strDate).toLocaleString();
    },[pcData])

    return <CView style={styleInformacoesBasicas.container}>
        <TitleAndValue title="Status" value={pcData?.status} hiddenIfNotValue={true} />
        <TitleAndValue title="Espécie" value={pcData?.species} hiddenIfNotValue={true} />
        <TitleAndValue title="Tipo" value={pcData?.type} hiddenIfNotValue={true} />
        <TitleAndValue title="Gênero" value={pcData?.gender} hiddenIfNotValue={true} />
        <TitleAndValue title="Criado em" value={created} hiddenIfNotValue={true} />
    </CView>;
}

const styleInformacoesBasicas = StyleSheet.create({
    container: {
        padding: 15
    }
})
