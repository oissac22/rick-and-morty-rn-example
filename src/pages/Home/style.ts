import { StyleSheet } from "react-native";
import { BACK_COLOR_1, COLOR } from "../../design";

export const styleHome = StyleSheet.create({
    container: {
        flex: 1
    },
})

export const styleLoadding = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20
    }
})

export const styleListPCS = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        gap: 20
    }
})

export const styleItemPC = StyleSheet.create({
    container:{
        flexDirection: 'row',
        padding: 15,
        gap: 20
    },
    infos: {
        justifyContent: 'center',
        flex: 1
    },
    name: {
        fontSize: 23,
        fontWeight: 'bold',
    }
})

export const styleNavigatePages = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        backgroundColor: BACK_COLOR_1,
        gap:40
    }
})

export const styleEditPage = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'row',
        gap: 10,
        alignItems: 'flex-end'
    },
    input: {
        borderBottomColor: COLOR,
        borderBottomWidth: 3
    }
})