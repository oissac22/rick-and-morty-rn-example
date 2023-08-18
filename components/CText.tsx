import { Text, TextProps } from "react-native";
import { COLOR } from "../design";

interface ICTextProps extends TextProps {}

export function CText({style, ...props}:ICTextProps)
{
    const styleResult = {
        color: COLOR,
        ...(style as any || {})
    }
    return <Text style={styleResult} {...props} />
}