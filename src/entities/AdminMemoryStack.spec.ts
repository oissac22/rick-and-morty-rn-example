import { AdminMemoryStack } from "./AdminMemoryStack"

describe("AdminMemoryStack class", () => {

    it ("test add and remove memory", () => {
        const adm = new AdminMemoryStack();
        expect(adm.pop()).toBe(null);
        
        adm.push("test 1");
        adm.push("test 2");
        adm.push("test 3");
        
        expect(adm.pop()).toBe("test 3");
        expect(adm.pop()).toBe("test 2");
        
        adm.push("test 4");
        
        expect(adm.pop()).toBe("test 4");
        expect(adm.pop()).toBe("test 1");
        expect(adm.pop()).toBe(null);

    })

})