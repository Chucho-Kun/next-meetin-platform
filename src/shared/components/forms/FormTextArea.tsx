import { TextareaHTMLAttributes } from 'react'

type Props = TextareaHTMLAttributes<HTMLAreaElement>

export default function FormTextArea(props: Props) {
  return <textarea {...props} className='border border-slate-200 w-full p-2 h-40' />
}
