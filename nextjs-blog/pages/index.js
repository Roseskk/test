import {useState,useEffect} from "react";
import {useRouter} from "next/router";
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Image from "next/image";
import Link from "next/link";
import Ideas from "../components/ideas/idea";
import IdeaModal from "../components/modal/IdeaModal";
import {Rings} from "react-loader-spinner";



export default function Home({posts ,children,isScroll}) {
    const [ring,setRing] = useState('sticky-load hidden ');
    const [overlay,setOverlay] = useState('hidden')
    const [modal,setModal] = useState();
    const [idea,setIdea] = useState();
    const router = useRouter();
    async function handleModal(id) {
        const res = await fetch(`https://api-staging.devbuff.com/idea/${id}`)
        const content = await res.json()
        setIdea(content);
        setModal(true);
    }
    function handleExit() {
        setModal(false)
    }
    function handleId(id) {
        setRing(true)
        router.push(id)
        if (!router.query.id) {
            setRing('sticky-load on')
            setOverlay('overlay')
        }
    }

  return (
      <Layout>
          <div className={ring}>
              <Image src={'/images/load.svg'}
                     width={100}
                     height={100}
              />
          </div>
        <section className={'container p-20 ml-auto mr-auto justify-between flex'}>
            <nav className={'h-200 w-20 sticky'}>
                <ul className={'list-style-none p-0'}>
                    <li className={'mt-15'}><Link href={'/'}><a className={'flex align-center '}><div className={'flex align-center'}><div className={'p-10 background-light rounded'}><Image width={40} height={40} src={'/images/idea-svgrepo-com.svg'}/></div><span className={'ml-15'}>Идеи</span></div></a></Link></li>
                    <li className={'mt-15'}><Link href={'/'}><a className={'flex align-center '}><div className={'flex align-center'}><div className={'p-10 background-light rounded'}><Image width={40} height={40} src={'/images/dashboard-svgrepo-com.svg'}/></div><span className={'ml-15'}>Дашборд</span></div></a></Link></li>
                    <li className={'mt-15'}><Link href={'/'}><a className={'flex align-center '}><div className={'flex align-center'}><div className={'p-10 background-light rounded'}><Image width={40} height={40} src={'/images/settings-svgrepo-com.svg'}/></div><span className={'ml-15'}>Настройки</span></div></a></Link></li>
                </ul>
            </nav>
            <div className={'w-60'}>
                <h1>Идеи</h1>
                <Ideas handleModal={handleModal} ideas={posts} />
                <IdeaModal handleId={handleId} handleExit={handleExit} modal={modal} idea={idea} />
            </div>
            <div className={'w-20 ml-15 sticky'}>Специализации ...скоро будет ребят прям вот уже ПОБЕЖАЛ кабанчиком</div>
        </section>
          <div className={overlay}></div>
          <style jsx>{`
          .container {
          max-width: 1260px !important;
      }
          .sticky {
          position: sticky;
          height: 200px !important;
          top: 60px;
      }
      .overlay {
        position: fixed;
        width: 100vw;
        height: 100vh;
        left: 0;
        top: 0;
        z-index: 8000;
        background-color: lightslategray;
        opacity: 60%;
    }
      .sticky-load {
          position:fixed;
          height: 200px;
          left: 50%;
          top : 50%;
          z-index: 9000;
          background: transparent;
          transform: translate(-50%,-50%);
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
          .hidden {
          display: none;    
      }
          .on {
          display: block;
          background: transparent;
          }
          `}</style>
          {children}
      </Layout>
  )
}
export const getStaticProps = async () => {
    const res = await fetch('https://api-staging.devbuff.com/idea/?page=1&sortBy=lastUpdate&specialists=&languages=')
    const posts = await res.json()
    return {
        props : {
         posts : posts.ideas
        }
    }
}