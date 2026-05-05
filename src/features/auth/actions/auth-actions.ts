"use server"

import { error } from "console";
import { SignUpInput, SignUpSchema } from "../schemas/authSchema";
import { success } from "zod";
import { authService } from "../services/AuthService";

export async function signUpAction( input : SignUpInput) {
    const data = SignUpSchema.safeParse( input )
    
    if(!data.success) {
        return {
            error: 'Hubo un error',
            success: ''
        }
    }

    console.log(data.success);
    
    const response = await authService.register( data.data )
    return response
} 
