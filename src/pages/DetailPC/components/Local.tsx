import { useProviderDetailPC } from "../provider";
import { PanelWithTitle } from "../../../components/PanelWithTitle";
import { TitleAndValue } from "../../../components/TitleAndValue";
import { dateStringToFormatDate } from "../../../entities";


export function Local() {
    const { pcData } = useProviderDetailPC();
    const location = pcData?.location;

    return <PanelWithTitle title="Local">
        <TitleAndValue title="Nome" value={location?.name} hiddenIfNotValue={true} />
        <TitleAndValue title="Tipo" value={location?.type} hiddenIfNotValue={true} />
        <TitleAndValue title="Dimensão" value={location?.dimension} hiddenIfNotValue={true} />
        <TitleAndValue title="Criado em" value={dateStringToFormatDate(location?.created)} hiddenIfNotValue={true} />
    </PanelWithTitle>;
}
