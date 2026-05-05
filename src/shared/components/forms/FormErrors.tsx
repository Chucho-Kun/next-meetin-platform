
export default function FormErrors({children} : {children: React.ReactNode}) {
  return (
    <p
    className='w-full border-l-2 p-2 font-bold bg-red-100 border-red-600 text-red-600 text-sm'
    >
        {children}
    </p>
  )
}
