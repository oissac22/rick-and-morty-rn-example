import { NavigatePage } from "../components/Navigate";
import { NavigateProvider } from "../components/Navigate/provider";
import { DetailPC } from "./DetailPC";
import { Home } from "./Home";
import { ProviderListPCS } from "./Home/ProviderListPCS";


export function Pages()
{
    return <ProviderListPCS>
        <NavigateProvider>
            <NavigatePage href="" children={<Home />} />
            <NavigatePage href={/^\/detailpc\/\d+$/} children={<DetailPC />} />
        </NavigateProvider>
    </ProviderListPCS>
}