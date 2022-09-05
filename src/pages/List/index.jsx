import * as C from './style'
import React, { useEffect, useState } from 'react'
import { Layout } from '../../Layout'
import useApi from '../../hooks/useApi'
import ReactPaginate from 'react-paginate'
import './pagination.css'

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
                        <C.TitleTable>Hashtag</C.TitleTable>
                        <C.Titles>Data</C.Titles>
                        <C.Titles>Hora</C.Titles>
                       
                    </C.Header>
                    <div>
                        {displayItens} 
                       
                    </div>
                </C.Table>
                <ReactPaginate
                        previousLabel={"anterior"}
                        nextLabel={"próximo"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    >
                </ReactPaginate>
    </Layout>
    )
}