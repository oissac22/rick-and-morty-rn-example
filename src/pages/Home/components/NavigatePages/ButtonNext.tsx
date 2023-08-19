import { useCallback, useMemo } from "react";
import { IconButton } from "../../../../components/IconButtom";
import { ImagesFilesList } from "../../../../imgs";
import { useProviderListPCS } from "../../ProviderListPCS";

export function ButtonNext() {
    const { listPCS } = useProviderListPCS();

    const handleNext = useCallback(() => {
        listPCS.nextPage();
    }, []);

    const opacity = useMemo(() => {
        return (listPCS.page >= (listPCS.infos.current?.pages || 0))
            ? 0.3
            : 1;
    }, [listPCS.page]);

    return <IconButton source={ImagesFilesList.greenArrowRight} onPress={handleNext} style={{ opacity }} />;
}
