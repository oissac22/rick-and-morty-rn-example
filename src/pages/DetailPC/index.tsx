import { ProviderDetailPC } from "./provider";
import { Photo } from "./components/Photo";
import { Loading } from "./components/Loading";

export function DetailPC()
{
    return <ProviderDetailPC>
        <Loading />
        <Photo />
    </ProviderDetailPC>
}

