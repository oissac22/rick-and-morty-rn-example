import { GestureResponderEvent, ImageProps } from "react-native";
import { IconButton } from "../IconButtom";

const imgSearch = require('./info.png');

interface IInfoButtonProps extends Omit<ImageProps, 'source'> {
    onPress?: (event: GestureResponderEvent) => void
}

export function InfoButton({ style, ...props }:IInfoButtonProps)
{
    return <IconButton source={imgSearch} {...props} />
}