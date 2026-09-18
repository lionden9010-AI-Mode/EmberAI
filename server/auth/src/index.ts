export interface SessionPrincipal { accountId: string; roles: readonly string[]; }
export const canAccessOwnerResource = (principal: SessionPrincipal, ownerId: string) => principal.accountId === ownerId || principal.roles.includes("admin");
