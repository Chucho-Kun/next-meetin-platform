"use server"
import { CommunitySchema } from './../schemas/communitySchema';
import { CommunityInput } from "../schemas/communitySchema";
import { requireAuth } from '@/src/lib/auth-server';
import { communityService } from '../services/CommunityService';
import { success } from 'zod';

export async function createCommunityAction(input: CommunityInput ) {

    const data = CommunitySchema.safeParse(input)
    if(!data.success){
        return {
            error: 'Hubo un error',
            success: ''
        }
    }

    const { session } = await requireAuth()
    if(!session){
        return {
            error: '',
            success: ''
        }
    }

    await communityService.createCommunity( data.data, session.user.id )

    return {
        error: '',
        success: 'Comunidad creada correctamente'
    }
}

export async function editCommmunityAction(input: CommunityInput, id: string) {
    const { session } = await requireAuth()
    if(!session) {
        return {
            error: 'Hubo un error',
            success: ''
        }
    }
    const data = CommunitySchema.safeParse(input)
    if(!data.success){
        return {
            error: 'Hubo un error',
            success: ''
        }
    }

    await communityService.updateCommunity( data.data, id, session.user )

    return { 
        success: 'Comunidad actualizada correctamente',
        error: ''
    }
}