import test from "node:test"; import assert from "node:assert/strict"; import { switchMode, type StoryState } from "../index.js";
const state = { story: { id:"s",ownerId:"u",title:"",rating:"general",updatedAt:"" }, mode:"story", currentScene:{id:"c",title:"",summary:"",participants:[],startedAt:""}, activeBranchId:"b",realism:"casual",simulationEnabled:false,instructions:"",model:{providerId:"p",modelId:"m",temperature:1,maxTokens:1} } satisfies StoryState;
test("changes experience without losing state", () => assert.equal(switchMode(state, "adventure").mode, "adventure"));
