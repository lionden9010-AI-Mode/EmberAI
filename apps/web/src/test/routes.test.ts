import test from "node:test"; import assert from "node:assert/strict"; import { routes } from "../index.js";
test("exposes character creation route", () => assert.equal(routes.some((route) => route.path === "/characters"), true));
