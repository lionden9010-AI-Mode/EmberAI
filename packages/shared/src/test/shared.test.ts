import test from "node:test"; import assert from "node:assert/strict"; import { clamp } from "../index.js"; test("clamps state axes", () => assert.equal(clamp(101), 100));
