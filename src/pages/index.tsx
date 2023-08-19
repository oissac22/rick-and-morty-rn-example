import { NavigatePage } from "../components/Navigate";
import { NavigateProvider } from "../components/Navigate/provider";
import { DetailPC } from "./DetailPC";
import { Home } from "./Home";


export function Pages()
{
    return <NavigateProvider>
        <NavigatePage href="" children={<Home />} />
        <NavigatePage href={/^\/detailpc\/\d+$/} children={<DetailPC />} />
    </NavigateProvider>
}