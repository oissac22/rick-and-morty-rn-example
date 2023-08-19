import { useProviderDetailPC } from "../provider";
import { useEffect, useMemo } from "react";
import { Loadding } from "../../../components/Loadding";
import { useNavigateProvider } from "../../../components/Navigate/provider";


export function Loading() {
    const { load, loadding } = useProviderDetailPC();
    const { paths } = useNavigateProvider();

    const id = useMemo(() => paths[1], [paths]);

    useEffect(() => {
        load(id);
    }, [id]);

    if (loadding)
        return <Loadding />;

    return null;

}
