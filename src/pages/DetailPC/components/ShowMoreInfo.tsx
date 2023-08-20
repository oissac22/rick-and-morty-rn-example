import { useProviderDetailPC } from "../provider";
import { CText } from "../../../components/CText";
import { Linking, StyleSheet, TouchableOpacity } from "react-native";
import { useCallback, useMemo } from 'react';
import { ButtonLinkWeb } from "../../../components/ButtonLinkWeb";

const SPACE = 30;

export function ShowMoreInfo() {
    const { pcData } = useProviderDetailPC();

    const search = useMemo(() => {
        const title = 'Rick and Morty';
        const name = pcData?.name || '';
        return encodeURI(`${title} ${name}`)
    },[pcData?.name])

    return <ButtonLinkWeb
        text={`Mais sobre ${pcData?.name}`}
        url={`https://www.google.com.br/search?q=${search}`}
    />
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