import { FieldsetHTMLAttributes, FormHTMLAttributes } from 'react'
import { clsx } from "clsx"

type Props = FormHTMLAttributes<HTMLFormElement>

export default function Form( props : Props ) {

    const { className } = props

  return (
    <form {...props} className={ clsx("w-full mt-10 space-y-3 p-5 ", className)}>
        { props.children }
    </form>
  )   
}
