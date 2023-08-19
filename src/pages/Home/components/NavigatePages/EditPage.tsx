import { useCallback, useRef } from "react";
import { CView } from "../../../../components/CView";
import { styleEditPage } from "../../style";
import { Alert } from "react-native";
import { CTextInput } from "../../../../components/CTextInput";
import { CButton } from "../../../../components/CButton";

interface IEditPageProps {
    onOk:(page:number)=>any,
    onCancel:()=>any,
    _default?: string,
}

export function EditPage({ onCancel, onOk, _default }: IEditPageProps) {
    const value = useRef<string>(_default || '');

    const handleOk = useCallback(() => {
        if (!/^\d+$/.test(value.current))
            return Alert.alert("Valor inválido", `"${value.current}" não é uma página válida, digite um número`);
        onOk(Number(value.current));
    }, []);

    const handleChange = useCallback((text: string) => {
        value.current = text;
    }, []);

    return <CView style={styleEditPage.container}>
        <CTextInput
            autoFocus={true}
            style={styleEditPage.input}
            onChangeText={handleChange}
            onEndEditing={handleOk}
            defaultValue={_default}
            keyboardType="numeric"
            placeholder="Página" />
        <CButton title="X" onPress={onCancel} />
    </CView>;
}
