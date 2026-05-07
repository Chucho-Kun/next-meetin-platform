import { User } from "../../auth/types/auth.types";
import { selectCommunity } from "../types/community.types";

export class MembershipPolicy {
    static canJoin( user: User, community: selectCommunity, isMember: boolean) : boolean {
        if(isMember) return false

        // El admin no se puede unir
        if(community.createdBy === user.id) return false

        return true
    }
    static canLeave(user: User, community: selectCommunity, isMember: boolean): boolean {
        // El Owner no se puede salir de su comunidad
        if(community.createdBy === user.id) return false

        return isMember
    }
}