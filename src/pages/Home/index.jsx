import { Layout } from '../../Layout'

export default function Home() {
    return(
    <Layout route="list" isLoggedIn={true}>
        <div>Página Home</div>   
    </Layout>
    )
}