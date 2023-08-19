import { useProviderListPCS } from "../ProviderListPCS";
import { ScrollView } from "react-native";
import { ItemPC } from "./ItemPC";
import { styleListPCS } from "../style";
import { NavigatePages } from "./NavigatePages";


export function ListPCS() {
    const { listPCS } = useProviderListPCS();

    if (listPCS.loadding)
        return null;

    return <ScrollView style={styleListPCS.container}>
        <NavigatePages />
        {listPCS.listPCS.map(pc => {
            return <ItemPC pc={pc} key={pc.id} />;
        })}
        <NavigatePages />
    </ScrollView>;
}
