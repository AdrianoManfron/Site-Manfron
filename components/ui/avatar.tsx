import Image from "next/image";

type AvatarProps = {
    alt?: string
    className?: string
    width?: number
    height?: number
}

const Avatar = ( { alt = 'Adriano em 3D Cartoon', width = 500, height = 500, className }: AvatarProps ) => {
    return(
        <Image src='/eu-3d-cartoon.png' alt={alt} width={width} height={height} className={className} />
    )
}

export default Avatar;