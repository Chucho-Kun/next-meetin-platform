import z from "zod";

export const BaseAuthSchema = z.object({
    name: z.string().trim().min(1,{error: 'El Nombre es obligatorio'}),
    email: z.email({error: 'El E-mail no es válido'}),
    password: z.string().trim().min(8, {error: 'El Password debe ser mínimo de 8 caracteres'}),
    passwordConfirmation: z.string().trim().min(1, {error: 'El Password de confirmación no puede ir vacío'})
})

export const SignInSchema = BaseAuthSchema.pick({
    email: true
}).extend({
    password: z.string().trim().min(1, {error: 'El password no puede ir vacio'})
})

export const SignUpSchema = BaseAuthSchema.pick({
    name: true,
    email: true,
    password: true,
    passwordConfirmation: true
}).refine( (data) => data.password === data.passwordConfirmation, {
    error: "Los Passwords no son iguales",
    path: ['passwordConfirmation']
})

export const SignInData = BaseAuthSchema.pick({
    email: true,
    password: true
})

export type SignUpInput = z.infer<typeof SignUpSchema>
export type SignInInput = z.infer<typeof SignInData>