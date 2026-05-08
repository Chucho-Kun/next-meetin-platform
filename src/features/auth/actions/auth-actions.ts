"use server"

import { error } from "console";
import { CheckPasswordInput, CheckPasswordSchema, ForgotPasswordInput, ForgotPasswordSchema, SetPasswordInput, SetPasswordSchema, SignInInput, SignInSchema, SignUpInput, SignUpSchema } from "../schemas/authSchema";
import { success } from "zod";
import { authService } from "../services/AuthService";
import { requireAuth } from "@/src/lib/auth-server";
import { communityService } from "../../communities/services/CommunityService";

export async function signUpAction( input : SignUpInput) {
    const data = SignUpSchema.safeParse( input )
    
    if(!data.success) {
        return {
            error: 'Hubo un error',
            success: ''
        }
    }

    const response = await authService.register( data.data )
    return response
} 

export async function signInAction( input: SignInInput ) {
    const data = SignInSchema.safeParse(input)
    if(!data.success) {
        return {
            error: 'Hubo un error',
            success: ''
        }
    }

    const response = await authService.login(data.data)
    return response
}

export async function forgotPasswordAction(input: ForgotPasswordInput) {
    const data = ForgotPasswordSchema.safeParse(input)
    if(!data.success) {
        return {
            error: 'Hubo un error',
            success: ''
        }
    }

    const response = await authService.requestPasswordReset(data.data)
    return response
}

export async function setPasswordAction(input: SetPasswordInput, token: string) {
    const data = SetPasswordSchema.safeParse(input)
    if(!data.success) {
        return {
            error: 'Hubo un error',
            success: ''
        }
    }

    const response = await authService.confirmPasswordReset(data.data, token)
    return response
}

export async function deleteCommunityAction(input: CheckPasswordInput, id: string){
    const { session } = await requireAuth()
    if(!session){
        return {
            error: 'Hubo un error',
            success: ''
        }
    }

    const data = CheckPasswordSchema.safeParse(input)
    if(!data.success){
        return {
            error: 'Hubo un error',
            success: ''
        }
    }

    const response =  await communityService.deleteCommunity(id, input.password, session.user)
    return response
}