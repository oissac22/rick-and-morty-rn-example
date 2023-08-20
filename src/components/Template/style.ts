import { StyleSheet } from "react-native";
import { BACK_COLOR_1, BACK_COLOR_2 } from "../../design";

export const styleTemplate = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingTop: 30
    },
    children: {
        flex: 1
    }
})

export const styleMenu = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderTopWidth: 1,
        borderTopColor: '#000',
        backgroundColor: BACK_COLOR_1,
        padding: 15
    },
    iconView: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})