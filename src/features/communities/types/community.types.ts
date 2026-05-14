import { community, communityMembers } from "@/src/db/schema"
import { User } from "../../auth/types/auth.types"

export type InsertCommunity = typeof community.$inferInsert
export type selectCommunity = typeof community.$inferSelect

export type SelectCommunityMembers = typeof communityMembers.$inferSelect
export type JoinedCommunity = SelectCommunityMembers & {
    community: selectCommunity
    user: User
}

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