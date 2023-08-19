import { useCallback, useState } from "react";
import { CView } from "../../../../components/CView";
import { styleNavigatePages } from "../../style";
import { Alert } from "react-native";
import { BasicView } from "./BasicView";
import { SearchView } from "./SearchView";
import { useProviderListPCS } from "../../ProviderListPCS";

export function NavigatePages()
{
    const { listPCS } = useProviderListPCS()
    const [showSearch, setShowSearch] = useState<boolean>(false);

    const handleShowSearch = useCallback(() => {
        setShowSearch(prev => !prev);
    }, [])

    const handleOk = useCallback((text:string) => {
        setShowSearch(false);
        listPCS.filter(text);
    },[])

    return <CView style={styleNavigatePages.container}>
        {
            showSearch ?
            <SearchView handleShowSearch={handleShowSearch} searchOk={handleOk} /> :
            <BasicView handleShowSearch={handleShowSearch} />
        }
    </CView>;
}


