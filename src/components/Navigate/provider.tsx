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
    const [page, setPage] = useState<string>('');
    const lastPage = useRef<string>('')

    useEffect(() => {
        if (lastPage.current !== page)
        {
            console.log('lastPage, page :>> ', lastPage.current, '-',page);
            stackMemory.push(lastPage.current);
            lastPage.current = page;
        }
    },[page])

    const backPage = useCallback(() => {
        const oldPage = stackMemory.pop();
        if (oldPage !== null)
        {
            lastPage.current = oldPage;
            setPage(oldPage);
            return true;
        }
        return false;
    },[page])

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