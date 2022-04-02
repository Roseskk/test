import Layout from '../../components/layout'
import Ideas from "../../components/ideas/idea";
import IdeaModal from "../../components/modal/IdeaModal";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Image from "next/image";
import Link from "next/link";


export default function IdeaPage({ideas,children}) {
    const router = useRouter();
    const [user,setUser] = useState()
    const [token,setToken] = useState()
    const [modal,setModal] = useState(false);
    const [idea,setIdea] = useState();
    const [overlay,setOverlay] = useState('hidden')
    const [ring,setRing] = useState('hidden')

    useEffect(async()=>{

        let res = await fetch('https://api-staging.devbuff.com/profile',{
            headers : {
                authorization : `Bearer ${localStorage.getItem('access_token')} `
            }
        })
        let currentUser = await res.json()
        if (!currentUser.id) return
        setToken(localStorage.getItem('access_token'))
        setUser(currentUser)
    },[])
    const handleModal = async(id) => {
        const res = await fetch(`https://api-staging.devbuff.com/idea/${id}`)
        const content = await res.json()
        setIdea(content);
        setModal(true);
    }
    function handleExit() {
        setModal(false)
    }
    function handleId(id) {

        // setRing(true)
        // router.push(`idea/${id}`)
        if (!router.query.id) {
            setRing('fixed h-72 left-1/2 top-1/2 z-9000 bg-transparent translate-y-50 translate-x-50 block')
            setOverlay('fixed w-screen h-screen left-0 top-0 z-30 bg-gray-400 opacity-60')
        }
    }
    const handlePrevPage = () => {
        if (router.query.page === '1') return
        let page = parseInt(router.query.page) - 1
        router.push(`${page}`)
    }

    const handleNextPage = () => {
        let page = parseInt(router.query.page) + 1
        router.push(`${page}`)
    }
    const handleSignIn = () => {
        location.assign('https://api-staging.devbuff.com/oAuth/external/init/github/client/web')
        if (location.host !== 'https://api-staging.devbuff.com') {
            setRing('fixed h-72 left-1/2 top-1/2 z-9000 bg-transparent translate-y-50 translate-x-50 block')
            setOverlay('fixed w-screen h-screen left-0 top-0 z-30 bg-gray-400 opacity-60')
        }
    }
    const  handleSignOut = () => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        localStorage.removeItem('token_type')
        location.reload()
    }

    return(
        <Layout>
            <div className={ring}>
                <Image src={'/images/load.svg'}
                       width={100}
                       height={100}
                />
            </div>
            <section className={'max-w-screen-xl p-4 mx-auto justify-between flex'}>
                <nav className={'h-72 w-2/12 sticky top-16 mr-3'}>
                    {
                        !token
                            ? <div className={'flex items-center rounded bg-gray-300 flex-col  p-3'}>
                                <span className={'text-base'}>Войти с помощью</span>
                                {
                                    <button type={"button"} className={'w-full rounded bg-blue-400 mt-2 mb-2  '} onClick={handleSignIn}><div className={'translate-y-1'}><Image priority width={30} height={30} src={'/images/Octocat.png'} /></div> </button>
                                }
                                <span className={'text-xs'}>Авторизируйтесь для возможности просмотра и публикации идей</span>
                            </div>
                            :  null
                    }
                    <ul className={'list-none p-0'}>
                        {
                            token
                                ? <>
                                    <li className={'mt-3.5'}>
                                        <Link href={'/'}>
                                            <a className={'flex items-center opacity-60 transition ease-in-out hover:opacity-100 duration-500  hover:no-underline '}>
                                                <div className={'flex items-center '}>
                                                    {
                                                        !user
                                                            ? <div className={'flex items-center p-0  rounded '}>
                                                                <Image width={40} height={40} src={`/images/profile.jpeg`}/>
                                                            </div>
                                                            :   <div className={'flex items-center p-0  rounded '}>
                                                                <Image width={40} height={40} src={`https://api-staging.devbuff.com/photo/profile/${user.id}`}/>
                                                            </div>
                                                    }
                                                    <div className={'flex flex-col items-center text-xs'}>
                                                        <span className={'ml-2 text-xs no-underline text-black'}>{ !user ? null :<> { user.firstName === null ? <span>Name LastName</span> :<span> {user.firstName} {user.lastName} </span> }</> }</span>
                                                        <span className={'text-gray-400'}>@{ !user ? <span>@...</span> :  user.userName}</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className={'mt-3.5'}><Link href={'/'}><a className={'flex items-center opacity-60 transition ease-in-out hover:opacity-100 duration-500  hover:no-underline '}><div className={'flex items-center '}><div className={'flex items-center p-2 bg-green-300 rounded '}><Image width={20} height={20} src={'/images/dashboard-svgrepo-com.svg'}/></div><span className={'ml-2 no-underline'}>Дашборд</span></div></a></Link></li>
                                    <li className={'mt-3.5'}><Link href={'/'}><a className={'flex items-center opacity-60 transition ease-in-out hover:opacity-100 duration-500  hover:no-underline '}><div className={'flex items-center '}><div className={'flex items-center p-2 bg-pink-300 rounded '}><Image width={20} height={20} src={'/images/settings-svgrepo-com.svg'}/></div><span className={'ml-2 no-underline'}>Настройки</span></div></a></Link></li>
                                    <li className={'mt-3.5'}><Link href={'/'}><a className={'flex items-center opacity-60 transition ease-in-out hover:opacity-100 duration-500  hover:no-underline '}><div className={'flex items-center '}><div className={'flex items-center p-2  bg-cyan-100 rounded  '}><Image width={20} height={20} src={'/images/idea-svgrepo-com.svg'}/></div><span className={'ml-2 no-underline'}>Идеи</span></div></a></Link></li>
                                </>
                                : <li className={'mt-3.5'}><Link href={'/'}><a className={'flex items-center opacity-60 transition ease-in-out hover:opacity-100 duration-500  hover:no-underline '}><div className={'flex items-center '}><div className={'flex items-center p-2  bg-cyan-100 rounded  '}><Image width={20} height={20} src={'/images/idea-svgrepo-com.svg'}/></div><span className={'ml-2 no-underline'}>Идеи</span></div></a></Link></li>
                        }
                    </ul>
                </nav>
                <div className={'w-8/12'}>
                    <h1>Идеи</h1>
                    <Ideas handleModal={handleModal} ideas={ideas} />
                    <IdeaModal handleId={handleId} handleExit={handleExit} modal={modal} idea={idea} />
                    <div className={'flex justify-center mt-2 gap-80'}>
                        {
                            router.query.page === '1'
                                ? <button disabled className={'bg-gray-500 opacity-40 rounded p-2 cursor-pointer text-white'}>Назад</button>
                                : <button onClick={handlePrevPage} className={'bg-gray-500 rounded p-2 cursor-pointer text-white'}>Назад</button>
                        }
                        {
                            ideas.length < 10
                                ? <button disabled  className={'bg-gray-500 opacity-40 rounded p-2 cursor-pointer text-white'}>Вперед</button>
                                : <button onClick={handleNextPage} className={'bg-gray-500 rounded p-2 cursor-pointer text-white'}>Вперед</button>
                        }
                    </div>
                </div>
                <div className={'w-3/12 ml-2.5 sticky h-72 top-20'}>DevBuff Specs container[tree] ....</div>
                <div className={overlay}></div>
                {children}
            </section>
        </Layout>
    )
}

IdeaPage.getInitialProps = async (ctx)=> {
    const res = await fetch(`https://api-staging.devbuff.com/idea/?page=${ctx.query.page}&sortBy=lastUpdate&specialists=&languages=`)
    const posts = await res.json();
    return {
        ideas : posts.ideas
    }
}
// export const getStaticProps = async(ctx) => {
//     console.log(ctx.params)
//     return {
//         props : {
//
//         }
//     }
//     // const page = await fetch(`https://api-staging.devbuff.com/idea/?page=${ctx.params.page}&sortBy=lastUpdate&specialists=&languages=`)
// }
//
// export const getStaticPaths = async () => {
//
// }