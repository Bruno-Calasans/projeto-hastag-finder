import * as C from './style'
import { Layout } from '../../Layout'
export default function List() {

    const Items = [
        {
            hashtag: '#hashtag',
            date: '25/05', 
            hour: '09:30'
        },
        {
            hashtag: '#hashtag',
            date: '25/05', 
            hour: '09:30'
        },
        {
            hashtag: '#hashtag',
            date: '25/05', 
            hour: '09:30'
        },
        {
            hashtag: '#hashtag',
            date: '25/05', 
            hour: '09:30'
        },
        {
            hashtag: '#hashtag',
            date: '25/05', 
            hour: '09:30'
        },
        {
            hashtag: '#hashtag',
            date: '25/05', 
            hour: '09:30'
        },
        {
            hashtag: '#hashtag',
            date: '25/05', 
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
                            <p>{item.date}</p>
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