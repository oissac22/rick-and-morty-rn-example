import { StyleSheet } from "react-native";
import { CText } from "./CText";
import { CView } from "./CView";

interface ITitleProps {
    title:string
}

export function Title({ title }:ITitleProps)
{
    return <CView style={styleTitle.container}>
        <CText style={styleTitle.text}>
            {title}
        </CText>
    </CView>
}

const styleTitle = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        borderBottomWidth: 3,
        borderBottomColor: '#000'
    },
    text: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 20
    }
})