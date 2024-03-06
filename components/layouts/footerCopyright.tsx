import Link from "next/link";

const currentDate = new Date();
const year = currentDate.getFullYear()

const FooterCopyright = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="pb-2 sm:pb-0">Copyright © {year} - Todos os direitos reservados</div>
        <div>Desenvolvido por <Link href='https://manfron.com.br' target="_blank" className="text-accent hover:underline">Adriano Manfron</Link></div>
    </div>
  )
}

export default FooterCopyright;