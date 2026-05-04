"use client"

import { Form, FormInput, FormLabel, FormSubmit } from "@/src/shared/components/forms"

export default function RegisterForm() {
  return (
    <Form>
        <FormLabel htmlFor="name">Nombre</FormLabel>
        <FormInput
            id="name"
            type="text"
            placeholder="Ingresa tu nombre"
        ></FormInput>
        
        <FormLabel htmlFor="email">E-mail</FormLabel>
        <FormInput
            id="email"
            type="email"
            placeholder="Ingresa tu email"
        ></FormInput>
        
        <FormLabel htmlFor="password">Contraseña</FormLabel>
        <FormInput
            id="password"
            type="password"
            placeholder="Password - Min 8 Caracteres"
        ></FormInput>
        
        <FormLabel htmlFor="password_confirmation">Repite tu Contraseña</FormLabel>
        <FormInput
            id="password_confirmation"
            type="password"
            placeholder="Repite tu Password"
        ></FormInput>

        <FormSubmit value="Registrarme" />

    </Form>
  )
}
