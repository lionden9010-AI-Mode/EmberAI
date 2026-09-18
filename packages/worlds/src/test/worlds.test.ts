import test from "node:test"; import assert from "node:assert/strict"; import { findLocation } from "../index.js";
test("finds a world location", () => assert.equal(findLocation({id:"w",ownerId:"o",name:"",geography:"",history:"",politics:"",technology:"",magic:"",culture:"",economy:"",rules:[],locations:[{id:"l",name:"Port",description:"",tags:[]}],factions:[]},"l")?.name,"Port"));
