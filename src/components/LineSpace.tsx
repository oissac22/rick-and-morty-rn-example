import { CView } from "./CView";
import { COLOR } from "../design";

const DEFAULT_VALUE = 40;

interface ILineSpaceProps {
    height?: number
}

export function LineSpace(props:ILineSpaceProps) {
    return <CView
        style={{
            borderBottomColor: COLOR,
            borderBottomWidth: 1,
            marginVertical: DEFAULT_VALUE / 2
        }}
    />;
}
