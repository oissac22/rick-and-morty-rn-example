import { createContext, useCallback, useContext, useRef, useState } from "react";

interface msgProps {
    title:string,
    text?: string,
    time?: number
}

interface IErrorsMessagesProvider {
    hiddenErrors: boolean,
    title: string,
    message: string,
    error: (props: msgProps) => void,
    clearErrors: () => void
}

const Context = createContext({} as IErrorsMessagesProvider);

export function ErrorsMessagesProvider({children}:any)
{
    const [message, setMessage] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const time = useRef<NodeJS.Timeout | null>(null);

    const hiddenErrors = !(message || title)

    const clearErrors = useCallback(() => {
        setMessage('');
        setTitle('');
    },[])

    const error = useCallback((props:msgProps) => {
        if (time.current)
            clearTimeout(time.current);
        setMessage(props.text || '');
        setTitle(props.title);
        if (props.time)
            time.current = setTimeout(clearErrors, props.time);
    }, [])

    return <Context.Provider
        value={{
            error,
            clearErrors,
            hiddenErrors,
            title,
            message
        }}
    >
        {children}
    </Context.Provider>
}

export function useErrorsMessages()
{
    return useContext(Context);
}