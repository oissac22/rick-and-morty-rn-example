import { useProviderDetailPC } from "../provider";
import { PanelWithTitle } from "../../../components/PanelWithTitle";
import { CView } from "../../../components/CView";
import { TitleAndValue } from "../../../components/TitleAndValue";
import { TServiceGqlPCDetailByIdResultEpisode } from "../../../interfaces/TServiceGqlPCDetailByIdResult";
import { dateStringToFormatDate } from "../../../entities";
import { VerticalSpace } from "../../../components/VerticalSpace";
import { useCallback, useMemo, useState } from "react";
import { CText } from "../../../components/CText";
import { TouchableOpacity } from "react-native";

export function Episodes() {
    const [showMore, setShowMore] = useState<boolean>(false);
    const { pcData } = useProviderDetailPC();
    const episodes = pcData?.episode || [];

    const episodesResume = useMemo(() => {
        if (showMore)
            return episodes;
        return episodes.slice(0,2);
    }, [episodes, showMore])

    return <PanelWithTitle title="Episódios">
        {
            episodesResume.map( (epi, idx) => {
                return <Episode episode={epi} key={epi.id} />
            })
        }
        {
            episodes.length <= 2 ? null :
            <ShowMoreEpi setShowMore={setShowMore} show={showMore} />
        }
    </PanelWithTitle>;
}

function ShowMoreEpi(props:{ setShowMore:(value:boolean)=>void, show:boolean })
{
    const handleClick = useCallback(() => {
        props.setShowMore(!props.show);
    },[props.show])

    const text = props.show ? "Mostrar menos..." : "Mostrar mais..." ;
    
    return <TouchableOpacity onPress={handleClick}>
        <CView>
            <CText>
                {text}
            </CText>
        </CView>
    </TouchableOpacity>
}

function Episode({episode}: {episode:TServiceGqlPCDetailByIdResultEpisode})
{
    return <>
        <CView>
            <TitleAndValue title="Nome" value={episode.name} />
            <TitleAndValue title="Entrou no ar" value={episode.air_date} />
            <TitleAndValue title="Episódio" value={episode.episode} />
            <TitleAndValue title="Criado em" value={dateStringToFormatDate(episode.created)} />
        </CView>
        <VerticalSpace />
    </>
}