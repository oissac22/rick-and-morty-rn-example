import { Image } from "react-native";
import { ImagesFilesList } from "../../../imgs";
import { stylePhoto } from "../style";



export function Photo() {
    return <Image
        style={stylePhoto.container}
        source={ImagesFilesList.bg}
    />;
}
