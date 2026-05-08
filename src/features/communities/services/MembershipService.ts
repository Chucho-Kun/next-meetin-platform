import { IMembershipRepository, membershipRepository } from './MembershipRepository';
import { User } from "../../auth/types/auth.types";
import { communityRepository, ICommunityRepository } from './CommunityRepository';
import { notFound } from 'next/navigation';
import { MembershipPolicy } from '../policies/MembershipPolicy';
import { success } from 'zod';

class MembershipService {
    constructor(
        private membershipRepository: IMembershipRepository,
        private communityRepository: ICommunityRepository
    ){}

    async toggleMembership(communityId: string, user: User) {

        // revisar si la comunidad existe
        const community = await this.communityRepository.findByID(communityId)
        if(!community) return

        const isMember = await this.membershipRepository.isMember(communityId, user.id)
        
        // revisar si puede unirse
        if(MembershipPolicy.canJoin(user, community, isMember)) {
            await this.membershipRepository.addMember(communityId, user.id)

            return {
                success: true,
                message: `Te has unido a la comunidad ${community.name}`,
                newPermissions: {
                    canJoin: false,
                    canLeave: true
                }
            }
        }

        // revisar si puede salir
        if(MembershipPolicy.canLeave(user, community, isMember)) {
            await this.membershipRepository.removeMember(community.id, user.id)

            return {
                success: true,
                message: `Has salido de la comunidad ${community.name}`,
                newPermissions: {
                    canJoin: true,
                    canLeave: false
                }
            }
        }
    }
}

export const membershipService= new MembershipService(membershipRepository,communityRepository)