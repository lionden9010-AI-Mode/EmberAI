import type { Conversation, Id, Message } from "@emberai/domain";
export type ExperienceMode = "story" | "roleplay" | "character-chat" | "adventure" | "game-master" | "world-simulation" | "sandbox";
export type RealismLevel = "casual" | "balanced" | "realistic" | "simulation";
export interface ModelConfiguration { providerId: string; modelId: string; temperature: number; topP?: number; maxTokens: number; }
export interface SceneState { id: Id; locationId?: Id; title: string; summary: string; participants: Id[]; startedAt: string; }
export interface TimelineBranch { id: Id; storyId: Id; parentMessageId?: Id; name: string; createdAt: string; }
export interface StoryState { story: Conversation; mode: ExperienceMode; playerCharacterId?: Id; currentScene: SceneState; activeBranchId: Id; realism: RealismLevel; simulationEnabled: boolean; instructions: string; model: ModelConfiguration; }
export interface StoryTurn { input: Message; output?: Message; state: StoryState; }
export function switchMode(state: StoryState, mode: ExperienceMode): StoryState { return { ...state, mode }; }
export function branchTimeline(branch: TimelineBranch, parentMessageId: Id, id: Id, now: string): TimelineBranch { return { id, storyId: branch.storyId, parentMessageId, name: `${branch.name} — branch`, createdAt: now }; }
