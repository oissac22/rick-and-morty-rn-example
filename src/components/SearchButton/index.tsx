import { GestureResponderEvent, ImageProps } from "react-native";
import { IconButton } from "../IconButtom";

const imgSearch = require('./search.png');

interface ISearchButtonProps extends Omit<ImageProps, 'source'> {
    onPress?: (event: GestureResponderEvent) => void
}

export function SearchButton({ style, ...props }:ISearchButtonProps)
{
    return <IconButton source={imgSearch} {...props} />
}