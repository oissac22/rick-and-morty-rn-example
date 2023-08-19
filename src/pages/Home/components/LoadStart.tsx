import { useEffect } from "react";
import { useProviderListPCS } from "../ProviderListPCS";

export function LoadStart() {
    const { listPCS } = useProviderListPCS();

    useEffect(() => {
        listPCS.load();
    }, []);

    return null;
}
