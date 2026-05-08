import { db } from "@/src/db"
import { InsertCommunity, selectCommunity } from "../types/community.types"
import { community } from "@/src/db/schema"
import { eq } from "drizzle-orm"
import { CommunityInput } from "../schemas/communitySchema"

export interface ICommunityRepository {
    create(data: InsertCommunity) : Promise<selectCommunity>
    findByUser( userId: string, limit?: number ) : Promise<selectCommunity[]>
    findByID(communityId: string): Promise<selectCommunity | undefined>
    update(data: CommunityInput, communityId: string): Promise<void>
    delete(communityId: string): Promise<void>
}

class CommunityRepository implements ICommunityRepository {
    async create( data: InsertCommunity ) {
        const [result] = await db.insert(community).values(data).returning()
        return result
    }

    async findByUser(userId: string, limit: 10): Promise<selectCommunity[]> {
        const communities = await db
                                    .select()
                                    .from(community)
                                    .where(eq(community.createdBy, userId))
                                    .limit(limit)
        return communities
    }

    async findByID(communityId: string): Promise<selectCommunity | undefined> {
        const [result] = await db
                                .select()
                                .from(community)
                                .where(eq(community.id, communityId))
                                .limit(1)
        return result
    }

    async update(data: CommunityInput, communityId: string){
        
        const { name, description, image } = data
        const result = await db.update(community).set({...data}).where(eq(community.id, communityId))
    }

    async delete(communityId: string): Promise<void> {
        await db
                .delete(community)
                .where(eq(community.id, communityId))
    }
}

export const communityRepository = new CommunityRepository()