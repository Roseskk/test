import {useEffect} from "react";
import {useRouter} from "next/router";
import axios from "axios";

export default function CB({code})  {
    // console.log(cback)
    const router = useRouter()
    useEffect(async ()=>{
        let params = new URLSearchParams({ code : code, grant_type: 'GitHub_oauth', clientType : 'web' })
         await axios.post('https://api-staging.devbuff.com/oAuth/',params.toString())
            .then(result =>{
                localStorage.setItem('access_token',result.data.access_token)
                localStorage.setItem('refresh_token',result.data.refresh_token)
                localStorage.setItem('token_type',result.data.token_type)
                location.assign('http://localhost:3000')
            })
    },[])
    return(
        <div></div>
    )
}


export const getServerSideProps = async (ctx) => {
    console.log(ctx)
    let res = await fetch('https://api-staging.devbuff.com/oAuth/external/init/github/client/web')
    return(
        {
            props : {
                code : ctx.query.code
            }
        }
    )
}