export type RealityMode = "fictional" | "historically-accurate" | "real-world" | "real-world-plus-fiction" | "custom";
export interface ResearchRequest { query: string; purpose: string; enabled: boolean; requiresFreshness: boolean; }
export interface ResearchSource { title: string; url: string; retrievedAt: string; license?: string; }
export interface ResearchResult { request: ResearchRequest; facts: string[]; sources: ResearchSource[]; cached: boolean; }
export function canResearch(request: ResearchRequest, userEnabled: boolean): boolean { return userEnabled && request.enabled && request.query.trim().length > 0; }
