
import { Layout } from '../../Layout'
export default function List() {

    const Itens = [
        {
            hashtag: '#hashtag',
            data: '25/05', 
            hour: '09:30'
        },
        {
            hashtag: '#hashtag',
            data: '25/05', 
            hour: '09:30'
        },
        {
            hashtag: '#hashtag',
            data: '25/05', 
            hour: '09:30'
        },
        {
            hashtag: '#hashtag',
            data: '25/05', 
            hour: '09:30'
        },
        {
            hashtag: '#hashtag',
            data: '25/05', 
            hour: '09:30'
        },
        {
            hashtag: '#hashtag',
            data: '25/05', 
            hour: '09:30'
        },
        {
            hashtag: '#hashtag',
            data: '25/05', 
            hour: '09:30'
        },
        
    ]


    return (
    <Layout>
        <div>
            <h3>Buscas Realizadas</h3>
            <div>
                <h3>Hastag</h3>
                <h3>Data</h3>
                <h3>Hora</h3>
            </div>
            <div>
               {Itens.map((item)=> (
                <div>
                    <p>{item.hashtag}</p>
                    <p>{item.data}</p>
                    <p>{item.hour}</p>
                </div>
               ))}
            </div>

        </div>
    </Layout>
    )
}