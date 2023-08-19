import { ImageBackground, ImageBackgroundProps, StyleSheet } from "react-native";
import { CText } from "../CText";

const panel = require('./degrader-right.png');

interface IPhotoProps extends ImageBackgroundProps{
    title: string
}

export function PhotoWithTitle({ source, title, ...props }:IPhotoProps)
{
    return <ImageBackground
        style={stylePhoto.container}
        source={source}
        resizeMode="cover"
    >
        <ImageBackground
            source={panel}
            style={stylePhoto.panelTitle}
            resizeMode="stretch"
        >
            <CText style={stylePhoto.title}>
                {title}
            </CText>
        </ImageBackground>
    </ImageBackground>
}

export const stylePhoto = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        justifyContent: 'flex-end'
    },
    panelTitle: {
        padding: 10,
        marginBottom: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        textTransform: 'uppercase'
    }
})