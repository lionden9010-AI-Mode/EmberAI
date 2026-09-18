import type { AiProvider, GenerationRequest, GenerationResult } from "@emberai/ai";
import type { MemoryStore } from "@emberai/memory";
/** Framework-neutral API service. HTTP/auth adapters belong at the deployment boundary. */
export class ConversationService { constructor(private readonly ai: AiProvider, private readonly memories: MemoryStore) {} async generate(ownerId: string, request: GenerationRequest): Promise<GenerationResult> { const memories = await this.memories.search({ ownerId, query: request.messages.at(-1)?.content ?? "", limit: 8 }); const context = memories.map((memory) => memory.text).join("\n"); return this.ai.generate({ ...request, systemInstruction: [request.systemInstruction, context].filter(Boolean).join("\n") }); } }
export const health = () => ({ status: "ok", service: "emberai-api" });
