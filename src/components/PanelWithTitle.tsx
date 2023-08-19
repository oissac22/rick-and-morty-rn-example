import { StyleSheet } from "react-native"
import { CView } from "./CView"
import { BACK_COLOR_1, COLOR } from "../design"
import { CText } from "./CText"

interface IPanelWithTitleProps {
    title: string,
    children: any
}

export function PanelWithTitle({ title, children }:IPanelWithTitleProps)
{
    return <CView style={stylePanelWithTitle.container}>
        <CText style={stylePanelWithTitle.title}>
            {title}
        </CText>
        <CView>
            {children}
        </CView>
    </CView>
}


const stylePanelWithTitle = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: COLOR,
        padding: 20,
        margin: 10,
    },
    title: {
        position: 'absolute',
        marginLeft: 12,
        marginTop: -13,
        backgroundColor: BACK_COLOR_1,
        paddingHorizontal: 3,
        borderRadius: 3
    }
})