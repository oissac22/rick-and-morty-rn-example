import { URL_HOST_API } from "../config/services";
import { HTTPException } from "../error";
import { IRequest } from "../interfaces/IRequest";
import { IRequestServices } from "../interfaces/IRequestServices";


export class GqlRequestServices implements IRequestServices {
    constructor(
        public queryGraphql: string,
        private readonly request:IRequest
    ) { }

    private async run()
    {
        const result = await this.request.post(URL_HOST_API, { query:this.queryGraphql })
        return result;
    }

    private exception(e:any):never
    {
        if (e instanceof HTTPException)
            throw e;
        throw new HTTPException(e.response?.data || e.message);
    }

    async result(): Promise<any>
    {
        try {
            return await this.run();
        } catch (e) {
            this.exception(e);
        }
    }

}
