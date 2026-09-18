import test from "node:test"; import assert from "node:assert/strict"; import { relevantCards } from "../index.js";
test("retrieves matching Story Cards", () => assert.equal(relevantCards([{id:"1",type:"location",name:"Moonport",description:"",tags:[],activation:[],priority:1,scope:"story",visibility:"private"}], "moonport").length,1));
