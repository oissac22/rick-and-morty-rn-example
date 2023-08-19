import { StyleSheet } from "react-native";

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