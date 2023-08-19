import { useState, useRef, useCallback } from "react";

class IDsSessionMemory {
    static ids:{[key:string]:any} = {};

    constructor(
        private readonly id:string
    ){}

    set value(value:any)
    {
        IDsSessionMemory.ids[this.id] = value;
    }

    get value()
    {
        return IDsSessionMemory.ids[this.id] || null;
    }
}

export function useStateSessionMemory<T=any>(id:string, defaultValue?:any)
{
    const memory = useRef<IDsSessionMemory>(new IDsSessionMemory(id));

    const [ value, _setValue ] = useState<T>(memory.current?.value || defaultValue)

    const setValue = useCallback((value: T) => {
        memory.current.value = value;
        _setValue(value)
    },[])

    return [value, setValue]
}