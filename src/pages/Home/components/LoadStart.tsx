import { useEffect } from "react";
import { useProviderListPCS } from "../ProviderListPCS";
import { useErrorsMessages } from "../../../components/Errors";

const TIME_ERROR = 15 * 1000;

export function LoadStart() {
    const { listPCS } = useProviderListPCS();
    const { error } = useErrorsMessages()

    useEffect(() => {
        listPCS.load();
    }, []);

    useEffect(() => {
        error({
            title: "Erro de servidor",
            text: listPCS.error,
            time: TIME_ERROR 
        })
    }, [listPCS.error])

    return null;
}
