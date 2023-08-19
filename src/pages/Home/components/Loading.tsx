import { CText } from "../../../components/CText";
import { CView } from "../../../components/CView";
import { useProviderListPCS } from "../ProviderListPCS";
import { styleLoadding } from "../style";


export function Loading() {
    const { listPCS } = useProviderListPCS();

    if (listPCS.loadding)
        return <CView style={styleLoadding.container}>
            <CText style={styleLoadding.text}>
                Carregando...
            </CText>
        </CView>;

    return null;
}
