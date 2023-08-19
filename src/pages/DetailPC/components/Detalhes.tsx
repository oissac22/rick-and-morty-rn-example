import { useProviderDetailPC } from "../provider";
import { CText } from "../../../components/CText";
import { ScrollView } from "react-native";
import { InformacoesBasicas } from "./InformacoesBasicas";
import { Origem } from "./Origem";
import { VerticalSpace } from "../../../components/VerticalSpace";
import { Local } from "./Local";
import { Episodes } from "./Episodes";


export function Detalhes() {
    const { pcData } = useProviderDetailPC();

    return <ScrollView>
        <InformacoesBasicas />
        <VerticalSpace />
        <Origem />
        <VerticalSpace />
        <Local />
        <VerticalSpace />
        <Episodes />
        <VerticalSpace />
        <CText>
            {JSON.stringify(pcData, null, 4)}
        </CText>
    </ScrollView>;
}

