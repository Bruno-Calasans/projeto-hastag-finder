import * as C from './styles'
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
        <C.Title>Buscas Realizadas</C.Title>
        <C.Container>
                <C.Table>
                    <C.Header>
                        <C.TitleTable>Hastag</C.TitleTable>
                        <C.Titles>Data</C.Titles>
                        <C.Titles>Hora</C.Titles>
                    </C.Header>
                    <div>
                    {Itens.map((item)=> (
                        <div>
                            <p>{item.hashtag}</p>
                            <p>{item.data}</p>
                            <p>{item.hour}</p>
                        </div>
                    ))}
                    </div>
                </C.Table>
        </C.Container>
    </Layout>
    )
}