import { useProviderDetailPC } from "../provider";
import { CText } from "../../../components/CText";
import { Linking, StyleSheet, TouchableOpacity } from "react-native";
import { useCallback, useMemo } from 'react';

const SPACE = 30;

export function ShowMoreInfo() {
    const { pcData } = useProviderDetailPC();

    const search = useMemo(() => {
        const title = 'Rick and Morty';
        const name = pcData?.name || '';
        return encodeURI(`${title} ${name}`)
    },[pcData?.name])

    const handleClick = useCallback(() => {
        Linking.openURL(`https://www.google.com.br/search?q=${search}`)
    },[])

    return <TouchableOpacity onPress={handleClick} style={styleShowMoreInfo.container}>
        <CText style={styleShowMoreInfo.text}>
            Mais sobre {pcData?.name}
        </CText>
    </TouchableOpacity>;
}

const styleShowMoreInfo = StyleSheet.create({
    container: {
        paddingHorizontal: SPACE,
        paddingBottom: SPACE * 2
    },
    text: {
        textDecorationLine: 'underline',
        textAlign: 'center'
    }
})