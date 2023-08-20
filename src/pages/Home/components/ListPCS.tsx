import { useProviderListPCS } from "../ProviderListPCS";
import { Alert, ScrollView } from "react-native";
import { ItemPC } from "./ItemPC";
import { styleListPCS } from "../style";
import { NavigatePages } from "./NavigatePages";
import { CView } from "../../../components/CView";
import { CText } from "../../../components/CText";


export function ListPCS() {
    const { listPCS } = useProviderListPCS();

    if (listPCS.loadding)
        return null;

    if (listPCS.error)
        return <NoRegs />

    return <ScrollView
        style={styleListPCS.container}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
    >
        <NavigatePages />
        {listPCS.listPCS.map(pc => {
            return <ItemPC pc={pc} key={pc.id} />;
        })}
        <NavigatePages />
    </ScrollView>;
}

function NoRegs()
{
    return <CView style={styleListPCS.error}>
        <CText>
            Nenhum registro foi carregado
        </CText>
    </CView>
}
