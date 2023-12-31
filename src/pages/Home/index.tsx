import { ProviderListPCS } from "./ProviderListPCS";
import { Loading } from "./components/Loading";
import { LoadStart } from "./components/LoadStart";
import { ListPCS } from "./components/ListPCS";
import { Title } from "../../components/Title";

export function Home()
{
    return <ProviderListPCS>
        <Title title="Rick and Morty" />
        <LoadStart />
        <Loading />
        <ListPCS />
    </ProviderListPCS>
}