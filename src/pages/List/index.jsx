import * as C from './style'
import React, { useEffect, useState } from 'react'
import { Layout } from '../../Layout'
import useApi from '../../hooks/useApi'

export default function List() {

    let [searches, setSearches] = useState([])
    const api = useApi()

    useEffect(() => {
        api.getSearches().then(setSearches)
    
    }, [])


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
                    {Items.map((item, index)=> (

                        <React.Fragment key={index}>
                        <C.Items>
                            <C.FirstParagraph>{item.hashtag}</C.FirstParagraph>
                            <p>{item.date}</p>
                            <p>{item.hour}</p>
                        </C.Items>
                        <C.Divider></C.Divider>
                        </React.Fragment >
                    ))}
                    </div>
                </C.Table>
    </Layout>
    )
}