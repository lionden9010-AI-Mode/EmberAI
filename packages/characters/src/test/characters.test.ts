import test from "node:test"; import assert from "node:assert/strict"; import { evolveRelationship } from "../index.js";
test("relationship records history", () => { const result = evolveRelationship({id:"r",fromCharacterId:"a",toCharacterId:"b",kind:"friend",trust:50,fear:0,anger:0,affection:0,history:[]},{at:"",summary:"helped",delta:{trust:10}}); assert.equal(result.trust,60); });
