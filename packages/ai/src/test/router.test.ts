import test from "node:test"; import assert from "node:assert/strict";
import { AiRouter, type AiProvider } from "../index.js";
const fake: AiProvider = { id: "local", capabilities: new Set(["offline"]), async generate() { return { text: "", provider: "local", model: "x", finishReason: "stop" }; } };
test("routes generation by capability", () => assert.equal(new AiRouter([fake]).providerFor("offline"), fake));
