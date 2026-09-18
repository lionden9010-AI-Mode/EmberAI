import type { Id } from "@emberai/domain";
const axes = ["mood", "stress", "fear", "anger", "trust", "affection", "energy", "health", "hunger", "thirst", "fatigue"] as const;
export type CharacterAxis = typeof axes[number];
export type RelationshipKind = "family" | "friend" | "rival" | "enemy" | "romantic" | "professional" | "faction";
export interface CharacterIdentity { name: string; age?: number; birthDate?: string; pronouns?: string; gender?: string; species?: string; nationality?: string; occupation?: string; appearance?: string; heightCm?: number; weightKg?: number; background?: string; languages: string[]; }
export interface CharacterPersonality { traits: string[]; likes: string[]; dislikes: string[]; fears: string[]; beliefs: string[]; values: string[]; habits: string[]; goals: string[]; motivations: string[]; secrets: string[]; evolutionNotes: string[]; }
export type BehavioralState = Record<CharacterAxis, number>;
export interface CharacterProfile { id: Id; identity: CharacterIdentity; personality: CharacterPersonality; state: BehavioralState; autonomyGoals: string[]; }
export interface Relationship { id: Id; fromCharacterId: Id; toCharacterId: Id; kind: RelationshipKind; trust: number; fear: number; anger: number; affection: number; history: RelationshipHistory[]; }
export interface RelationshipHistory { at: string; summary: string; delta: Partial<Pick<Relationship, "trust" | "fear" | "anger" | "affection">>; }
export function initialBehavioralState(): BehavioralState { return { mood: 50, stress: 0, fear: 0, anger: 0, trust: 50, affection: 0, energy: 100, health: 100, hunger: 0, thirst: 0, fatigue: 0 }; }
export function evolveRelationship(value: Relationship, event: RelationshipHistory): Relationship { const clamp = (n: number) => Math.max(0, Math.min(100, n)); return { ...value, trust: clamp(value.trust + (event.delta.trust ?? 0)), fear: clamp(value.fear + (event.delta.fear ?? 0)), anger: clamp(value.anger + (event.delta.anger ?? 0)), affection: clamp(value.affection + (event.delta.affection ?? 0)), history: [...value.history, event] }; }
