import { GestureResponderEvent, Image, ImageProps, StyleSheet, TouchableOpacity } from "react-native";

const SIZE_DEFAULT = 30;

interface IIconButtonProps extends ImageProps {
    onPress?: (event: GestureResponderEvent) => void
}

export function IconButton({ source, style, onPress, ...props }:IIconButtonProps)
{
    const styleResult = {
        ...styleIcon.container,
        ...(style as any || {})
    }

    return <TouchableOpacity onPress={onPress}>
        <Image
            source={source}
            style={styleResult}
            {...props}
        />
    </TouchableOpacity>
}

const styleIcon = StyleSheet.create({
    container: {
        width: SIZE_DEFAULT,
        height: SIZE_DEFAULT,
    }
})