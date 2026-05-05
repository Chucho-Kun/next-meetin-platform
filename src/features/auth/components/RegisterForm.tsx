"use client"

import { Form, FormInput, FormLabel, FormSubmit, FormErrors } from "@/src/shared/components/forms"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { SignUpInput, SignUpSchema } from "../schemas/authSchema"
import { signUpAction } from "../actions/auth-actions"
import toast from "react-hot-toast"

export default function RegisterForm() {

    const { register, handleSubmit, formState: {errors}, reset } = useForm({
        resolver: zodResolver(SignUpSchema),
        mode: 'all'
    })

    const onSubmit = async (data : SignUpInput) => {
        const { error, success } = await signUpAction(data)

        if(error) {
            toast.error(error)
        }
        if(success) {
            toast.success(success)
            reset()
        }
        
    }

  return (
    <Form
        onSubmit={handleSubmit(onSubmit)}
    >
        <FormLabel htmlFor="name">Nombre</FormLabel>
        <FormInput
            id="name"
            type="text"
            placeholder="Ingresa tu nombre"
            {...register('name')}
        />
        { errors.name && <FormErrors>{errors.name.message}</FormErrors> }
        
        <FormLabel htmlFor="email">E-mail</FormLabel>
        <FormInput
            id="email"
            type="email"
            placeholder="Ingresa tu email"
            {...register('email')}
        />
        { errors.email && <FormErrors>{errors.email.message}</FormErrors> }

        <FormLabel htmlFor="password">Contraseña</FormLabel>
        <FormInput
            id="password"
            type="password"
            placeholder="Password - Min 8 Caracteres"
            {...register('password')}
        />
        { errors.password && <FormErrors>{errors.password.message}</FormErrors> }
        
        <FormLabel htmlFor="password_confirmation">Repite tu Contraseña</FormLabel>
        <FormInput
            id="password_confirmation"
            type="password"
            placeholder="Repite tu Password"
            {...register('passwordConfirmation')}
        />
        { errors.passwordConfirmation && <FormErrors>{errors.passwordConfirmation.message}</FormErrors> }

        <FormSubmit value="Registrarme" />

    </Form>
  )
}
