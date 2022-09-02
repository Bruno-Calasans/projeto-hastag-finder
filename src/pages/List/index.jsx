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
     
    const itens = [
        {
            tag: '#testando',
            date: 1662144619
        }
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
                    {itens.map((searche, index)=> (

                        <React.Fragment key={index}>
                        <C.Items>
                            <C.FirstParagraph>{searche.tag}</C.FirstParagraph>
                            <p>
                                 {new Intl.DateTimeFormat('pt-BR', { month: '2-digit',day: '2-digit'}).format(searche.date*1000)}
                            </p>
                            <p>
                                {new Intl.DateTimeFormat('pt-BR', { hour: '2-digit', minute: '2-digit'}).format(searche.date*1000)}
                            </p>
                            
                        </C.Items>
                        <C.Divider></C.Divider>
                        </React.Fragment >
                    ))}
                    </div>
                </C.Table>
    </Layout>
    )
}