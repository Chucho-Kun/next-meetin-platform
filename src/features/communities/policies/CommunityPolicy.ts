import { community } from '@/src/db/schema';
import { User } from "../../auth/types/auth.types";
import { selectCommunity } from "../types/community.types";

export class CommunityPolicy {
    static isAdmin(user: User, community: selectCommunity): boolean {
        return user.id === community.createdBy
    }

    static canEdit(user: User, community: selectCommunity): boolean {
        return this.isAdmin(user, community)
    }
    
    static canDelete(user: User, community: selectCommunity): boolean {
        return this.isAdmin(user, community)
    }
    
    static canViewMembers(user: User, community: selectCommunity): boolean {
        return this.isAdmin(user, community)
    }
}