import { useProviderDetailPC } from "../provider";
import { ScrollView } from "react-native";
import { InformacoesBasicas } from "./InformacoesBasicas";
import { Origem } from "./Origem";
import { VerticalSpace } from "../../../components/VerticalSpace";
import { Local } from "./Local";
import { Episodes } from "./Episodes";
import { ShowMoreInfo } from "./ShowMoreInfo";
import { LinkBack } from "../../../components/LinkBack";


export function Detalhes() {
    const { loadding } = useProviderDetailPC();

    if (loadding)
        return null;

    return <ScrollView>
        <InformacoesBasicas />
        <VerticalSpace />
        <Origem />
        <VerticalSpace />
        <Local />
        <VerticalSpace />
        <Episodes />
        <VerticalSpace />
        <ShowMoreInfo />
        <LinkBack />
    </ScrollView>;
}

