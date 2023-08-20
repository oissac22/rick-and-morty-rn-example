import { BACK_COLOR_1, BACK_COLOR_2, COLOR, COLOR_2 } from ".";

describe("test designs", () => {

    it("BACK_COLOR_1", () => {
        expect(BACK_COLOR_1).toBe('#002008');
    })

    it("BACK_COLOR_2", () => {
        expect(BACK_COLOR_2).toBe('#000000');
    })

    it("COLOR", () => {
        expect(COLOR).toBe('#99cf6d');
    })

    it("COLOR_2", () => {
        expect(COLOR_2).toBe('#336907');
    })

})