import { Button, ButtonProps, StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { COLOR } from "../design";
import { CText } from "./CText";

const DEFAULT_SIZE = 40;

interface ICButtonProps extends TouchableOpacityProps {
    title?:string
}

export function CButton({ children, title, style, ...props }: ICButtonProps)
{
    const styleResult = {
        ...styleCButton.container,
        ...(style as any || {})
    }

    return <TouchableOpacity {...props} style={styleResult}>
        {
            !title ?
            children :
            <CText style={styleCButton.text}>
                {title}
            </CText>
        }
    </TouchableOpacity>
}

const styleCButton = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: COLOR,
        borderRadius: 4,
        minWidth: DEFAULT_SIZE,
        minHeight: DEFAULT_SIZE,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 16
    }
})