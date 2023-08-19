import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";

interface IKeyboardProps {
    children: any;
}

export function Keyboard({ children }:IKeyboardProps)
{
    return <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styleKeyboard.container}
    >
        {children}
    </KeyboardAvoidingView>
}

const styleKeyboard = StyleSheet.create({
    container: {
        flex: 1
    }
})