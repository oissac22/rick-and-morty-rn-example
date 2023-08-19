import { useCallback, useState } from "react";
import { useProviderListPCS } from "../../ProviderListPCS";
import { CText } from "../../../../components/CText";
import { TouchableOpacity } from "react-native";
import { EditPage } from "./EditPage";

export function PageInfo() {
    const [stateEdit, setStateEdit] = useState<boolean>(false);
    const { listPCS } = useProviderListPCS();

    const handleClick = useCallback(async () => {
        setStateEdit(true);
    }, []);

    const handleCancel = useCallback(() => {
        setStateEdit(false);
    }, []);

    const handleOk = useCallback((value: number) => {
        listPCS.changePage(value);
    }, []);

    return <TouchableOpacity onPress={handleClick}>
        {stateEdit ?
            <EditPage onOk={handleOk} onCancel={handleCancel} _default={listPCS.page + ''} /> :
            <CText>
                {listPCS.page} / {listPCS.infos.current?.pages}
            </CText>}
    </TouchableOpacity>;
}
