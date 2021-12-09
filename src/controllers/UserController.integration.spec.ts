import { PlatformTest } from "@tsed/common";
import SuperTest from "supertest";
import { UserController } from "./UserController";
import { Server } from "../Server";

describe("UserController", () => {
  let request: SuperTest.SuperTest<SuperTest.Test>;

  beforeEach(PlatformTest.bootstrap(Server, {
    mount: {
      "/": [UserController]
    }
  }));
  beforeEach(() => {
    request = SuperTest(PlatformTest.callback());
  });

  afterEach(PlatformTest.reset);

  it("should call GET /user", async () => {
     const response = await request.get("/user").expect(200);

     expect(response.text).toEqual("marcelo");
  });
});
