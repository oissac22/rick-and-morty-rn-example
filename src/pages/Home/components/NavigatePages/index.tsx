import { useCallback, useState } from "react";
import { CView } from "../../../../components/CView";
import { styleNavigatePages } from "../../style";
import { SearchButton } from "../../../../components/SearchButton";
import { PageInfo } from "./PageInfo";
import { ButtonNext } from "./ButtonNext";
import { ButtonPreview } from "./ButtonPreview";

export function NavigatePages()
{
    const [showSearch, setShowSearch] = useState<boolean>(false);

    const handleShowSearch = useCallback(() => {
        setShowSearch(prev => !prev);
    }, [])

    return <CView style={styleNavigatePages.container}>
        <BasicView handleShowSearch={handleShowSearch} />
    </CView>;
}

function BasicView(props:{ handleShowSearch:()=>void })
{
    return <>
        <ButtonPreview />
        <PageInfo />
        <ButtonNext />
        <SearchButton onPress={props.handleShowSearch} />
    </>
}