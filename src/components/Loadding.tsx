import { StyleSheet } from "react-native";
import { CText } from "./CText";
import { CView } from "./CView";

export function Loadding()
{
    return <CView style={styleLoadding.container}>
            <CText style={styleLoadding.text}>
                Carregando...
            </CText>
        </CView>;
}

export const styleLoadding = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20
    }
})