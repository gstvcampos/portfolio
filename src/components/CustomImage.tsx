import Image from 'next/image'

function CustomImage({ src, alt }: { src: string; alt: string }) {
  return <Image priority={true} src={src} width={48} height={48} alt={alt} />
}

export default CustomImage
