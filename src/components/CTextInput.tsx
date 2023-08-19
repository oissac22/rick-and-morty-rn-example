import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { COLOR, COLOR_2 } from "../design";

interface ICTextInputProps extends TextInputProps {}

export function CTextInput({style, placeholderTextColor, ...props}:ICTextInputProps)
{
    const styleResult = {
        ...styleTextInput.container,
        ...(style as any || {})
    }
    return <TextInput style={styleResult} {...props} placeholderTextColor={placeholderTextColor || COLOR_2} />
}

const styleTextInput = StyleSheet.create({
    container: {
        color: COLOR,
        width: 70,
        height: 30,
        padding: 5,
        fontSize: 14
    }
})