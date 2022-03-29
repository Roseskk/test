import {useRouter} from "next/router";
import renderHTML from 'react-render-html';
import Image from "next/image";
import LayoutIdea from "../components/layoutIdea";
import {useEffect, useState} from "react";



export default function Idea({ideaID : ideas}) {
    const [data,setData] = useState(ideas)
    const router = useRouter();

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
                <div className={'h-96 rounded shadow-md shadow-gray-300 bg-white p-3 mt-3 scroll'}>
                    <div className={'lucida break-all'}>
                        <p className={'text-xl helvetica text-center m-0'}>Описание</p>
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
                                            <ul className={'flex gap-5'}>
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
                                        <div>
                                            <span className={'text-xs text-gray-400'}>Стэк технологий</span>
                                            <ul className={'flex gap-5'}>
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
                <style jsx>{`
              //.btn {
              //  margin-top: 20px;
              //  padding: 10px 15px 10px 15px;
              //  border: none;
              //  color: white;
              //  background-color: #0070f3;
              //  border-radius: 9px;
              //  width: 100%;
              //
              //  cursor: pointer;
              //  font-family: Helvetica,sans-serif;
              //  font-size: 17px;
              //  }
                //.w-100 {
                //max-width: 80px;
                //}
                //hr {
                //margin: 0;
                //padding: 0;
                //box-shadow: 1px 2px 20px black;
                //border-radius: 10px;
                //opacity: 25%;
                //}
                //hr:before {
                //display: block;
                //content: '';
                //width: 100%;
                //height: 3px;
                //border-radius: 15px;
                //box-shadow: 1px 2px 20px black;
                //opacity: 25%;
                //}
                //.hr {
                //margin-top: 10px;
                //padding: 0;
                //border: none;
                //box-shadow: none;
                //height: 1px;
                //color: lightslategray;
                //background-color: lightslategray;
                //opacity: 25%;
                //}
                //ul {
                //list-style-type: none;
                //padding: 0;
                //margin: 0;
                //}
                //.h-400 {
                //height: 400px;
                //}
                //.w-20 {
                //width: 20%;
                //}
                //.ml-20 {
                //margin-left: 20px;
                //}
                //.flex {
                //display: flex;
                //}
                //.flex-col {
                //flex-direction: column;
                //}
                //.align-center {
                //align-items: center;
                //}
                //.space-between {
                //justify-content: space-between;
                //}
                //.gap-20 {
                //gap: 20px;
                //}
                //.p-5 {
                //padding: 5px;
                //}
                //.p-10 {
                //padding: 10px;
                //}
                //.p-20 {
                //padding: 20px;
                //}
                //.p-30 {
                //padding: 30px;
                //line-height: 1.9;
                //}
                //.mt-20 {
                //margin-top: 20px;
                //}
                //.mt-30 {
                //margin-top: 30px;
                //}
                //.m-0 {
                //margin: 0;
                //}
                //.w-60 {
                // width: 60%;
                //}
                //.box-shadow {
                //    box-shadow: 1px 5px 5px lightgray;
                //}
                //.bg-white {
                //background-color: white;
                //}
                //.rounded {
                //border-radius: 16px;
                //}
                //.sizeXS {
                //font-size: 11px;
                //}
                //.sizeXSS {
                //font-size: 9px;
                //}
                //.sizeS {
                //font-size: 14px;
                //}
                //.sizeM {
                //font-size: 19px;
                //}
                //.sizeXL {
                //font-size: 25px;
                //}
                //.text-center {
                // text-align: center;
                //}
                //.helvetica {
                //font-family: Helvetica,sans-serif;
                //}
                //.lucida {
                //font-family: LucidaConsole,sans-serif;
                //}
                //.lightgray {
                //color: lightslategray;
                //}
                //.scroll {
                //overflow-y: scroll;
                //}
                //.word-break {
                //word-break: break-all;
                //}
                //.border {
                //background-color: lightslategray;
                //border-radius: 10px;
                //margin-left: 10px;
                //color: #fcfcfc;
                //}
                //.border-10 {
                //background-color: lightslategray;
                //border-radius: 7px;
                //padding: 5px 10px 5px 10px;
                //color: #fcfcfc;
                //}
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