import {useRouter} from "next/router";
import renderHTML from 'react-render-html';
import Image from "next/image";
import LayoutIdea from "../../components/layoutIdea";
import {useEffect, useState} from "react";



export default function Idea({ideaID : ideas}) {
    // const [data,setData] = useState(ideas)
    const router = useRouter();
    // console.log(ideas)


    return(
        <LayoutIdea>
            <div className={'w-8/12'}>
                <div className={'flex items-center gap-20 justify-between rounded shadow-md shadow-gray-300 bg-white p-2'}>
                    <div className={'flex items-center'}>
                        <Image
                            src={`https://api-staging.devbuff.com/photo/profile/${ideas.ownerIdea.id}`}
                            width={80}
                            height={80}
                        />
                        <span className={'ml-1.5 sizeM helvetica'}>{ideas.ownerIdea.userName}</span>
                    </div>
                    <div className={'flex flex-col items-start'}>
                        <span className={'text-xs helvetica text-gray-300'}>Последнее обновление</span>
                        <span className={'text-sm helvetica'}>{new Date(ideas.lastUpdateDate).toLocaleDateString()}</span>
                    </div>
                    <div className={'flex flex-col items-start'}>
                        <span className={'text-xs helvetica text-gray-300'}>Статус</span>
                        <span className={'text-sm helvetica'}>{ideas.status}</span>
                    </div>
                </div>
                <div className={'h-96 rounded shadow-md shadow-gray-300 bg-white p-3 mt-3 overflow-hidden'}>
                    <div className={' break-all h-80 overflow-scroll'}>
                        <p className={'text-xl helvetica  text-center m-0'}>Описание</p>
                        <hr className={'m-0 p-0 shadow-md shadow-black rounded opacity-70'} />
                        {renderHTML(ideas.text)}
                    </div>
                </div>
            </div>
            <div className={'ml-2 w-2/12'}>
                <ul>
                    {
                        ideas.specialist.map((item,idx)=>{
                            return(
                                <li key={idx} className={'rounded shadow-md shadow-gray-300 p-3 mt-5'}>
                                    <div>
                                        <h2>{item.name}</h2>
                                        <div>
                                            <span className={'text-xs text-gray-400'}>Стэк языков</span>
                                            <ul className={'flex flex-wrap gap-5'}>
                                                {
                                                    item.languages.length === 0
                                                    ?  <li key={idx}>
                                                            <span className={'text-sm rounded bg-gray-500 text-gray-200 p-1 helvetica'}>undefined !</span>
                                                        </li>
                                                    :
                                                    item.languages.map((item,idx)=>{
                                                                return(
                                                                    <li key={idx} className={'rounded bg-gray-300 py-0.5 px-1 text-center'}>
                                                                        <span className={'text-xs   helvetica'}>{item.name}</span>
                                                                    </li>
                                                                )}
                                                    )}
                                            </ul>
                                        </div>
                                        <div className={'flex-wrap flex mt-2'}>
                                            <span className={'text-xs text-gray-400'}>Стэк технологий</span>
                                            <ul className={'flex flex-wrap gap-5'}>
                                                {
                                                    item.languages.map((item,idx)=>{
                                                        return(
                                                            item.frameworks.map((item,idx)=>{
                                                                return(
                                                                    <li key={idx} className={' rounded bg-gray-300 py-0.5 px-1 text-center'}>
                                                                        <span className={'text-xs  helvetica'}>{item.name}</span>
                                                                    </li>
                                                                )
                                                            })
                                                        )}
                                                    )}
                                            </ul>
                                        </div>
                                        <hr className={'mt-1 p-0 border-none shadow-none h-0.5 opacity-25 text-gray-400 bg-gray-400'} />
                                        <div>
                                            <button className={'mt-2 py-1 px-1.5 border-none text-white bg-blue-400 w-full pointer text-base rounded'}>Откликнуться</button>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </LayoutIdea>
    )
}

Idea.getInitialProps = async (ctx) => {
    const res = await fetch(`https://api-staging.devbuff.com/idea/${ctx.query.idea}`)
    const idea = await res.json()

    return {
        ideaID : idea
    }
}
// export const getStaticPaths = async () => {
//     const res = await fetch('https://api-staging.devbuff.com/idea/?page=1&sortBy=lastUpdate&specialists=&languages=')
//     const allIdeas = await res.json()
//     const paths = allIdeas.ideas.map(item=>{
//         return({
//             params : { idea : item.id.toString() },
//         })
//     })
//     return {
//         paths,
//         fallback : false
//     }
// }