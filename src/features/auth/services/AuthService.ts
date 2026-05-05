import { SignUpInput } from "../schemas/authSchema";

class AuthService {
    
    async register( credentials : SignUpInput ) {
        const { name, email, password } = credentials
        
        // revisar si el usuario ya existe

        //validacion de negocio

        // manejar registro
    }
}

export const authService = new AuthService();