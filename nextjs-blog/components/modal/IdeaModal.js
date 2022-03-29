import Image from "next/image";
import renderHTML from 'react-render-html';


export default function IdeaModal (props) {

    return(
        (props.modal)
            ? <div>
                <div className={'fixed p-5 top-1/2 left-1/2 translate-y-50 translate-x-50 z-40 opacity-100 w-700 overflow-hidden rounded '}>
                    <div className={'h-60  rounded  overflow-scroll'}>
                        <div className={'relative flex flex-col w-full bg-white py-5 px-2 rounded  shadow-md shadow-gray-300 '}>
                            <div className={'flex justify-between items-center sticky top-2'}>
                                <button onClick={()=>props.handleExit()} className={'sticky border-none bg-gray-200 opacity-60 rounded w-10 transition ease-in-out duration-500 hover:opacity-100 text-center text-3xl bg-transparent cursor-pointer text-blue-500'}>&times;</button>
                                <button onClick={()=>props.handleId(props.idea.id)} className={'sticky text-center border-none bg-gray-200 opacity-60 rounded p-2 transition ease-in-out duration-500 hover:opacity-100 text-blue-500 cursor-pointer text-base'}>Подробнее &#8594;</button>
                            </div>
                            <h2 className={'mb-5'}>{props.idea.name}</h2>
                            <div className={'flex justify-between mb-5 '}>
                                <div className={'flex'}>
                                    <Image
                                        src={`https://api-staging.devbuff.com/photo/profile/${props.idea.ownerIdea.id}`}
                                        width={40}
                                        height={40}
                                    />
                                    <h4 className={'ml-1'}>{props.idea.ownerIdea.userName}</h4>
                                </div>
                                <div className={'flex flex-col ml-2'}>
                                    <span className={'text-xs text-gray-300'}>Последнее Обновление</span>
                                    <span className={'text-sm'}>{new Date(props.idea.lastUpdateDate).toLocaleDateString()}</span>
                                </div>
                                <div className={'flex flex-col ml-100'}>
                                    <span className={'text-xs text-gray-300'}>Статус</span>
                                    <span className={'text-xs'}>{props.idea.status}</span>
                                </div>
                            </div>
                            <hr/>
                            <div className={'mt-5 bg-white flex-wrap break-all'}>{renderHTML(props.idea.text)}</div>
                        </div>
                    </div>
                    </div>
                <div className={'fixed w-screen h-screen left-0 top-0 z-30 bg-gray-400 opacity-60'}></div>
                <style jsx global>{`
    body {
    overflow-y: hidden;
    }
    //.rounded {
    //border-radius: 12px;
    //}
    //.scroll {
    //overflow-y: scroll;
    //}
    //.h-500 {
    //max-height: 500px;
    //
    //}
  //  .flex-wrap {
  //  display: flex;
  //  flex-wrap: wrap;
  //  word-break: break-all;
  //  font-size: 15px;
  //  font-weight: 600;
  //  font-family: LucidaConsole,sans-serif;
  //  }
  //  .modal-bottom-button {
  //  position:absolute;
  //  right: 0;
  //  bottom: 10px;
  //  border: none;
  //  background-color: transparent;
  //  color: #0070f3;
  //  cursor:pointer;
  //  font-size: 17px;
  //  }
  //  .overlay {
  //  position: fixed;
  //  width: 100vw;
  //  height: 100vh;
  //  left: 0;
  //  top: 0;
  //  z-index: 12;
  //  background-color: lightslategray;
  //  opacity: 60%;
  //  }
  ////.fixed {
  ////padding: 20px;
  ////width: 700px ;
  ////position: fixed;
  ////z-index: 2001;
  ////top: 50%;
  ////left: 50%;
  ////opacity: 100% !important;
  ////transform: translate(-50%,-50%);
  ////overflow: hidden;
  ////}
  //.box-shadow {
  //box-shadow: 1px 5px 5px lightgray;
  //}
  //.modal {
  //position: relative;
  //display: flex;
  //flex-direction: column;
  //width: 100%;
  //background-color: white;
  //padding: 20px 15px 20px 15px;
  //border-radius: 12px;
  //}
  //.modal-head-button {
  //position:absolute;
  //right: 0;
  //border: none;
  //font-size: 40px;
  //transform: rotate(75deg);
  //background-color: transparent;
  //cursor: pointer;
  //}
  //.modal-name-container {
  //display: flex;
  //}
  //.ml-40 {
  //margin-left: 40px;
  //}
  //.ml-100 {
  //margin-left: 100px;
  //}
  //.align-center {
  //align-items: center;
  //}
  //.flex-col {
  //display: flex;
  //flex-direction: column;
  //}
  //.sizeS {
  //font-size: 12px;
  //}
  //.sizeM {
  //font-size: 15px;
  //}
  //.bg-white {
  //background-color: white;
  //}
`}</style>
            </div>

            : null
    )
}