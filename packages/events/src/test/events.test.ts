import test from "node:test"; import assert from "node:assert/strict"; import { conditionsMatch } from "../index.js";
test("matches threshold events", () => assert.equal(conditionsMatch({id:"e",name:"",enabled:true,conditions:[{path:"trust",operator:"greater-than",value:80}],actions:[]},{trust:81}),true));
