import { CText } from "../CText";
import { CView } from "../CView";
import { useErrorsMessages } from "./provider";


export function ErrorsShow() {
    const { hiddenErrors, message, title } = useErrorsMessages();

    if (hiddenErrors)
        return null;

    return <CView>
        <CText>{title}</CText>
        <CText>{message}</CText>
    </CView>;
}
