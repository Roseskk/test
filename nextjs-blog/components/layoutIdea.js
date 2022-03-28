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
            <header className={'sticky'}>
                <nav className={'container background-white  p-20 flex justify-between ml-auto mr-auto'}>
                    <div>ДЕВБАФ</div>
                    <div><Link href={'/'}><a>Идеи вот</a></Link></div>
                </nav>
            </header>
            <main>
                <section className={'container p-20 ml-auto mr-auto justify-between flex'}>
                    <nav className={'h-200 w-20 sticky'}>
                        <ul className={'list-style-none p-0'}>
                            <li className={'mt-15'}><Link href={'/'}><a className={'flex align-center '}><div className={'flex align-center'}><div className={'p-10 background-light rounded'}><Image width={40} height={40} src={'/images/idea-svgrepo-com.svg'}/></div><span className={'ml-15'}>Идеи</span></div></a></Link></li>
                            <li className={'mt-15'}><Link href={'/'}><a className={'flex align-center '}><div className={'flex align-center'}><div className={'p-10 background-light rounded'}><Image width={40} height={40} src={'/images/dashboard-svgrepo-com.svg'}/></div><span className={'ml-15'}>Дашборд</span></div></a></Link></li>
                            <li className={'mt-15'}><Link href={'/'}><a className={'flex align-center '}><div className={'flex align-center'}><div className={'p-10 background-light rounded'}><Image width={40} height={40} src={'/images/settings-svgrepo-com.svg'}/></div><span className={'ml-15'}>Настройки</span></div></a></Link></li>
                        </ul>
                    </nav>
                    {children}
                </section>
            </main>

            <style jsx scoped>{`
                header {
                  position: fixed;
                  top: 0;
                  background-color: white;
                  border-bottom: 1px solid lightslategray;
                  opacity: 80%;
                  z-index: 20;
                }
                .container {
                  max-width: 1260px !important;
                }
                .sticky {
                  position: sticky;
                  
                }
                .h-200 {
                  height: 300px;
                }
                .w-20 {
                  width: 20%;
                }
                .w-60 {
                  width: 60%;
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
                .justify-center {
                  justify-content: center;
                }
                .align-center {
                  align-items: center;
                }
                .rounded {
                  border-radius: 10px;
                }
                .p-0 {
                  padding: 0;
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
                .mt-15 {
                  margin-top: 15px;
                }
                .mt-15:nth-child(1) {
                  margin-top: 0;
                }
                .ml-15 {
                  margin-left: 15px;
                }
                .list-style-none {
                  list-style-type: none;
                }
                .background-light {
                  background-color: lightcyan;
                }
            `}</style>
        </div>
    )
}
