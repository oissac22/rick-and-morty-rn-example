import { ImageBackground } from "react-native";
import { ImagesFilesList } from "../../imgs";
import { styleTemplate } from "./style";

interface ITemplateProps {
    children:any
}

export function Template({ children }:ITemplateProps)
{
    return <ImageBackground source={ImagesFilesList.bg} style={styleTemplate.container}>
        {children}
    </ImageBackground>
}