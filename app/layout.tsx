import Navbar from '@/components/Navbar';
import './globals.css'
import type { Metadata } from 'next';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Welcome to KipDEV - Your Path to Online Excellence! ',
  description: 'At KipDEV, we specialize in crafting stunning web solutions that elevate your online presence to new heights. As a dedicated freelance web developer, I bring a wealth of expertise to the table, ensuring your website is not only visually captivating but also optimized to rank prominently on search engines.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='min-h-[100vh] flex flex-col'>
        <Navbar />
        <main>
        {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
