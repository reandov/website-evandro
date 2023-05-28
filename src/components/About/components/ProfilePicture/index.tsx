import Image from 'next/image'

interface ProfilePictureProps {
  src: string
  alt: string
}

export function ProfilePicture({ src, alt }: ProfilePictureProps) {
  return (
    <div>
      <div className="w-52 lg:w-96">
        <Image
          src={src}
          className="animate-smoothBounce rounded-3xl "
          alt={alt}
          width={850}
          height={850}
        />
      </div>
    </div>
  )
}
