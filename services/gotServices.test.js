const {gotService, gotServiceById} = require("./gotServices");

jest.mock("./gotServices");

describe("GOT Service Test", () => {
    test('As a user I should return characters', async () => {
        const result = await gotService();
        expect(result.data[0].culture).toEqual("Braavosi");
        expect(result.data[0].gender).toEqual("Female");
        expect(result.data[0].url).toEqual("https://anapioficeandfire.com/api/characters/1");

    });
});

describe("GOT Service Test", () => {
    test('As a user I should return a character', async () => {
        const result = await gotServiceById(2);
        expect(result.data.name).toEqual("Walder");
        expect(result.data.url).toEqual("https://anapioficeandfire.com/api/characters/2");
        expect(result.data.gender).toEqual("Male");
    });
});