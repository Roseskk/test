import Head from 'next/head'
import Link from 'next/link'
import Image from "next/image";


export default function LayoutIdea ({children}) {
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
            <header className={'sticky top-0 bg-white border-b-2 border-b-gray-300 z-10 opacity-80 shadow-sm shadow-gray-300 '}>
                <nav className={'max-w-screen-xl bg-white  p-4 flex justify-between mx-auto'}>
                    <Link href={'/'}><a className={'cursor-pointer hover:no-underline text-black'}>ДIФ БUF</a></Link>
                    <div><Link href={'/'}><a>Идеи вот</a></Link></div>
                </nav>
            </header>
            <main>
                <section className={'max-w-screen-xl p-4 mx-auto justify-between flex'}>
                    <nav className={'h-72 w-2/12 sticky'}>
                        <ul className={'list-none p-0'}>
                            <li className={'mt-3.5'}><Link href={'/'}><a className={'flex items-center opacity-60 transition ease-in-out hover:opacity-100 duration-500  hover:no-underline '}><div className={'flex items-center '}><div className={'flex items-center p-2  bg-cyan-100 rounded  '}><Image width={40} height={40} src={'/images/idea-svgrepo-com.svg'}/></div><span className={'ml-2 no-underline'}>Идеи</span></div></a></Link></li>
                            <li className={'mt-3.5'}><Link href={'/'}><a className={'flex items-center opacity-60 transition ease-in-out hover:opacity-100 duration-500  hover:no-underline '}><div className={'flex items-center '}><div className={'flex items-center p-2 bg-green-300 rounded '}><Image width={40} height={40} src={'/images/dashboard-svgrepo-com.svg'}/></div><span className={'ml-2 no-underline'}>Дашборд</span></div></a></Link></li>
                            <li className={'mt-3.5'}><Link href={'/'}><a className={'flex items-center opacity-60 transition ease-in-out hover:opacity-100 duration-500  hover:no-underline '}><div className={'flex items-center '}><div className={'flex items-center p-2 bg-pink-300 rounded '}><Image width={40} height={40} src={'/images/settings-svgrepo-com.svg'}/></div><span className={'ml-2 no-underline'}>Настройки</span></div></a></Link></li>
                        </ul>
                    </nav>
                    {children}
                </section>
            </main>
        </div>
    )
}
