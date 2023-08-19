import { CText } from "./CText";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigateProvider } from "./Navigate/provider";

const SPACE = 30;

export function LinkBack() {
    const { backPage } = useNavigateProvider();

    return <TouchableOpacity onPress={backPage} style={styleLinkBack.container}>
        <CText style={styleLinkBack.text}>
            Voltar
        </CText>
    </TouchableOpacity>;
}

const styleLinkBack = StyleSheet.create({
    container: {
        paddingHorizontal: SPACE,
        paddingBottom: SPACE * 2
    },
    text: {
        textDecorationLine: 'underline',
        textAlign: 'center'
    }
})