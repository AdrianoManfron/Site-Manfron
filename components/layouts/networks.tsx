import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"
import Link from "next/link";
import { contactNetworks } from "@/schema/schema";

const links: { path: string; icon: any}[] = [{
    path: 'tel:5551997960502',
    icon: <FaPhoneAlt />
}, {
    path: 'https://wa.me/5551997960502',
    icon: <FaWhatsapp />
}, {
    path: 'mailto:adriano@manfron.com.br',
    icon: <FaEnvelope />
}, {
    path: 'https://www.linkedin.com/in/adriano-manfron/',
    icon: <FaLinkedin />
}, {
    path: 'https://github.com/AdrianoManfron',
    icon: <FaGithub />
}]

const Networks = () => {
  return (
    <div className="flex flex-col justify-center items-center">
        <div className="flex flex-wrap justify-center items-center gap-3 p-5 relative">
            {links.map((links, index) => (
                <Link key={index} href={links.path} target="_blank" prefetch={false} className="text-2xl p-2 text-white bg-accent rounded-full
                    cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 relative">
                    {links.icon}
                </Link>
            ))}
        </div>
        <span className="flex items-center gap-x-2"><FaPhoneAlt className='text-xl text-accent' />{contactNetworks.phone}</span>
        <span className="flex items-center gap-x-2"><FaWhatsapp className='text-xl text-accent' />{contactNetworks.phone}</span>
        <span className="flex items-center gap-x-2"><FaEnvelope className='text-xl text-accent' />{contactNetworks.email}</span>
    </div>
  )
}

export default Networks