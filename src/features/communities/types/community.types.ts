import { community } from "@/src/db/schema"

export type InsertCommunity = typeof community.$inferInsert
export type selectCommunity = typeof community.$inferSelect