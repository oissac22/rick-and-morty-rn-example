import { ProviderDetailPC, useProviderDetailPC } from "./provider";
import { Photo } from "./components/Photo";
import { useEffect } from "react";
import { Loadding } from "../../components/Loadding";

export function DetailPC()
{
    return <ProviderDetailPC>
        <Loading />
        <Photo />
    </ProviderDetailPC>
}

export function Loading()
{
    const { load, loadding } = useProviderDetailPC();

    useEffect(() => {
        load(1);
    },[])

    if (loadding)
        return <Loadding />
    
    return null;

}