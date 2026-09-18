import type { Id } from "@emberai/domain";
export interface Location { id: Id; name: string; description: string; parentLocationId?: Id; tags: string[]; }
export interface Faction { id: Id; name: string; purpose: string; reputation: number; }
export interface WorldDefinition { id: Id; ownerId: Id; name: string; geography: string; history: string; politics: string; technology: string; magic: string; culture: string; economy: string; rules: string[]; locations: Location[]; factions: Faction[]; }
export function findLocation(world: WorldDefinition, locationId: Id) { return world.locations.find((location) => location.id === locationId); }
