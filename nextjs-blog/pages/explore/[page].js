import LayoutIdea from "../../components/layoutIdea";
import Ideas from "../../components/ideas/idea";
import IdeaModal from "../../components/modal/IdeaModal";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Image from "next/image";


export default function IdeaPage({ideas,children}) {
    const router = useRouter();
    const [modal,setModal] = useState(false);
    const [idea,setIdea] = useState();
    const [overlay,setOverlay] = useState('hidden')
    const [ring,setRing] = useState('hidden')


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
    console.log(ideas)

    return(
        <LayoutIdea>
            <div className={ring}>
                <Image src={'/images/load.svg'}
                       width={100}
                       height={100}
                />
            </div>
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
        </LayoutIdea>
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