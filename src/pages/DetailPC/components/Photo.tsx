import { useProviderDetailPC } from "../provider";
import { PhotoWithTitle } from "../../../components/PhotoWithTitle";

export function Photo()
{
    const { pcData, loadding } = useProviderDetailPC();

    if (loadding || !pcData?.image)
        return null;

    return <PhotoWithTitle
        title={pcData.name}
        source={{ uri: pcData.image }}
    />
}