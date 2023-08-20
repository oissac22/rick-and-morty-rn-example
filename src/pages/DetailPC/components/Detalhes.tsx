import { useProviderDetailPC } from "../provider";
import { ScrollView } from "react-native";
import { InformacoesBasicas } from "./InformacoesBasicas";
import { Origem } from "./Origem";
import { VerticalSpace } from "../../../components/VerticalSpace";
import { Local } from "./Local";
import { Episodes } from "./Episodes";
import { ShowMoreInfo } from "./ShowMoreInfo";
import { LinkBack } from "../../../components/LinkBack";
import { useEffect } from "react";
import { useErrorsMessages } from "../../../components/Errors";

const TIME_ERROR = 15 * 1000;

export function Detalhes()
{
    const { loadding, error:errorText } = useProviderDetailPC();
    const { error } = useErrorsMessages();

    useEffect(() => {
        if (errorText)
        {
            error({
                title: "Erro de servidor",
                text: "Houve algum problema ao tentar se comunicar com o servidor, verifique sua internet.",
                time: TIME_ERROR 
            })
        }
    },[error, errorText])

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

