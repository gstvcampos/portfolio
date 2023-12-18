import Image from 'next/image'

export default function CustomIcon({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <Image
      priority={true}
      src={src}
      width={48}
      height={48}
      alt={alt}
      className={className}
    />
  )
}
