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

            <style jsx scoped>{`
                .next-transition {
                transition: all 0.5s ease-in-out;
                }
                //header {
                //  position: fixed;
                //  top: 0;
                //  background-color: white;
                //  border-bottom: 1px solid lightslategray;
                //  opacity: 80%;
                //  z-index: 20;
                //}
                //.container {
                //  max-width: 1260px !important;
                //}
                //.sticky {
                //  position: sticky;
                //  
                //}
                //.h-200 {
                //  height: 300px;
                //}
                //.w-20 {
                //  width: 20%;
                //}
                //.w-60 {
                //  width: 60%;
                //}
                //.flex {
                //  display: flex;
                //}
                //.ml-auto {
                //  margin-left: auto;
                //}
                //.mr-auto {
                //  margin-right: auto;
                //}
                //.justify-between {
                //  justify-content: space-between;
                //}
                //.justify-center {
                //  justify-content: center;
                //}
                //.align-center {
                //  align-items: center;
                //}
                //.rounded {
                //  border-radius: 10px;
                //}
                //.p-0 {
                //  padding: 0;
                //}
                //.p-10 {
                //  padding: 10px;
                //}
                //.p-20 {
                //  padding: 20px;
                //}
                //.p-30 {
                //  padding: 30px;
                //}
                //.mt-15 {
                //  margin-top: 15px;
                //}
                //.mt-15:nth-child(1) {
                //  margin-top: 0;
                //}
                //.ml-15 {
                //  margin-left: 15px;
                //}
                //.list-style-none {
                //  list-style-type: none;
                //}
                //.background-light {
                //  background-color: lightcyan;
                //}
            `}</style>
        </div>
    )
}
