import type { Message } from "@emberai/domain";
export type AiCapability = "chat" | "embeddings" | "streaming" | "offline";
export interface GenerationRequest { messages: Pick<Message, "role" | "content">[]; systemInstruction?: string; maxTokens: number; temperature: number; }
export interface GenerationResult { text: string; provider: string; model: string; finishReason: "stop" | "length" | "safety"; }
export interface AiProvider { readonly id: string; readonly capabilities: ReadonlySet<AiCapability>; generate(request: GenerationRequest, signal?: AbortSignal): Promise<GenerationResult>; }
export class AiRouter { constructor(private readonly providers: readonly AiProvider[]) {} providerFor(capability: AiCapability): AiProvider { const provider = this.providers.find((candidate) => candidate.capabilities.has(capability)); if (!provider) throw new Error(`No AI provider supports ${capability}`); return provider; } }
/** Android implementations may expose local models through this same contract. */
export interface LocalModelProvider extends AiProvider { readonly modelPath: string; readonly capabilities: ReadonlySet<AiCapability>; }
