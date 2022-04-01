import Image from "next/image";
import uuid from 'react-uuid'


export default function Ideas (props) {

    return(
        <>
            {
                props.ideas  ?
                    <ul className={'list-style-none p-0'}>
                        {
                            props.ideas.map((item,idx)=>{
                                return(
                                    <li className={'rounded-2xl bg-white shadow-md shadow-gray-300 mt-6 p-2  relative hover:scale-105 transition ease-in-out duration-500'} key={uuid()}>
                                        <div className={''}>
                                            <div className={'flex items-center w-full overflow-hidden rounded '}>
                                                <Image
                                                    priority
                                                    src={`https://api-staging.devbuff.com/photo/profile/${item.ownerIdea.id}`}
                                                    width={40}
                                                    height={40}
                                                />
                                                <h3 className={'ml-1.5 sizeS'}>{item.ownerIdea.userName}</h3>
                                                <div className={'ml-1.5'}>
                                                    <span className={'text-xs ml-0.5'}>{item.ownerIdea.firstName}</span>
                                                    <span className={'text-xs ml-0.5'}>{item.ownerIdea.lastName}</span>
                                                    <hr className={'border-solid ml-0.5'}/>
                                                </div>
                                            </div>
                                            <button onClick={()=>props.handleModal(item.id)} className={'absolute right-0 top-0 border-none bg-white shadow shadow-sm rounded-md pointer'}><div className={'py-3 px-5 rounded-bl-md rounded-tr-md '}>Посмотреть</div></button>
                                            <h2 className={'text-base mt-3'}>{item.name}</h2>
                                            <div className={'rounded  bg-gray-200 p-3 rounded word-break'}>
                                                <p className={'m-0'}>{item.description}</p>
                                            </div>
                                            <h4 className={'mt-3 text-xs text-gray-300'}>Специальности</h4>
                                            <ul className={'flex flex-wrap list-none p-0'}>
                                                {
                                                    item.requirements.map((item,idx)=>{
                                                        return(
                                                            <li className={'ml-3 w-40 rounded-sm shadow shadow-lg text-center p-1 mt-1'} key={uuid()}>
                                                                <span className={'text-xs uppercase '}>{item.name}</span>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                            <h4 className={'mt-1.5 text-xs text-gray-300'}>Языки программирования</h4>
                                            <ul className={'flex flex-wrap list-none p-0'}>
                                                {
                                                    item.requirements.map((item,idx)=>{
                                                        return(
                                                            item.languages.map((item,idx)=>{
                                                                if (item.name) {
                                                                    return(<li className={'ml-1 w-40 rounded-sm shadow shadow-lg text-center p-1 mt-1'} key={uuid()}><span className={'text-xs uppercase'}>{item.name}</span></li>)
                                                                }
                                                                return null
                                                            })
                                                        )
                                                    })
                                                }
                                            </ul>
                                            <h4 className={'mt-2 text-xs text-gray-300'} >Технологии в проекте</h4>
                                            <ul className={'flex flex-wrap list-none p-0'}>
                                                {
                                                    item.requirements.map(item=>{
                                                        return(
                                                            item.languages.map(item=>{
                                                                if (item.name) {
                                                                    return item.technologies.map(item=>{
                                                                        return(
                                                                            <li className={'ml-1 w-40 rounded-sm shadow shadow-lg text-center p-1 mt-1'} key={idx}>
                                                                                <span className={'text-xs uppercase'}>{item.name}</span>
                                                                            </li>
                                                                        )
                                                                    })
                                                                }
                                                                return null
                                                            })
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </li>
                                )
                            })
                        }
                        <style jsx>{``}</style>
                    </ul>
                             :
                    <div> </div>
            }
        </>
    )
}
