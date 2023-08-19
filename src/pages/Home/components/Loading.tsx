import { Loadding } from "../../../components/Loadding";
import { useProviderListPCS } from "../ProviderListPCS";


export function Loading() {
    const { listPCS } = useProviderListPCS();

    if (listPCS.loadding)
        return <Loadding />;

    return null;
}
