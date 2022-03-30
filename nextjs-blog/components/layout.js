import Head from 'next/head'
import Link from 'next/link'


export default function Layout ({children, home}) {
    return(
        <div >
            <Head>
                <link rel='icon' href='/favicon.ico'/>
                <meta
                    name='description'
                    content='DevBuff react,next,next.js'
                />
                <title>DevBuff react</title>
            </Head>
            <header className={'sticky top-0 bg-white border-b-2 border-b-gray-300 z-10 opacity-80 shadow-sm shadow-gray-300  '}>
                <nav className={'max-w-screen-xl bg-white p-4 flex justify-between mx-auto'}>
                    <Link href={'/'}><a className={'cursor-pointer hover:no-underline text-black'}>ДIФ БUF</a></Link>
                    <div><Link href={'/'}><a>Идеи вот</a></Link></div>
                </nav>
            </header>
            <main>{children}</main>
        </div>
    )
}
