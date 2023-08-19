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

export function NavigateProvider({ children }:any)
{
    const [page, _setPage] = useState<string>('');
    const stackMemory = useRef(new AdminMemoryStack())

    const setPage = useCallback((page:string) => {
        stackMemory.current.push(page);
        _setPage(page);
    },[page])

    const backPage = useCallback(() => {
        const oldPage = stackMemory.current.pop();
        if (oldPage !== null)
        {
            _setPage(page);
            return true;
        }
        return false;
    },[])

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