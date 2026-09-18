import type { Character, Conversation } from "@emberai/domain";
export interface WebRoute { path: string; label: string; }
export const routes: readonly WebRoute[] = [{path:"/",label:"Library"},{path:"/characters",label:"Characters"},{path:"/stories",label:"Stories"},{path:"/settings",label:"Settings"}];
export function conversationTitle(conversation: Conversation, character?: Character): string { return conversation.title || character?.name || "Untitled story"; }
