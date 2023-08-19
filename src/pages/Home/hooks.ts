import { useCallback, useRef, useState } from "react";
import { ServiceGqlPCSList } from "../../services";
import { RequestFetch } from "../../entities";
import { TServiceGqlPCSListResultInfo, TServiceGqlPCSListResultResults } from "../../interfaces/TServiceGqlPCSListResult";

export function useGetListPCS()
{
    let [listPCS, setListPCS] = useState<TServiceGqlPCSListResultResults[]>([]);
    const [loadding, setLoadding] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const page = useRef<number>(0);
    const infos = useRef<TServiceGqlPCSListResultInfo>();
    const filterName = useRef<string>('');

    const load = useCallback(() => {
        if(loadding)
            return;
        setLoadding(true);
        setError('');
        const request = new RequestFetch();
        const service = new ServiceGqlPCSList(request);
        service.result()
            .then(result => {
                setListPCS(result.results)
                infos.current = result.info;
            }).catch( (err:any) => {
                setError(err.response?.data || err.message)
            }).finally(() => {
                setLoadding(false);
            })
    },[loadding])

    const previewPage = useCallback(() => {
        if(loadding)
            return;
        if (page.current > 1)
        {
            page.current--
            load();
        }
    }, [loadding, page, load])

    const nextPage = useCallback(() => {
        if(loadding)
            return;
        if (page.current < (infos.current?.pages || 0))
            {
                page.current++
                load();
            }

    },[loadding, page, load])

    const resetLoad = useCallback(() => {
        if(loadding)
            return;
        infos.current = undefined;
        page.current = 0;
        setListPCS(listPCS = []);
        load();
    },[loadding, load, listPCS]);

    const filter = useCallback((filterNameValue:string) => {
        if(loadding)
            return;
        filterName.current = filterNameValue;
        resetLoad();
    },[loadding, resetLoad])

    const changePage = useCallback((pageValue:number) => {
        if(loadding)
            return;
        if (pageValue < 1)
            pageValue = 1;
        if (pageValue >= (infos.current?.pages || 0))
            pageValue = (infos.current?.pages || 0);
        page.current = pageValue;
        load();
    },[])

    return {
        load, resetLoad, previewPage, nextPage, filter, changePage,
        loadding, error, page, infos, listPCS
    }
}