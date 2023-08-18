import { View, ViewProps } from "react-native";
import { BACK_COLOR_1 } from "../design";

interface ICViewProps extends ViewProps {}

export function CView({style, ...props}:ICViewProps)
{
    const styleResult = {
        backgroundColor: BACK_COLOR_1,
        ...(style as any || {})
    }
    return <View style={styleResult} {...props} />
}