import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
      <div className='text-2xl text-center' >Which Pokemon is Roundest</div>
      <div className='p-2'>

      <div className='border rounded p-8 flex justify-between max-w-2xl items-center' >
        <div className='bg-white w-16 h-16'></div>
        <div className='p-8'>VS</div>
        <div className='bg-white w-16 h-16'></div>
      </div>
      </div>
    </div>
  )
}
