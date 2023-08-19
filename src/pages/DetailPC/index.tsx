import { ProviderDetailPC } from "./provider";
import { Photo } from "./components/Photo";
import { Loading } from "./components/Loading";
import { Detalhes } from "./components/Detalhes";

export function DetailPC()
{
    return <ProviderDetailPC>
        <Loading />
        <Photo />
        <Detalhes />
    </ProviderDetailPC>
}

