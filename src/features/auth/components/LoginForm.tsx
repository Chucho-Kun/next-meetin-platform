"use client"

import Form from "@/src/shared/components/forms/Form"
import FormInput from "@/src/shared/components/forms/FormInput"
import FormLabel from "@/src/shared/components/forms/FormLabel"

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
      </Form>      
    </>
  )
}
