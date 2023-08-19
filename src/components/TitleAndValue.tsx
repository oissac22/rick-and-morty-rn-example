import { StyleSheet, ViewProps } from "react-native";
import { CText } from "./CText";
import { CView } from "./CView";

interface ITitleAndValueProps extends ViewProps {
    title: string,
    value?: string | number,
    hiddenIfNotValue?: boolean
}

export function TitleAndValue({ title, value, hiddenIfNotValue, style, ...props }:ITitleAndValueProps) {
    if (hiddenIfNotValue && !value)
        return null;
    
    const styleResult = {
        ...styleTitleAndValue.container,
        ...(style as any || {})
    }

    return <CView style={styleResult} {...props}>
        <CText>
            {title}:
        </CText>
        <CText style={styleTitleAndValue.value}>
            {value || ''}
        </CText>
    </CView>;
}

const styleTitleAndValue = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 10,
        padding: 5,
    },
    value: {
        fontWeight: 'bold'
    }
})