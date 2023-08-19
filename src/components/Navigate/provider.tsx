import { createContext, useCallback, useContext, useState, useRef } from "react";
import { AdminMemoryStack } from "../../entities";

interface INavigateProviderProps {
    setPage: (page: string) => void;
    backPage: () => void;
    page: string;
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
            _setPage(page);
    },[])

    return <Context.Provider
        value={{
            setPage,
            backPage,
            page
        }}
    >
        {children}
    </Context.Provider>
}

export function useNavigateProvider()
{
    return useContext(Context);
}