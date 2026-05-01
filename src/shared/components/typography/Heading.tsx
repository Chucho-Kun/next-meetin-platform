import clsx from "clsx"
type Props = {
    children: React.ReactNode
    level?: 1|2|3|4|5|6
    className?: string
}

export default function Heading({children , level = 1, className } : Props) {

  const Tag : React.ElementType = `h${level}`;

  return (
    <Tag className={clsx("font-black uppercase text-center", className)}>{children}</Tag>
  )
}
