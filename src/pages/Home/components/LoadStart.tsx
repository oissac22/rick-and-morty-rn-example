import { useEffect } from "react";
import { useProviderListPCS } from "../ProviderListPCS";

export function LoadStart() {
    const { listPCS } = useProviderListPCS();

    useEffect(() => {
        listPCS.resetLoad();
    }, []);

    return null;
}
