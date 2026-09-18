# Architecture

EmberAI is a workspace monorepo. `packages/domain` owns stable serializable entities; `packages/ai` exposes provider-neutral generation contracts; and `packages/memory` owns durable-memory retrieval. `apps/api` composes those contracts behind delivery/auth adapters, while `apps/web` and `apps/android` are independent clients.

## AI and memory

Cloud vendors implement `AiProvider`; Android local models implement `LocalModelProvider` with the same request/response semantics. Before each generation, the runtime selects a bounded set of relevant durable memories and Story Cards. It does **not** place a lifetime transcript into a model context. Production stores should encrypt data at rest, use vector plus keyword retrieval, enforce owner scoping, and support deletion.

## Synchronization

Clients retain an offline-first local store and append sync operations. Server reconciliation is authenticated, owner-scoped, versioned, and conflict-aware. Exports use the versioned `ExportBundle` domain shape.
