import { FormErrors, FormInput, FormLabel, FormSubmit, FormTextArea } from "@/src/shared/components/forms";
import { useFormContext } from "react-hook-form";
import { CommunityInput } from "../schemas/communitySchema";

export default function CommunityForm() {

    const { register, formState: { errors } } = useFormContext<CommunityInput>()

    return (
        <>
            <FormLabel htmlFor="name">Nombre Comunidad</FormLabel>
            <FormInput 
                id="name"
                type="text"
                placeholder="Titulo Comunidad"
                {...register('name')}
            />
            {errors.name && <FormErrors>{errors.name.message}</FormErrors>}

            <FormLabel htmlFor="name">Descripcion Comunidad</FormLabel>
            <FormTextArea
                id="description"
                placeholder="Descripcion de la comunidad"
                {...register('description')}
            />
            {errors.description && <FormErrors>{errors.description.message}</FormErrors>}

        </>
    )
}