// props.id Нужно SSR
import {useEffect,useState} from "react";

import Image from "next/image";
import {Rings} from "react-loader-spinner";

export default function IdeaModal (props) {
   const [idea,setIdea] = useState([])
    if (!props.idea) {
         return <div>жди</div>
    }
    return(
        (props.modal)
        ? <div>
                <div className={'fixed'}>
                    <div className={'modal box-shadow'}>
                        <button className={'modal-head-button'}>&times;</button>
                        <h2>{props.idea.name}</h2>
                        <div className={'modal-name-container flex'}>
                            <div className={'modal-name-container'}>
                                {/*<Image*/}
                                {/*    src={`https://api-staging.devbuff.com/photo/profile/${item.ownerIdea.id}`}*/}
                                {/*    width={40}*/}
                                {/*    height={40}*/}
                                {/*/>*/}
                                <h4 className={'ml-40'}>{props.idea.ownerIdea.userName}</h4>
                            </div>
                            <div className={'flex-col ml-100'}>
                                <span className={'sizeS'}>Последнее Обновление</span>
                                <span className={'sizeM'}>{props.idea.lastUpdateDate}</span>
                            </div>
                            <div className={'flex-col ml-100'}>
                                <span className={'sizeS'}>Статус</span>
                                <span className={'sizeM'}>{props.idea.status}</span>
                            </div>
                        </div>
                        <hr/>
                        <div><p>text</p></div>
                        <button>Подробнее</button>
                    </div>
                </div>
            <div className={'overlay'}></div>
                <style jsx>{`
  .overlay {
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 2000;
  background-color: lightslategray;
  opacity: 60%;
  }
  .fixed {
  padding: 20px;
  width: 700px ;
  position: fixed;
  z-index: 2001;
  top: 50%;
  left: 50%;
  opacity: 100% !important;
  transform: translate(-50%,-50%);
  }
  .box-shadow {
  box-shadow: 1px 5px 5px lightgray;
  }
  .modal {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  padding: 20px 15px 20px 15px;
  border-radius: 12px;
  }
  .modal-head-button {
  position:absolute;
  right: 0;
  border: none;
  font-size: 40px;
  transform: rotate(75deg);
  background-color: transparent;
  }
  .modal-name-container {
  display: flex;
  }
  .ml-40 {
  margin-left: 40px;
  }
  .ml-100 {
  margin-left: 100px;
  }
  .flex {
  align-items: center;
  }
  .flex-col {
  display: flex;
  flex-direction: column;
  }
  .sizeS {
  font-size: 12px;
  }
  .sizeM {
  font-size: 15px;
  }
`}</style>
            </div>

        : null
    )
}

// IdeaModal.getInitialProps = async (ctx) =>{
//     const res = await fetch(`https://api-staging.devbuff.com/idea/${ctx.}`)
//     const posts = await res.json()
//     return {
//         posts : posts.idea
//     }
// }