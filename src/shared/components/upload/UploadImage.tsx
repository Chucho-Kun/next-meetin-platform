import { UploadDropzone } from "@/src/shared/utils/uploadthings";
import { useState } from "react";
import Image from "next/image";
import { useFormContext } from "react-hook-form";
import { CommunityInput } from "@/src/features/communities/schemas/communitySchema";
import { FormErrors } from "../forms";

export default function UploadImage() {

  const { formState: { errors }, setValue } = useFormContext<CommunityInput>()
  const [ uploadedImage, setUploadedImage ] = useState('')

  return (
    <>
      <UploadDropzone
          endpoint={'meetiUploader'}
          className="ut-button:bg-orange-600 ut-label:uppercase hover:ut-button:bg-orange-700"
          onClientUploadComplete={(res) => {
              setUploadedImage(res[0].ufsUrl)
              setValue('image', res[0].ufsUrl, {shouldValidate: true})
          }}
          content={{
              button: 'Subir imagen',
              label: 'Elije o arrastra un imagen aqui (max 1M)'
          }}
          config={{
              mode: 'auto'
          }}
      />

      {errors.image && <FormErrors>{errors.image.message}</FormErrors>}

      {uploadedImage && (
          <>
              <p
                  className="text-lg font-bold"
              >Imagen Nueva:</p>
              <Image
                  src={uploadedImage}
                  alt="Imagen Publicada"
                  width={300}
                  height={200}
              />
          </>
      )}
    </>
  )
}
