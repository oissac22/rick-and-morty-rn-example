import { Linking, StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { useCallback, useMemo } from 'react';
import { CText } from "../CText";

const SPACE = 30;

interface IButtonLinkWebProps extends Omit<TouchableOpacityProps, 'onPress'>{
    url: string,
    text: string
}

export function ButtonLinkWeb({ url, text, style, ...props }:IButtonLinkWebProps) {

    const handleClick = useCallback(() => {
        Linking.openURL(url)
    },[url])

    const styleResult = {
        ...styleButtonLinkWeb.container,
        ...(style as any || {})
    }

    return <TouchableOpacity onPress={handleClick} style={styleResult} {...props}>
        <CText style={styleButtonLinkWeb.text}>
            {text}
        </CText>
    </TouchableOpacity>;
}

const styleButtonLinkWeb = StyleSheet.create({
    container: {
        paddingHorizontal: SPACE,
        paddingBottom: SPACE * 2
    },
    text: {
        textDecorationLine: 'underline',
        textAlign: 'center'
    }
})