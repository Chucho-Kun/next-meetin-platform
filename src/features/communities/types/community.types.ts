import { community } from "@/src/db/schema"

export type InsertCommunity = typeof community.$inferInsert
export type selectCommunity = typeof community.$inferSelect

export type CommunityPermissions = {
    canEdit: boolean
    canDelete: boolean
    canJoin: boolean
    canLeave: boolean
    canViewMembers: boolean
}

export type CommunityContext = {
    isAdmin: boolean
    isMember: boolean
}

export type CommunityWithPermissions = {
    data: selectCommunity
    context: CommunityContext
    permissions: CommunityPermissions
}