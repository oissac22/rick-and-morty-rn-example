import { CText } from "../../../components/CText";
import { CView } from "../../../components/CView";
import { TServiceGqlPCSListResultResults } from "../../../interfaces/TServiceGqlPCSListResult";
import { Photo } from "../../../components/Photo";
import { styleItemPC } from "../style";

interface IItemPCProps {
    pc: TServiceGqlPCSListResultResults;
}

export function ItemPC({ pc }: IItemPCProps) {
    return <CView style={styleItemPC.container}>
        <Photo source={{ uri: pc.image }} />
        <CView style={styleItemPC.infos}>
            <CText style={styleItemPC.name}>
                {pc.name}
            </CText>
        </CView>
    </CView>;
}
