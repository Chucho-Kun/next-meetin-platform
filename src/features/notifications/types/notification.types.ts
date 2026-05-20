import { notifications } from "@/src/db/schema";

export type SelectNotifications = typeof notifications.$inferSelect
export type InsertNotifications = typeof notifications.$inferSelect