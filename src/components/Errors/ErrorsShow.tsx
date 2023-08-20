import { StyleSheet } from "react-native";
import { CText } from "../CText";
import { CView } from "../CView";
import { useErrorsMessages } from "./provider";
import { CButton } from "../CButton";
import { useCallback } from 'react'


export function ErrorsShow() {
    const { hiddenErrors, message, title, clearErrors } = useErrorsMessages();

    const handleClose = useCallback(() => {
        clearErrors()
    },[clearErrors])

    if (hiddenErrors)
        return null;

    return <CView style={styleErrorsShow.container}>
        <CView style={styleErrorsShow.infos}>
            <CText>{title}</CText>
            <CText>{message}</CText>
        </CView>
        <CView>
            <CButton title="X" onPress={handleClose} />
        </CView>
    </CView>;
}

const styleErrorsShow = StyleSheet.create({
    container: {
        backgroundColor: '#600',
        padding: 5,
        width: '100%',
        flexDirection: 'row',
        gap: 20
    },
    infos: {
        flex: 1
    }
})