import { URL_HOST_API } from "../config/services";
import { IRequest } from "../interfaces/IRequest";
import { ServiceGqlPCSList } from "./ServiceGqlPCSList"

const FAKE_RESULT = {
    "data": {
        "characters": {
            "info": {
                "count": 826,
                "pages": 42,
                "next": 2,
                "prev": null
            },
            "results": [
                {
                    "id": "1",
                    "name": "Rick Sanchez",
                    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                },
                {
                    "id": "2",
                    "name": "Morty Smith",
                    "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
                },
                {
                    "id": "3",
                    "name": "Summer Smith",
                    "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
                },
            ]
        }
    }
};

describe("ServiceGqlPCSList class test", () => {

    it('happy wai', async () => {
        const { service, request } = newServiceGqlPCSList();
        const sut = await service.result();
        expect(sut).toEqual(FAKE_RESULT.data.characters);
        expect(request._url).toEqual(URL_HOST_API);
        expect(request._data).toHaveProperty("query");
    })

    it('filter', async () => {
        const { service, request } = newServiceGqlPCSList();
        service.filter = { name: "test" };
        await service.result();
        expect(request._data).toHaveProperty("query");
        expect(request._data.query).toMatch(/filter: \{name:"test"\}/)
    })

    it('page 30', async () => {
        const { service, request } = newServiceGqlPCSList();
        service.page = 30;
        await service.result();
        expect(request._data).toHaveProperty("query");
        expect(request._data.query).toMatch(/page:30/)
    })

    it('http error', async () => {
        const { service, request } = newServiceGqlPCSList();
        request._error = true;
        await expect(() => service.result())
            .rejects
            .toThrow("Error test");
    })

})

function newServiceGqlPCSList()
{
    const request = new FakeRequest();
    const service = new ServiceGqlPCSList(request);
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