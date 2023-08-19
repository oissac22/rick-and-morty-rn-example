import { useProviderDetailPC } from "../provider";
import { PanelWithTitle } from "../../../components/PanelWithTitle";
import { TitleAndValue } from "../../../components/TitleAndValue";
import { dateStringToFormatDate } from "../../../entities";

export function Origem() {
    const { pcData } = useProviderDetailPC();
    const origem = pcData?.origin;

    return <PanelWithTitle title="Origem">
        <TitleAndValue title="Nome" value={origem?.name} hiddenIfNotValue={true} />
        <TitleAndValue title="Tipo" value={origem?.type} hiddenIfNotValue={true} />
        <TitleAndValue title="Dimensão" value={origem?.dimension} hiddenIfNotValue={true} />
        <TitleAndValue title="Criado em" value={dateStringToFormatDate(origem?.created)} hiddenIfNotValue={true} />
    </PanelWithTitle>
}

