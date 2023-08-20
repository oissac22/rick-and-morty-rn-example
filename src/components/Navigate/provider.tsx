import { createContext, useCallback, useContext, useState, useRef, useEffect, useMemo } from "react";
import { AdminMemoryStack } from "../../entities";
import { BackHandler } from "react-native";

interface INavigateProviderProps {
    setPage: (page: string) => void;
    backPage: () => void;
    page: string;
    paths: string[];
}

const Context = createContext({} as INavigateProviderProps);

const stackMemory = new AdminMemoryStack()

export function NavigateProvider({ children }:any)
{
    let [page, _setPage] = useState<string>('');

    const setPage = useCallback((newPage:string) => {
        if (newPage === page)
            return;
        stackMemory.push(page);
        _setPage(page = newPage);
    },[page])

    const backPage = useCallback(() => {
        const oldPage = stackMemory.pop();
        if (oldPage !== null)
        {
            _setPage(page = oldPage);
            return true;
        }
        return false;
    },[page, _setPage])

    const paths = useMemo(() => {
        const urlPaths = page.replace(/\?.+$/,'');
        return urlPaths.split('/').filter(value => !!value);
    }, [page])

    useEffect(() => {
        const handleEvent = () => {
            const result = backPage();
            return result;
        }
        BackHandler.addEventListener('hardwareBackPress', handleEvent);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleEvent)
        }
    },[backPage])

    return <Context.Provider
        value={{
            setPage,
            backPage,
            page,
            paths
        }}
    >
        {children}
    </Context.Provider>
}

export function useNavigateProvider()
{
    return useContext(Context);
}