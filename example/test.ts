import * as smoke from "@deno-plc/smoke";

const a = new Uint8Array(10);
smoke.Crypto.getRandomValues(a);
console.log(a);
