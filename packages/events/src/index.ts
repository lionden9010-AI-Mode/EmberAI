import type { Id } from "@emberai/domain";
export interface EventCondition { path: string; operator: "equals" | "greater-than" | "exists"; value?: string | number | boolean; }
export interface EmberEvent { id: Id; name: string; conditions: EventCondition[]; actions: EventAction[]; scheduledFor?: string; recurring?: "daily" | "weekly"; enabled: boolean; }
export type EventAction = { type: "state-change"; path: string; value: unknown } | { type: "memory-create"; text: string } | { type: "character-reaction"; characterId: Id; reaction: string };
export function conditionsMatch(event: EmberEvent, state: Record<string, unknown>): boolean { return event.enabled && event.conditions.every((condition) => { const current = state[condition.path]; return condition.operator === "exists" ? current !== undefined : condition.operator === "equals" ? current === condition.value : typeof current === "number" && typeof condition.value === "number" && current > condition.value; }); }
