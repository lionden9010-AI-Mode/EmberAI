import test from "node:test"; import assert from "node:assert/strict"; import { buildMemoryContext } from "../index.js";
test("memory context honors token budget", () => assert.equal(buildMemoryContext([{id:"1",ownerId:"u",text:"a".repeat(20),importance:1,createdAt:""}], 2), ""));
