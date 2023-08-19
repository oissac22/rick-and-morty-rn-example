import { Image, ImageProps, StyleSheet } from "react-native"

const SIZE_DEFAULT = 100;

interface IPhotoProps extends ImageProps {}

export function Photo({source, style, ...props}:IPhotoProps)
{
    const styleResult = {
        ...stylePhoto.container,
        ...(style as any || {})
    }

    return <Image
        style={styleResult}
        source={source}
        {...props}
    />
}

const stylePhoto = StyleSheet.create({
    container: {
        width: SIZE_DEFAULT,
        height: SIZE_DEFAULT,
        borderRadius: SIZE_DEFAULT / 2
    }
})