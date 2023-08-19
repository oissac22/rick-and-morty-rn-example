import { NavigatePage } from "../components/Navigate";
import { NavigateProvider } from "../components/Navigate/provider";
import { Home } from "./Home";


export function Pages()
{
    return <NavigateProvider>
        <NavigatePage href="" children={<Home />} />
    </NavigateProvider>
}