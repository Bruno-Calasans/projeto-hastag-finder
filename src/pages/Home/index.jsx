import { Layout } from '../../Layout'

export default function Home() {
    return(
    <Layout route="home" isLoggedIn={true}>
        <div>Página Home</div>   
    </Layout>
    )
}