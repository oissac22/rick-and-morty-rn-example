import { useCallback, useMemo } from "react";
import { IconButton } from "../../../../components/IconButtom";
import { ImagesFilesList } from "../../../../imgs";
import { useProviderListPCS } from "../../ProviderListPCS";

export function ButtonPreview() {
    const { listPCS } = useProviderListPCS();

    const handlePreview = useCallback(() => {
        listPCS.previewPage();
    }, []);

    const opacity = useMemo(() => listPCS.page <= 1 ? 0.3 : 1, [listPCS.page]);

    return <IconButton source={ImagesFilesList.greenArrowLeft} onPress={handlePreview} style={{ opacity }} />;
}
