import Image from "next/image";
import Link from "next/link";

const FrameProject = ({ image, alt, description, tag, site, path, button  }: any) => {
    return(
        <>
            <Link href={site} target="_blank" prefetch={false} className="w-full">
                <Image
                    src={image}
                    alt={alt}
                    width={600}
                    height={600}
                    className="object-cover aspect-square rounded-md"
                />
            </Link>
            <div className="px-6 text-center">
                <h3 className="pb-4">{alt}</h3>
                <h4 className="pb-4">{description}</h4>
                <ul className="flex flex-wrap justify-center items-center pb-8 gap-2">
                    {tag.map((tag: string[], index: number) => (
                        <li key={index} className="bg-secondary dark:bg-slate-600 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">{tag}</li>
                    ))}
                </ul>
                <button className="bg-secondary text-white pt-2 pb-2 pr-4 pl-4 rounded-md text-sm
                    hover:bg-accent dark:bg-slate-600 dark:hover:bg-accent transition ease-in-out duration-500">
                    <Link href={path} target="_blank" prefetch={false}>{button}</Link>
                </button>
            </div>
        </>
    )
}

export default FrameProject;