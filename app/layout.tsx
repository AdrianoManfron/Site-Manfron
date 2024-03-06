import '@/style/globals.css'
import type { Metadata } from 'next'

import { Sora } from 'next/font/google'

import { ThemeProvider } from '@/components/layouts/themeProvider'
import { cn } from '@/lib/utils'
import ModalProvider from '@/components/layouts/modal/modal-provider'
import Modal from '@/components/layouts/modal/modal'

export const sora = Sora({ weight: ["100", "200", "300", "400", "500", "600", "700", "800"], subsets: ['latin'] })

export const metadata: Metadata = {
  title: '( Adriano Manfron ) => { Desenvolvedor Front-End }',
  formatDetection: { telephone: false, email: false, address: false, date: false },
  description: 'Adriano Manfron | Desenvolvedor ReactJS/NextJS e Temas WordPress',
  authors: [{name: 'Adriano Manfron', url: 'https://manfron.com.br'}],
  creator: 'Adriano Manfron',
  publisher: 'Adriano Manfron',
  openGraph: {
    title: '( Adriano Manfron ) => { Desenvolvedor Front-End }',
    description: 'Adriano Manfron | Desenvolvedor ReactJS/NextJS e Temas WordPress',
    siteName: 'Adriano Manfron | Dev',
    url: 'https://manfron.com.br',
    locale: 'pt_BR',
    type: 'website',
    images: [{
      url: 'https://manfron.com.br/wp-content/uploads/2022/09/cropped-Logo_Adriano_Manfron_inverso.png',
      width: 200,
      height: 40,
      alt: 'Adriano Manfron | Dev'
    }],
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode,
}) {
  return (
    <html>
      <body className={cn(`bg-slate-300/80 text-slate-500 dark:bg-gradient-to-br dark:from-black dark:via-gray-700 to-gray-500 dark:text-white ${sora.className}`)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ModalProvider>
            {children}
            <Modal />
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}