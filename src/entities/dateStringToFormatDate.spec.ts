import { dateStringToFormatDate } from "./dateStringToFormatDate"

describe('dateStringToFormatDate function', () => {

    it ("format date +3 2017-11-04T18:50:21.651", () => {
        const sut = dateStringToFormatDate("2017-11-04T18:50:21.651");
        expect(sut).toBe("04/11/2017, 18:50:21")
    })

    it ("format date +3 2017-11-04T20:51:31.373", () => {
        const sut = dateStringToFormatDate("2017-11-04T20:51:31.373");
        expect(sut).toBe("04/11/2017, 20:51:31")
    })

    it ("format date 2017-11-04T18:50:21.651Z", () => {
        const sut = dateStringToFormatDate("2017-11-04T18:50:21.651Z");
        expect(sut).toBe("04/11/2017, 15:50:21")
    })

    it ("format date 2017-11-04T20:51:31.373Z", () => {
        const sut = dateStringToFormatDate("2017-11-04T20:51:31.373Z");
        expect(sut).toBe("04/11/2017, 17:51:31")
    })

})