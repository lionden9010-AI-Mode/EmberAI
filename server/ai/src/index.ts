export interface ProviderSecretResolver { get(providerId: string): Promise<string | undefined>; }
