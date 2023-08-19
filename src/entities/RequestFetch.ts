import { HTTPException } from "../error";
import { IRequest } from "../interfaces/IRequest";

export class RequestFetch implements IRequest {

    async post(url: string, data: string | object): Promise<any> {
        const body: string = typeof data === 'string' ? data : JSON.stringify(data);
        const cursor = await fetch(
            url,
            {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body
            }
        );
        const result = await cursor.json();
        if (result.error)
            throw new HTTPException(result.error);
        return result;
    }

}