import test from "node:test"; import assert from "node:assert/strict"; import { advanceSimulation } from "../index.js";
test("advances deterministic clock", () => assert.equal(advanceSimulation({at:"2026-01-01T00:00:00.000Z",actors:[],notes:[]},{enabled:true,time:true,biology:false,physics:false,travel:false,weather:false,economy:false,injuries:false,characterAutonomy:false},2).notes.length,1));
