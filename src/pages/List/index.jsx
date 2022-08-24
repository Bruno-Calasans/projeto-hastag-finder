import * as C from './styles'
import { Layout } from '../../Layout'
export default function List() {

    const Items = [
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
                <C.Table>
                    <C.Header>
                        <C.TitleTable>Hastag</C.TitleTable>
                        <C.Titles>Data</C.Titles>
                        <C.Titles>Hora</C.Titles>
                    </C.Header>
                    <div>
                    {Items.map((item)=> (
                        <>
                        <C.Items>
                            <C.FirstParagraph>{item.hashtag}</C.FirstParagraph>
                            <p>{item.data}</p>
                            <p>{item.hour}</p>
                        </C.Items>
                        <C.Divider></C.Divider>
                        </>
                    ))}
                    </div>
                </C.Table>
    </Layout>
    )
}