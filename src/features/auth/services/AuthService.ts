import { auth } from "@/src/lib/auth";
import { SignInInput, SignUpInput } from "../schemas/authSchema";
import { APIError, success } from "better-auth";
import { authRepository, IAuthRepository } from "./AuthRepository";
import { error } from "console";
import { headers } from "next/headers";

class AuthService {

    constructor(
        private authRepository : IAuthRepository
    ){}
    
    async register( credentials : SignUpInput ) {
        const { name, email, password } = credentials
        
        // revisar si el usuario ya existe
        const user = await this.authRepository.userExist(email)
        if( user ) {
            return {
                error:'El E-mail ya fue registrado',
                success: ''
            }
        }
        //validacion de negocio

        // manejar registro
        await auth.api.signUpEmail({
            body: {
                name, 
                email, 
                password, 
                callbackURL: '/dashboard'
            },
            headers: await headers()
        })
    
        return {
            error:'',
            success: 'Cuenta creada correctamente, revisa tu mail'
        }
    }

    async login(credentials: SignInInput) {
        const { email, password } = credentials

        // Revisar si existe el usuario
        const user = await this.authRepository.userExist(email)
        if(!user) {
            return {
                error: 'El usuario no existe',
                success: ''
            }
        }

        // Verificar el password y si la cuenta está confirmada
        try {
            await auth.api.signInEmail({
                body: {
                    email,
                    password,
                    callbackURL: '/dashboard'
                },
                headers: await headers()
            })
            return {
                error: '',
                success: 'Sesión Iniciada Correctamente'
            }
        } catch (error) {
            if(error instanceof APIError) {



                const messages : Record<number, string> = {
                    401: 'Password Incorrecto',
                    403: 'Tu cuenta no ha sido confirmada, hemos enviado un email'
                }
                const errorMessage = messages[error.statusCode]
                if(errorMessage) {
                    return {
                        error: errorMessage,
                        success: ''
                    }
                }
            }
        }
        return {
                error: '',
                success: ''
            }
    }
}

export const authService = new AuthService(authRepository)