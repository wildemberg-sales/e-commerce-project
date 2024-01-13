import Image from 'next/image'
import styles from './page.module.css'
import Header from '../components/headerComponent/Header.js'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header/>
      <Link href={`/produto/1`}>produto único</Link>
      <Link href={"/produtos"}>produtos geral</Link>
    </>
  )
}
