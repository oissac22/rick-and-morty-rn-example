import { useProviderDetailPC } from "../provider";
import { CText } from "../../../components/CText";
import { ScrollView } from "react-native";
import { CView } from "../../../components/CView";
import { TitleAndValue } from "../../../components/TitleAndValue";


export function Detalhes() {
    const { pcData } = useProviderDetailPC();

    return <ScrollView>
        <InformacoesBasicas />
        <CText>
            {JSON.stringify(pcData, null, 4)}
        </CText>
    </ScrollView>;
}

function InformacoesBasicas()
{
    const { pcData } = useProviderDetailPC();

    return <CView>
        <TitleAndValue title="Status" value={pcData?.status} />
    </CView>
}