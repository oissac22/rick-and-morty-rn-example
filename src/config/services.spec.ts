import { URL_HOST_API } from "./services"

describe("test config services", () => {

    it("URL_HOST_API const", () => {
        expect(URL_HOST_API).toBe("https://rickandmortyapi.com/graphql");
    })

})