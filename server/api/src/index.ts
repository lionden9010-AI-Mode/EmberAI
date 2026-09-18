/** Transport boundary: production HTTP adapters authenticate before calling domain services. */
export interface AuthenticatedRequest { accountId: string; requestId: string; }
export interface ApiError { code: "unauthorized" | "forbidden" | "validation" | "not-found" | "rate-limited"; message: string; }
