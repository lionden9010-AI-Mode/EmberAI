/** Shared, serializable product entities. IDs are opaque UUIDs generated at the edge. */
export type Id = string;
export type Visibility = "private" | "unlisted" | "public";
export type ContentRating = "general" | "mature";

export interface PrivacySettings { telemetryEnabled: boolean; cloudProcessingAllowed: boolean; searchableProfile: boolean; }
export interface Account { id: Id; displayName: string; birthDate: string; adultModeEnabled: boolean; privacy: PrivacySettings; createdAt: string; }
export interface Character { id: Id; ownerId: Id; name: string; description: string; greeting: string; instructions: string; visibility: Visibility; rating: ContentRating; avatarUrl?: string; updatedAt: string; }
export interface StoryCard { id: Id; title: string; content: string; keywords: string[]; priority: number; enabled: boolean; }
export interface World { id: Id; ownerId: Id; name: string; lore: string; cards: StoryCard[]; visibility: Visibility; }
export interface Conversation { id: Id; ownerId: Id; characterId?: Id; worldId?: Id; title: string; rating: ContentRating; updatedAt: string; }
export interface Message { id: Id; conversationId: Id; role: "system" | "user" | "assistant"; content: string; createdAt: string; }
export interface ExportBundle { version: 1; exportedAt: string; characters: Character[]; worlds: World[]; conversations: Conversation[]; messages: Message[]; }
export function eligibleForAdultMode(birthDate: string, now = new Date()): boolean { const d = new Date(birthDate); return !Number.isNaN(d.valueOf()) && now.getFullYear() - d.getFullYear() - (now < new Date(now.getFullYear(), d.getMonth(), d.getDate()) ? 1 : 0) >= 18; }
