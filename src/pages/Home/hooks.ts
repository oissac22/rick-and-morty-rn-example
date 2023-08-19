import { useCallback, useRef, useState } from "react";
import { ServiceGqlPCSList } from "../../services";
import { RequestFetch } from "../../entities";
import { TServiceGqlPCSListResultInfo, TServiceGqlPCSListResultResults } from "../../interfaces/TServiceGqlPCSListResult";
import { useStateSessionMemory } from "../../hooks";

const ID_SESSION_PAGE = 'list-pcs-page';

export function useGetListPCS()
{
    let [listPCS, setListPCS] = useState<TServiceGqlPCSListResultResults[]>([]);
    const [loadding, setLoadding] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    let [page, setPage] = useStateSessionMemory<number>(ID_SESSION_PAGE, 1);

    const infos = useRef<TServiceGqlPCSListResultInfo>();
    const filterName = useRef<string>('');

    const hasFilter = !!filterName.current;

    const load = useCallback(() => {
        if(loadding)
            return;
        setLoadding(true);
        setError('');
        const request = new RequestFetch();
        const service = new ServiceGqlPCSList(request);
        service.page = page;
        service.filter = filterName.current ? { name: filterName.current } : {} ;
        service.result()
            .then(result => {
                setListPCS(result.results)
                infos.current = result.info;
            }).catch( (err:any) => {
                setError(err.response?.data || err.message)
            }).finally(() => {
                setLoadding(false);
            })
    },[loadding, page])

    const previewPage = useCallback(() => {
        if(loadding)
            return;
        if (page > 1)
        {
            setPage(--page);
            load();
        }
    }, [loadding, page, load])

    const nextPage = useCallback(() => {
        if(loadding)
            return;
        if (page < (infos.current?.pages || 0))
            {
                setPage(++page)
                load();
            }

    },[loadding, page, load])

    const resetLoad = useCallback(() => {
        if(loadding)
            return;
        infos.current = undefined;
        setPage(page = 1)
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
        setPage(page = pageValue);
        load();
    },[])

    return {
        load, resetLoad, previewPage, nextPage, filter, changePage,
        loadding, error, page, infos, listPCS, hasFilter
    }
}