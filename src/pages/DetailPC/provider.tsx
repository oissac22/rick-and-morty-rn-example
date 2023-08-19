import { createContext, useContext } from "react";

interface IProviderProps {

}

const Context = createContext({} as IProviderProps);

export function ProviderDetailPC({ children }:any)
{
    return <Context.Provider
        value={{

        }}
    >
        {children}
    </Context.Provider>
}

export function useProviderDetailPC()
{
    return useContext(Context);
}