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
            <header className={'sticky'}>
                <nav className={'container background-white  p-20 flex justify-between ml-auto mr-auto'}>
                    <div>ДЕВБАФ</div>
                    <div><Link href={'/'}><a>Идеи вот</a></Link></div>
                </nav>
            </header>
            <main>{children}</main>
            <style jsx scoped>{`
                .container {
                  max-width: 1260px !important;
                }
                .sticky {
                  position: sticky;
                  top: 0;
                }
                .flex {
                  display: flex;
                }
                .ml-auto {
                  margin-left: auto;
                }
                .mr-auto {
                  margin-right: auto;
                }
                .justify-between {
                  justify-content: space-between;
                }
                .p-10 {
                  padding: 10px;
                }
                .p-20 {
                  padding: 20px;
                }
                .p-30 {
                  padding: 30px;
                }
                .background-white {
                  background-color: white;
                }
            `}</style>
        </div>
    )
}
