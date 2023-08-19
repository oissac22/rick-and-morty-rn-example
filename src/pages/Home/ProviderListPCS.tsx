import { createContext, useContext } from "react"
import { useGetListPCS } from "./hooks"

type TProviderListPCS = {
    listPCS:ReturnType<typeof useGetListPCS>;
}

const Context = createContext({} as TProviderListPCS)

export function ProviderListPCS({children}:any)
{
    const listPCS = useGetListPCS();

    return <Context.Provider
        value={{
            listPCS
        }}
    >
        {children}
    </Context.Provider>
}

export function useProviderListPCS()
{
    return useContext(Context);
}