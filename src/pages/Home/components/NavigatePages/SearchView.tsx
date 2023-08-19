import { CView } from "../../../../components/CView";
import { SearchButton } from "../../../../components/SearchButton";
import { CTextInput } from "../../../../components/CTextInput";
import { CButton } from "../../../../components/CButton";
import { StyleSheet } from "react-native";
import { COLOR, COLOR_2 } from "../../../../design";
import { useCallback, useRef } from "react";

interface ISearchViewProps {
    handleShowSearch: () => void;
    searchOk: (value:string) => void
}

export function SearchView(props: ISearchViewProps) {
    const value = useRef<string>('');

    const handleSearch = useCallback(() => {
        props.searchOk(value.current)
    },[])

    const handleChange = useCallback((text:string) => {
        value.current = text;
    },[])

    return <CView style={styleSearchView.container}>
        <SearchButton onPress={handleSearch} />
        <CTextInput
            style={styleSearchView.text}
            placeholder="PESQUISAR"
            autoFocus
            placeholderTextColor={COLOR_2}
            onChangeText={handleChange}
            onEndEditing={handleSearch}
        />
        <CButton onPress={props.handleShowSearch} title="X" />
    </CView>;
}

const styleSearchView = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 10,
        alignItems: "flex-end"
    },
    text: {
        flex: 1,
        borderBottomColor: COLOR,
        borderBottomWidth: 2
    }
})