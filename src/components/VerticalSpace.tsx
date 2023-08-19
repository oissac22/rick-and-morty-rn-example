import { CView } from "./CView";

const DEFAULT_VALUE = 30;

interface IVerticalSpaceProps {
    height?: number
}

export function VerticalSpace(props:IVerticalSpaceProps) {
    return <CView
        style={{ height: props.height || DEFAULT_VALUE }}
    />;
}