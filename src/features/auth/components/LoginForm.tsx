"use client"
import { Form, FormLabel, FormSubmit , FormInput, FormErrors } from "@/src/shared/components/forms/"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { SignInInput, SignInSchema } from "../schemas/authSchema"
import { signInAction } from "../actions/auth-actions"
import toast from "react-hot-toast"
import { redirect } from "next/navigation"

export default function LoginForm() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(SignInSchema),
    mode: 'all'
  })

  const onSubmit = async ( data: SignInInput ) => {
    const { success, error } = await signInAction( data )

    if(error) {
      toast.error(error)
    }
    if(success) {
      toast.success(success)
      redirect('/dashboard')
    }
  }

  return (
    <>
      <Form 
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormLabel htmlFor="email">E-mail</FormLabel>
        <FormInput
          type="email"
          id="email"
          placeholder="Ingresa tu E-Mail"
          {...register('email')}
        />
        {errors.email && <FormErrors>{errors.email.message}</FormErrors>}

        <FormLabel htmlFor="password">Password</FormLabel>
        <FormInput
          type="password" 
          id="password"
          placeholder="Ingresa tu Password"
          {...register('password')}
        />
        {errors.password && <FormErrors>{errors.password.message}</FormErrors>}

        <FormSubmit value="Iniciar Sesión"/>

      </Form>      
    </>
  )
}
