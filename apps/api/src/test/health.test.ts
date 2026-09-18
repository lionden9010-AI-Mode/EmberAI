import test from "node:test"; import assert from "node:assert/strict"; import { health } from "../index.js";
test("reports API health", () => assert.equal(health().status, "ok"));
