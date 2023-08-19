import { URL_HOST_API } from "../config/services";
import { IRequest } from "../interfaces/IRequest";
import { ServiceGqlPCDetailById } from "./ServiceGqlPCDetailById"

const FAKE_RESULT = {
    "data": {
        "character": {
            "id": "1",
            "name": "Rick Sanchez",
            "status": "Alive",
            "species": "Human",
            "type": "",
            "gender": "Male",
            "origin": {
                "id": "1",
                "name": "Earth (C-137)",
                "type": "Planet",
                "dimension": "Dimension C-137",
                "created": "2017-11-10T12:42:04.162Z"
            },
            "location": {
                "id": "3",
                "name": "Citadel of Ricks",
                "type": "Space station",
                "dimension": "unknown",
                "created": "2017-11-10T13:08:13.191Z"
            },
            "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            "episode": [
                {
                    "id": "1",
                    "name": "Pilot",
                    "air_date": "December 2, 2013",
                    "episode": "S01E01",
                    "created": "2017-11-10T12:56:33.798Z"
                },
                {
                    "id": "2",
                    "name": "Lawnmower Dog",
                    "air_date": "December 9, 2013",
                    "episode": "S01E02",
                    "created": "2017-11-10T12:56:33.916Z"
                }
            ],
            "created": "2017-11-04T18:48:46.250Z"
        }
    }
};

describe("ServiceGqlPCDetailById class test", () => {

    it('happy wai', async () => {
        const { service, request } = newServiceGqlPCDetailById();
        const sut = await service.result(1);
        expect(sut).toEqual(FAKE_RESULT.data.character);
        expect(request._url).toEqual(URL_HOST_API);
        expect(request._data).toHaveProperty("query");
    })

    it('http error', async () => {
        const { service, request } = newServiceGqlPCDetailById();
        request._error = true;
        await expect(() => service.result(1))
            .rejects
            .toThrow("Error test");
    })

})

function newServiceGqlPCDetailById()
{
    const request = new FakeRequest();
    const service = new ServiceGqlPCDetailById(request);
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