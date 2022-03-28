import {useRouter} from "next/router";
import Image from "next/image";
import LayoutIdea from "../components/layoutIdea";


export default function Idea({ideaID}) {
    console.log(ideaID)
    return(
        <LayoutIdea>
            <div className={'w-60'}>
                <div>
                    <div>
                        <Image
                            src={'/profle/ims.jpeg'}
                            width={40}
                            height={40}
                        />
                        <span>name</span>
                    </div>
                    <div>
                        <span>Последнее обновление</span>
                        <span>time</span>
                    </div>
                    <div>
                        <span>Статус</span>
                        <span>status</span>
                    </div>
                </div>
                <div>
                    <p>
                        text
                    </p>
                </div>
            </div>
            <div>
                <ul>
                    <li>
                        <div>
                            <h2>spec cfg</h2>
                            <div>
                                <span>Стэк языков</span>
                                <ul><li><span>lang name</span></li></ul>
                            </div>
                            <div>
                                <span>Стэк технологий</span>
                                <ul><li><span>lang name</span></li></ul>
                            </div>
                            <div>
                                <button>Откликнуться</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
                <style jsx>{`
                .flex {
                display: flex;
                }
                .w-60 {
                 width: 60%;
                }
                `}</style>
        </LayoutIdea>
    )
}
export const getStaticProps = async (ctx) => {
    const res = await fetch(`https://api-staging.devbuff.com/idea/${ctx.params.idea}`)
    const idea = await res.json()
    return {
        props : {
            ideaID : idea
        }
    }
}
export const getStaticPaths = async () => {
    const res = await fetch('https://api-staging.devbuff.com/idea/?page=1&sortBy=lastUpdate&specialists=&languages=')
    const allIdeas = await res.json()
    const paths = allIdeas.ideas.map(item=>{
        return({
            params : { idea : item.id.toString() },
        })
    })
    return {
        paths,
        fallback : false
    }
}