import { NavigatePage } from "../components/Navigate";
import { NavigateProvider } from "../components/Navigate/provider";
import { Template } from "../components/Template";
import { About } from "./About";
import { DetailPC } from "./DetailPC";
import { Home } from "./Home";
import { ProviderListPCS } from "./Home/ProviderListPCS";


export function Pages()
{
    return <ProviderListPCS>
        <NavigateProvider>
            <Template>
                <NavigatePage href="" children={<Home />} />
                <NavigatePage href={/^\/detailpc\/\d+$/} children={<DetailPC />} />
                <NavigatePage href="/about" children={<About />} />
            </Template>
        </NavigateProvider>
    </ProviderListPCS>
}