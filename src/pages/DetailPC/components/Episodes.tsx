import { useProviderDetailPC } from "../provider";
import { PanelWithTitle } from "../../../components/PanelWithTitle";
import { CView } from "../../../components/CView";
import { TitleAndValue } from "../../../components/TitleAndValue";
import { TServiceGqlPCDetailByIdResultEpisode } from "../../../interfaces/TServiceGqlPCDetailByIdResult";
import { dateStringToFormatDate } from "../../../entities";
import { LineSpace } from "../../../components/LineSpace";
import { VerticalSpace } from "../../../components/VerticalSpace";


export function Episodes() {
    const { pcData } = useProviderDetailPC();
    const episodes = pcData?.episode || [];

    return <PanelWithTitle title="Episódios">
        {
            episodes.map( (epi, idx) => {
                return <>
                    {
                        idx === 0 ? null :
                        <VerticalSpace />
                    }
                    <Episode episode={epi} key={epi.id} />
                </>
            })
        }
    </PanelWithTitle>;
}

function Episode({episode}: {episode:TServiceGqlPCDetailByIdResultEpisode})
{
    return <CView>
        <TitleAndValue title="Nome" value={episode.name} />
        <TitleAndValue title="Entrou no ar" value={episode.air_date} />
        <TitleAndValue title="Episódio" value={episode.episode} />
        <TitleAndValue title="Criado em" value={dateStringToFormatDate(episode.created)} />
    </CView>
}