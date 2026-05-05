import { auth } from "@/src/lib/auth";
import { SignUpInput } from "../schemas/authSchema";
import { APIError } from "better-auth";
import { authRepository, IAuthRepository } from "./AuthRepository";

class AuthService {

    constructor(
        private authRepository : IAuthRepository
    ){}
    
    async register( credentials : SignUpInput ) {
        const { name, email, password } = credentials
        
        // revisar si el usuario ya existe
        await this.authRepository.userExist(email)
        
        //validacion de negocio

        // manejar registro
        await auth.api.signUpEmail({
            body: {
                name, email, password
            }
        })
    
        return {
            error:'',
            success: 'Cuenta creada correctamente, revisa tu mail'
        }
    }
}

export const authService = new AuthService(authRepository)