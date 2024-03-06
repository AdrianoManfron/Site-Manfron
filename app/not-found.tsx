import Footer from '@/components/layouts/footer'
import Header from '@/components/layouts/header'
import Link from 'next/link'
import { notFound } from '@/schema/schema'
 
export default function NotFound() {
  return (
    <div className='flex flex-col h-screen'>
        <Header />
        <div className='flex flex-col flex-grow gap-8 justify-center items-center'>
            <h2 className=''>{notFound.page}</h2>
            <p>{notFound.warning}</p>
            <Link href={notFound.path} className="font-medium pt-4 pb-4 pr-8 pl-8 rounded-lg text-white
                transition ease-in-out bg-gradient-to-br from-secondary to-accent dark:from-black dark:to-accent hover:-translate-y-1 hover:scale-110 duration-300">
                  {notFound.buttonBack}
            </Link>
        </div>
        <Footer />
    </div>
  )
}