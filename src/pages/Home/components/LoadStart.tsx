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
        if (listPCS.error)
        {
            error({
                title: "Erro de servidor",
                text: "Houve algum problema ao tentar se comunicar com o servidor, verifique sua internet.",
                time: TIME_ERROR 
            })
            console.error(listPCS.error)
        }
    }, [listPCS.error])

    return null;
}
