import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=' flex flex-col w-full items-center'>
      <div className='h-60'></div>
      Infos sur le projet
    </main>
  )
}

