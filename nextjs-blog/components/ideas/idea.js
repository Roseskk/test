

export default function Ideas (props) {
    return(
        <ul className={'list-style-none p-0'}>
            {
                props.posts.ideas.map((item,idx)=>{
                    return(
                        <li className={'rounded background-light mt-10 p-30 helvetica relative'} key={idx}>
                            <div className={''}>
                                <div className={'flex align-center w-full '}>
                                    <h3 className={'sizeS'}>{item.ownerIdea.userName}</h3>
                                    <div className={'ml-10'}>
                                        <span className={'sizeXS ml-5'}>{item.ownerIdea.firstName}</span>
                                        <span className={'sizeXS ml-5'}>{item.ownerIdea.lastName}</span>
                                        <hr className={'solid-black ml-5'}/>
                                    </div>
                                </div>
                                <button className={'absolute right-0 top-0 border-none background-white'}><div className={'background-light  p-button'}>Посмотреть</div></button>
                                <h2 className={'sizeX mt-30'}>{item.name}</h2>
                                <div className={'borderCircle background-white p-20 rounded word-break'}>
                                    <p className={'m-0 lucida'}>{item.description}</p>
                                </div>
                                <h4 className={'mt-20 sizeL'}>Специальности</h4>
                                <ul className={'flex wrap list-style-none p-0'}>
                                    {
                                        item.requirements.map((item,idx)=>{
                                            return(
                                                <li className={'ml-10 w-100 rounded-10 background-white text-center p-5 mt-10'} key={idx}>
                                                    <span className={'sizeXS text-up '}>{item.name}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <h4 className={'mt-20 sizeL'}>Языки программирования</h4>
                                <ul className={'flex wrap list-style-none p-0'}>
                                    {
                                        item.requirements.map((item,idx)=>{
                                            return(
                                                    item.languages.map((item,idx)=>{
                                                        if (item.name) {
                                                            return(<li className={'ml-10 w-100 rounded-10 background-white text-center p-5 mt-10'} key={idx}><span className={'sizeXS text-up'}>{item.name}</span></li>)
                                                        }
                                                    return null
                                                })
                                            )
                                        })
                                    }
                                </ul>
                                <h4 className={'mt-20 sizeL'} >Технологии в проекте</h4>
                                <ul className={'flex wrap list-style-none p-0'}>
                                    {
                                        item.requirements.map(item=>{
                                            return(
                                                item.languages.map(item=>{
                                                    if (item.name) {
                                                        return item.technologies.map(item=>{
                                                            return(
                                                                <li className={'ml-10 w-100 rounded-10 background-white text-center p-5 mt-10'} key={idx}>
                                                                    <span className={'sizeXS text-up'}>{item.name}</span>
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
            <style jsx>{`
              .text-up {
                text-transform: uppercase;
              }
              .lucida {
                font-family: LucidaConsole,sans-serif;
              }
              .helvetica {
                font-family: Helvetica,sans-serif;
              }
              .p-button {
                padding: 10px 20px 10px 20px;
                border-bottom-left-radius: 10px;
                border-top-right-radius: 10px;
              }
              button {
                //padding: 10px 40px 10px 40px;
                border:1px solid white;
                border-top: none;
                border-bottom-left-radius: 12px;
                padding: 2px;
                font-family: LucidaConsole,sans-serif;
                font-size: 18px;
              }
              hr {
              margin: 0;
              transform: translateY(-5px);
              }
              ul {
                padding: 0;
                margin: 0 auto;
                list-style-type: none;
              }
              h1,h2,h3,h4,h5 {
                margin: 0;
                padding: 0;
              }
              .absolute {
                position: absolute;
              }
              .relative {
                position: relative;
              }
              .right-0 {
                right: 0;
              }
              .top-0 {
                top: 0;
              }
              .w-full {
                width: 100%;
              }
              .w-100 {
                min-width: 120px;
              }
              .sizeXL {
                font-size: 30px;
              }
              .sizeX {
                font-size: 24px;
              }
              .sizeL {
                font-size: 20px;
              }
              .sizeS {
                font-size: 17px;
              }
              .sizeXS {
                font-size: 12px;
              }
              .m-0 {
                margin: 0;
              }
              .mt-10 {
                margin-top: 10px;
              }
              .mt-20 {
                margin-top: 20px;
              }
              .mt-30 {
                margin-top: 30px;
              }
              .ml-5 {
                margin-left: 5px;
              }
              .ml-10 {
                margin-left: 10px;
              }
              .ml-20 {
                margin-left: 20px;
              }
              .ml-30 {
                margin-left: 30px;
              }
              .p-5 {
                padding: 5px;
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
              .flex {
                display: flex;
              }
              .align-center {
                align-items: center;
              }
              .text-center {
                text-align: center;
              }
              .justify-between {
                justify-content: space-between;
              }
              .wrap {
                flex-wrap: wrap;
              }
              .word-break {
                word-break: break-all;
              }
              .solid-black {
                border: 1px solid black;
                width: 100%;
              }
              .rounded {
                border-radius: 16px;
              }
              .rounded-10 {
                border-radius: 10px;
              }
              .background-light {
                background-color: lightcyan;
              }
              .background-white {
                background-color: white;
              }
              
            `}</style>
        </ul>
    )
}