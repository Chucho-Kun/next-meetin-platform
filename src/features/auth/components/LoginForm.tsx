"use client"

import { Form, FormLabel, FormSubmit , FormInput } from "@/src/shared/components/forms/"

export default function LoginForm() {
  return (
    <>
      <Form action="" className="shadow-2xl">
        <FormLabel htmlFor="email">E-mail</FormLabel>
        <FormInput
          type="email"
          id="email"
          placeholder="Ingresa tu E-Mail"
        />

        <FormLabel htmlFor="password">Password</FormLabel>
        <FormInput
          type="password" 
          id="password"
          placeholder="Ingresa tu Password"
        />

        <FormSubmit value="Iniciar Sesión"/>

      </Form>      
    </>
  )
}
