import { CText } from "../../../components/CText";
import { CView } from "../../../components/CView";
import { TServiceGqlPCSListResultResults } from "../../../interfaces/TServiceGqlPCSListResult";
import { Photo } from "../../../components/Photo";
import { styleItemPC } from "../style";
import { Alert, TouchableOpacity } from "react-native";
import { useCallback } from "react";
import { useNavigateProvider } from "../../../components/Navigate/provider";

interface IItemPCProps {
    pc: TServiceGqlPCSListResultResults;
}

export function ItemPC({ pc }: IItemPCProps)
{
    const { setPage } = useNavigateProvider()

    const handleClick = useCallback(() => {
        setPage(`/detailpc/${pc.id}`)
    }, [])

    return <TouchableOpacity style={styleItemPC.container} onPress={handleClick}>
        <Photo source={{ uri: pc.image }} />
        <CView style={styleItemPC.infos}>
            <CText style={styleItemPC.name}>
                {pc.name}
            </CText>
        </CView>
    </TouchableOpacity>;
}
