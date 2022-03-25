import {useRouter} from "next/router";


export default function Idea({}) {

    const router = useRouter()

    return(
        <div>
            <h1>Idea {router.query.idea}</h1>
        </div>
    )
}