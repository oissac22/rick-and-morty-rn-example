import { styleMenu } from "./style";
import { CView } from "../CView";
import { HomeButton } from "../homeButton";
import { InfoButton } from "../InfoButton";
import { useNavigateProvider } from "../Navigate/provider";
import { useCallback } from 'react'

export function Menu() {
    return <CView style={styleMenu.container}>
        <Home />
        <Info />    
    </CView>;
}

function Home()
{
    const { setPage } = useNavigateProvider()

    const handleClick = useCallback(() => {
        setPage("");
    },[])

    const styleResult = {
        ...styleMenu.iconView
    }

    return <CView style={styleResult}>
        <HomeButton onPress={handleClick} />
    </CView>
}

function Info()
{
    const { setPage } = useNavigateProvider()

    const handleClick = useCallback(() => {
        setPage("/about");
    },[])

    const styleResult = {
        ...styleMenu.iconView,
        opacity: .3
    }

    return <CView style={styleResult}>
        <InfoButton onPress={handleClick} />
    </CView>
}