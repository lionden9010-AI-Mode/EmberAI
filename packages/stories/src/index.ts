import type { Id } from "@emberai/domain";
export type StoryCardType = "character" | "location" | "item" | "faction" | "creature" | "world" | "history" | "event" | "rule" | "relationship" | "custom";
export interface ActivationCondition { field: string; operator: "equals" | "contains" | "greater-than"; value: string | number; }
export interface StoryCard { id: Id; storyId?: Id; type: StoryCardType; name: string; description: string; tags: string[]; activation: ActivationCondition[]; priority: number; scope: "story" | "world" | "character"; visibility: "private" | "unlisted" | "public"; embedding?: readonly number[]; }
export interface StoryMetadata { id: Id; worldId?: Id; title: string; synopsis: string; createdAt: string; updatedAt: string; }
export function relevantCards(cards: readonly StoryCard[], query: string, limit = 8): StoryCard[] { const tokens = query.toLowerCase().split(/\W+/).filter(Boolean); return cards.filter((card) => tokens.some((token) => card.name.toLowerCase().includes(token) || card.tags.some((tag) => tag.toLowerCase().includes(token)) || card.description.toLowerCase().includes(token))).sort((a,b) => b.priority-a.priority).slice(0,limit); }
