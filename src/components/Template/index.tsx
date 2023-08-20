import { ImageBackground, StyleSheet } from "react-native";
import { ImagesFilesList } from "../../imgs";
import { styleTemplate } from "./style";
import { Keyboard } from "../Keyboard";
import { CView } from "../CView";
import { CButton } from "../CButton";
import { IconButton } from "../IconButtom";
import { Menu } from "./Menu";

interface ITemplateProps {
    children:any
}

export function Template({ children }:ITemplateProps)
{
    return <ImageBackground source={ImagesFilesList.bg} style={styleTemplate.container}>
        <Keyboard>
            <CView style={styleTemplate.children}>
                {children}
            </CView>
            <Menu />
        </Keyboard>
    </ImageBackground>
}