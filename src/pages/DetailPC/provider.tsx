import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { ServiceGqlPCDetailById } from "../../services";
import { RequestFetch } from "../../entities";
import { TServiceGqlPCDetailByIdResult } from "../../interfaces/TServiceGqlPCDetailByIdResult";

interface IProviderProps {
    pcData: TServiceGqlPCDetailByIdResult | null,
    loadding: boolean,
    error: string,
    load: (id: string | number) => void
}

const Context = createContext({} as IProviderProps);

export function ProviderDetailPC({ children }:any)
{
    const [pcData, setPCData] = useState<TServiceGqlPCDetailByIdResult | null>(null);
    const [loadding, setLoadding] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const load = useCallback((id:string | number) => {
        if (loadding)
            return;
        setError('');
        setLoadding(true);
        const request = new RequestFetch();
        const service = new ServiceGqlPCDetailById(request);
        setPCData(null);
        service.result(id)
            .then((result) => {
                setPCData(result);
            }).catch((err) => {
                setError(err.response?.data || err.message)
            }).finally(() => {
                setLoadding(false);
            });
    }, [loadding])

    return <Context.Provider
        value={{
            error, load, loadding, pcData
        }}
    >
        {children}
    </Context.Provider>
}

export function useProviderDetailPC()
{
    return useContext(Context);
}