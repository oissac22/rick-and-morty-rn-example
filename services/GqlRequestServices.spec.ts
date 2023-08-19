import { URL_HOST_API } from "../config/services";
import { IRequest } from "../interfaces/IRequest";
import { GqlRequestServices } from "./GqlRequestServices"

const FAKE_RESULT = {
    "data": {
        "characters": {
            "info": {
                "count": 826,
                "pages": 42,
            }
        }
    }
};

describe("GqlRequestServices class test", () => {

    it('happy wai', async () => {
        const { service, request } = newGqlRequestServices();
        const sut = await service.result();
        expect(sut).toEqual(FAKE_RESULT);
        expect(request._url).toEqual(URL_HOST_API);
        expect(request._data).toHaveProperty("query", "{}");
    })

    it('http error', async () => {
        const { service, request } = newGqlRequestServices();
        request._error = true;
        await expect(() => service.result())
            .rejects
            .toThrow("Error test");
    })

})

function newGqlRequestServices()
{
    const request = new FakeRequest();
    const service = new GqlRequestServices(`{}`, request );
    return { service, request };
}

class FakeRequest implements IRequest {
    _error:boolean = false;
    _url:string = '';
    _data:any = null;
    async post(url: string, data: any): Promise<any> {
        this._url = url;
        this._data = data;
        if (this._error)
            throw new Error("Error test");
        return FAKE_RESULT;
    }
}