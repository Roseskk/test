import {useRouter} from "next/router";
import Home from "./index";
import Layout from "../components/layout";

export default function Idea({posts}) {
    const router = useRouter()
    console.log(posts)
    return(
        <Layout>
            asd
        </Layout>
    )
}