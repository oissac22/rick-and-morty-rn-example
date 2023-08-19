import { SearchButton } from "../../../../components/SearchButton";
import { PageInfo } from "./PageInfo";
import { ButtonNext } from "./ButtonNext";
import { ButtonPreview } from "./ButtonPreview";
import { useProviderListPCS } from "../../ProviderListPCS";
import { CButton } from "../../../../components/CButton";
import { useCallback } from "react";

interface IBasicViewProps {
    handleShowSearch: () => void;
}

export function BasicView(props: IBasicViewProps) {
    const { listPCS } = useProviderListPCS();

    const handleClearFilter = useCallback(() => {
        listPCS.filter('');
    }, [])

    return <>
        <ButtonPreview />
        <PageInfo />
        <ButtonNext />
        <SearchButton onPress={props.handleShowSearch} />
        {
            !listPCS.hasFilter ? null :
            <CButton title="X" onPress={handleClearFilter} />
        }
    </>;
}
