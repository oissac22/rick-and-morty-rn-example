import { ProviderListPCS } from "./ProviderListPCS";
import { Loading } from "./components/Loading";
import { LoadStart } from "./components/LoadStart";
import { ListPCS } from "./components/ListPCS";
import { NavigatePages } from "./components/NavigatePages";

export function Home() {

    return <ProviderListPCS>
        <LoadStart />
        <Loading />
        <ListPCS />
    </ProviderListPCS>
}


