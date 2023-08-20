import { RequestFetch } from "./RequestFetch"

describe('RequestFetch class', () => {

    it ("happy request", async () => {
        const { service } = newRequestFetch();
        jest.spyOn(global,'fetch').mockImplementation(async ():Promise<any> => ({
            json:async () => ({success:true})
        }))
        const sut = await service.post('http://test.com/', {});
        expect(sut).toEqual({"success": true});
    })

    it ("request error", async () => {
        const { service } = newRequestFetch();
        jest.spyOn(global,'fetch').mockImplementation(async ():Promise<any> => ({
            json:async () => {
                throw new Error("Server error test")
            }
        }))
        await expect(() => service.post('http://test.com/', {}))
            .rejects
            .toThrow("Server error test");
    })

})

function newRequestFetch()
{
    const service = new RequestFetch();
    return {service};
}