"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"
import { CommunityInput, CommunitySchema } from "../schemas/communitySchema"
import { Form, FormSubmit } from "@/src/shared/components/forms"
import CommunityForm from "./CommunityForm"
import { selectCommunity } from "../types/community.types"
import { editCommmunityAction } from "../actions/community-actions"
import toast from "react-hot-toast"
import { redirect } from "next/navigation"

type Props = {
    community: selectCommunity
}

export default function EditCommunity({community}: Props) {
    const { name, description, image, id } = community
    const methods = useForm({
        resolver: zodResolver(CommunitySchema),
        mode: 'all',
        defaultValues: {
            name,
            description,
            image
        }
    })

    const onSubmit = async (data: CommunityInput) => {
        const { error, success } = await editCommmunityAction(data, id)
        if(error) toast.error(error)
        if(success){
            toast.success(success)
            redirect('/dashboard/communities')
        }
    }

  return (
    <FormProvider {...methods}>
        <Form
            onSubmit={(methods.handleSubmit(onSubmit))}
        >
            <CommunityForm />
            <FormSubmit value={'Guardar Cambios'} />
        </Form>
    </FormProvider>
  )
}
