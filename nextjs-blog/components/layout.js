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
            <style jsx scoped>{`
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
                //  top: 0;
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
                //.p-10 {
                //  padding: 10px;
                //}
                //.p-20 {
                //  padding: 20px;
                //}
                //.p-30 {
                //  padding: 30px;
                //}
                //.background-white {
                //  background-color: white;
                //}
            `}</style>
        </div>
    )
}
