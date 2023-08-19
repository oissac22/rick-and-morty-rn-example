import { useProviderDetailPC } from "../provider";
import { CText } from "../../../components/CText";
import { ScrollView } from "react-native";
import { InformacoesBasicas } from "./InformacoesBasicas";


export function Detalhes() {
    const { pcData } = useProviderDetailPC();

    return <ScrollView>
        <InformacoesBasicas />
        <CText>
            {JSON.stringify(pcData, null, 4)}
        </CText>
    </ScrollView>;
}

