import { Crypto } from "@sinclair/smoke";
import { Assert, Test } from "../test/index.ts";
Test.describe("Crypto", () => {
  Test.it("Should generate randomUUID", () => {
    const uuid = Crypto.randomUUID();
    Assert.isTypeOf(uuid, "string");
  });
});
