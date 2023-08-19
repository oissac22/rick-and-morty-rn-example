import { useCallback, useRef, useState } from "react";
import { ServiceGqlPCSList } from "../../services";
import { RequestFetch } from "../../entities";
import { TServiceGqlPCSListResultInfo, TServiceGqlPCSListResultResults } from "../../interfaces/TServiceGqlPCSListResult";
import { useStateSessionMemory } from "../../hooks";

const ID_SESSION_PAGE = 'list-pcs-page';
const ID_SESSION_FILTER = 'list-pcs-filter';

export function useGetListPCS()
{
    let [listPCS, setListPCS] = useState<TServiceGqlPCSListResultResults[]>([]);
    const [loadding, setLoadding] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    let [page, setPage] = useStateSessionMemory<number>(ID_SESSION_PAGE, 1);
    let [filterName, setFilterName] = useStateSessionMemory<string>(ID_SESSION_FILTER, '');

    const infos = useRef<TServiceGqlPCSListResultInfo>();

    const hasFilter = !!filterName;

    const load = useCallback(() => {
        if(loadding)
            return;
        setLoadding(true);
        setError('');
        const request = new RequestFetch();
        const service = new ServiceGqlPCSList(request);
        service.page = page;
        service.filter = filterName ? { name: filterName } : {} ;
        service.result()
            .then(result => {
                setListPCS(result.results)
                infos.current = result.info;
            }).catch( (err:any) => {
                setError(err.response?.data || err.message)
            }).finally(() => {
                setLoadding(false);
            })
    },[loadding, page, filterName])

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
        setFilterName(filterName = filterNameValue)
        resetLoad();
    },[loadding, resetLoad, filterName])

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