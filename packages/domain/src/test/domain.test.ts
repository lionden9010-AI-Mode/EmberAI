import test from "node:test";
import assert from "node:assert/strict";
import { eligibleForAdultMode } from "../index.js";
test("adult mode requires an 18th birthday", () => { assert.equal(eligibleForAdultMode("2008-09-18", new Date("2026-09-18")), true); assert.equal(eligibleForAdultMode("2008-09-19", new Date("2026-09-18")), false); });
