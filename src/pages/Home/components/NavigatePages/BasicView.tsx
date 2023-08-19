import { SearchButton } from "../../../../components/SearchButton";
import { PageInfo } from "./PageInfo";
import { ButtonNext } from "./ButtonNext";
import { ButtonPreview } from "./ButtonPreview";

interface IBasicViewProps {
    handleShowSearch: () => void;
}

export function BasicView(props: IBasicViewProps) {
    return <>
        <ButtonPreview />
        <PageInfo />
        <ButtonNext />
        <SearchButton onPress={props.handleShowSearch} />
    </>;
}
