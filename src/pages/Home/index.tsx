import { CText } from "../../components/CText";
import { ProviderListPCS, useProviderListPCS } from "./ProviderListPCS";
import { ScrollView } from "react-native";
import { ItemPC } from "./components/ItemPC";
import { Loading } from "./components/Loading";
import { LoadStart } from "./components/LoadStart";
import { styleListPCS } from "./style";

export function Home() {

    return <ProviderListPCS>
        <LoadStart />
        <Loading />
        <ListPCS />
    </ProviderListPCS>
}

function ListPCS()
{
    const { listPCS } = useProviderListPCS();

    if(listPCS.loadding)
        return null;

    return <ScrollView style={styleListPCS.container}>
        {
            listPCS.listPCS.map( pc => {
                return <ItemPC pc={pc} key={pc.id} />
            } )
        }
    </ScrollView>
}


