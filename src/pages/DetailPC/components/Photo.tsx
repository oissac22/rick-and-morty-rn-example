import { Image } from "react-native";
import { stylePhoto } from "../style";
import { useProviderDetailPC } from "../provider";



export function Photo()
{
    const { pcData, loadding } = useProviderDetailPC();

    if (loadding || !pcData?.image)
        return null;

    return <Image
        style={stylePhoto.container}
        source={{uri: pcData.image}}
        resizeMode="cover"
    />;
}
