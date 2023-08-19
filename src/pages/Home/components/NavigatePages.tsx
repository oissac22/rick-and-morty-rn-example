import { useCallback, useRef, useState } from "react";
import { CView } from "../../../components/CView";
import { IconButton } from "../../../components/IconButtom";
import { ImagesFilesList } from "../../../imgs";
import { useProviderListPCS } from "../ProviderListPCS";
import { styleEditPage, styleNavigatePages } from "../style";
import { CText } from "../../../components/CText";
import { Alert, Button, TouchableOpacity } from "react-native";
import { CTextInput } from "../../../components/CTextInput";

export function NavigatePages()
{
    return <CView style={styleNavigatePages.container}>
        <ButtonPreview />
        <PageInfo />
        <ButtonNext />
    </CView>;
}

function ButtonPreview()
{
    const { listPCS } = useProviderListPCS();

    const handlePreview = useCallback(() => {
        listPCS.previewPage();
    },[])

    if (listPCS.page.current <= 0)
        return null;

    return <IconButton source={ImagesFilesList.greenArrowLeft} onPress={handlePreview} />;
}

function ButtonNext()
{
    const { listPCS } = useProviderListPCS();

    const handleNext = useCallback(() => {
        listPCS.nextPage();
    },[])

    if (listPCS.page.current >= (listPCS.infos.current?.pages || 0) - 1)
        return null;

    return <IconButton source={ImagesFilesList.greenArrowRight} onPress={handleNext} />;
}

function PageInfo()
{
    const [stateEdit, setStateEdit] = useState<boolean>(false);
    const { listPCS } = useProviderListPCS();

    const handleClick = useCallback(async () => {
        setStateEdit(true);
    },[])

    const handleCancel = useCallback(() => {
        setStateEdit(false);
    },[])

    const handleOk = useCallback((value:number) => {
        listPCS.changePage(value - 1);
    },[])

    return <TouchableOpacity onPress={handleClick}>
        {
            stateEdit ?
            <EditPage onOk={handleOk} onCancel={handleCancel} /> :
            <CText>
                {listPCS.page.current + 1} / {listPCS.infos.current?.pages}
            </CText>
        }
    </TouchableOpacity>
}

interface IEditPageProps {
    onOk:(page:number)=>any,
    onCancel:()=>any,
    _default?: string,
}

function EditPage({ onCancel, onOk, _default }:IEditPageProps)
{
    const value = useRef<string>(_default || '');

    const handleOk = useCallback(() => {
        if (!/^\d+$/.test(value.current))
            return Alert.alert("Valor inválido", `"${value.current}" não é uma página válida, digite um número`);
        onOk(Number(value.current))
    },[])

    const handleChange = useCallback((text:string) => {
        value.current = text;
    },[])

    return <CView style={styleEditPage.container}>
        <CTextInput autoFocus={true} style={styleEditPage.input} onChangeText={handleChange} />
        <Button title="OK" onPress={handleOk} />
        <Button title="Cancelar" onPress={onCancel} />
    </CView>
}