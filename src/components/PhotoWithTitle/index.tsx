import { ImageBackground, ImageBackgroundProps, StyleSheet, TouchableOpacity } from "react-native";
import { CText } from "../CText";
import { useState, useCallback } from 'react'

const panel = require('./degrader-right.png');

interface IPhotoProps extends ImageBackgroundProps{
    title: string
}

export function PhotoWithTitle({ source, title, ...props }:IPhotoProps)
{
    const [viewPhoto, setViewPhoto] = useState<"cover" | "contain">("cover");

    const handleClickPhoto = useCallback(() => {
        setViewPhoto( prev =>
            prev === 'contain' ? 'cover' :
            'contain'
        )
    },[])

    return <TouchableOpacity onPress={handleClickPhoto}>
        <ImageBackground
            style={stylePhoto.container}
            source={source}
            resizeMode={viewPhoto}
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
    </TouchableOpacity>
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