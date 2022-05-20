const mockList = require("../../mocks/mockList");
const listKinds = require("./kindsControllers");

jest.mock("../../../database/models/Kind", () => ({
  find: jest.fn().mockResolvedValue(mockList),
}));
describe("Given listKind controller", () => {
  describe("When it's called and receives a request", () => {
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const expectedStatusCode = 200;
    test("Then it should call the res method status code 200", async () => {
      await listKinds(null, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });
    test("Then it should call the res method json with kinds", async () => {
      await listKinds(null, res);

      expect(res.json).toHaveBeenCalledWith(mockList);
    });
  });
});
