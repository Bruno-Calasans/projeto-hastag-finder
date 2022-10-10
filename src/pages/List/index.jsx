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




    const [pageNumber, setPageNumber] = useState(0)
    const itensPerPage = 10
    const pagesVisited = pageNumber * itensPerPage

    const displayItens = searches.slice(pagesVisited, pagesVisited + itensPerPage).map(searche => {
        return (
        <>
        <C.Items key={searche}>
            <C.FirstParagraph>{searche.Hashtag}</C.FirstParagraph>
            <p>
                 {new Intl.DateTimeFormat('pt-BR', { month: '2-digit',day: '2-digit'}).format(searche.Data)}
            </p>
            <p>
                {new Intl.DateTimeFormat('pt-BR', { hour: '2-digit', minute: '2-digit'}).format(searche.Data)}
            </p>
        </C.Items>
        <C.Divider></C.Divider>
        </>

        )
    })

    const pageCount = Math.ceil(searches.length / itensPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected);
      };

    return (
    <Layout>  
                <C.BoxTitle><C.Title>Buscas Realizadas</C.Title></C.BoxTitle>
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