import type { Id } from "@emberai/domain";
export type AnatomySystem = "skeletal" | "muscular" | "cardiovascular" | "respiratory" | "digestive" | "nervous" | "endocrine" | "immune" | "integumentary" | "sensory" | "urinary" | "reproductive";
export interface AnatomicalStructure { id: string; name: string; system: AnatomySystem; present: boolean; notes?: string; }
export interface AnatomyProfile { characterId: Id; structures: AnatomicalStructure[]; medicallyRelevantNotes: string[]; }
export interface BiologicalSettings { aging: boolean; growth: boolean; puberty: boolean; menstrualCycle: boolean; fertility: boolean; pregnancy: boolean; sleep: boolean; hunger: boolean; thirst: boolean; fatigue: boolean; injury: boolean; illness: boolean; hydration: boolean; }
export type MenstrualPhase = "menstrual" | "follicular" | "ovulation" | "luteal";
export interface MenstrualCycle { enabled: boolean; cycleDay: number; averageLength: number; variabilityDays: number; phase: MenstrualPhase; symptoms: string[]; trackingMode: "estimated" | "manual"; }
export function validateAnatomy(profile: AnatomyProfile): string[] { return profile.structures.filter((structure) => !structure.id || !structure.name).map((structure) => `Invalid anatomy structure: ${structure.name || structure.id || "unnamed"}`); }
export function cyclePhase(day: number, length: number): MenstrualPhase { if (day <= 5) return "menstrual"; if (day < length - 13) return "follicular"; if (day <= length - 12) return "ovulation"; return "luteal"; }
