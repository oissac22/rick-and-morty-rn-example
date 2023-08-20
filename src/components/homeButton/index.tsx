import { GestureResponderEvent, ImageProps } from "react-native";
import { IconButton } from "../IconButtom";

const imgSearch = require('./home.png');

interface IHomeButtonProps extends Omit<ImageProps, 'source'> {
    onPress?: (event: GestureResponderEvent) => void
}

export function HomeButton({ style, ...props }:IHomeButtonProps)
{
    return <IconButton source={imgSearch} {...props} />
}