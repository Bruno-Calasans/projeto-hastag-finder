import { Layout } from '../../Layout';
import { useApi } from './../../hooks/useApi';

export default function About() {
    const api = useApi()
    
    return (
    <Layout>
        <div>Página About</div>   
    </Layout>
    )
}