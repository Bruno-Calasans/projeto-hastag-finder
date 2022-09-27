import { Layout } from '../../Layout'
import { Bg, InputWrapper, TitleWrapper } from './styled.js'
import { HashtagGallery } from '../../components/HashtagGallery'
import { useState } from 'react'
import { getTweets } from '../../hooks/twitterApi'
import useApi from '../../hooks/useApi'

export default function Home() {

    const api = useApi()

    const [ hashtag, setHashtag ] = useState('')
    const [ searchResponse, setSearchResponse ] = useState({
        loading: false,
        tweetsAndUsers: null,
        tweetsAndMedias: null,
        err: null
    })    

    function handleInput(e){
        let hashValue = e.target.value
        if(hashValue.length == 20){
            return
        }
        hashValue = hashValue.replace(/#/g, "")
        setHashtag(hashValue)
    }

    async function handleSearch(){

        if(hashtag.length === 0){
            return alert('Informe um valor válido para pesquisa!')
        }

        api.addSearch(hashtag) //Salva a hash pesquisada na api do airtable
        setSearchResponse(prevState => ({
            ...prevState,
            loading: true,
            err: null
        }))

        getTweets(hashtag)
        .then(({tweetAndUser, tweetAndMediaAndUser})  => {
            setSearchResponse({
                loading: false,
                tweetsAndUsers: tweetAndUser,
                tweetsAndMedias: tweetAndMediaAndUser,
                err: null
            })
        })
        .catch(e => {
            console.log(e)
            if(e.message === '404'){
                setSearchResponse(prevState => ({
                    ...prevState,
                    loading: false,
                    err: e.message
                }))     
            }
        })
    }

    return (
    <Layout route="home" isLoggedIn={true}>
        <Bg>
            <TitleWrapper>
                <h1>Encontre hashtags de maneira fácil.</h1>
                <p>Digite o que deseja no campo de buscas e confira o resultado do
                    Twitter abaixo.
                </p>
            </TitleWrapper>
            <InputWrapper>
                <button
                    onClick={() => handleSearch()}
                >
                    <img src="./icons/icon-search.svg"/>
                </button>
                <input 
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    value={hashtag === "" ? "" : "#" + hashtag}
                    onChange={(e) => handleInput(e)}
                    type="text"
                    placeholder="Buscar..."
                />
            </InputWrapper>  
        </Bg>


        {/* Lógica de rendarizacao, falta adicionar componente 404, primeira pesquisa e loader */}
        {searchResponse.err ==='404' ? (
            <div>Nao foram encontrados resultados para sua pesquisa</div>
        ) : (
            searchResponse.loading === true? (
                <div>carregando</div>
            ) : (
                searchResponse.tweetsAndUsers === null ? (
                    <div>faça uma pesquisa</div>
                ) : (
                    <HashtagGallery
                        tweetsAndUsers={searchResponse.tweetsAndUsers}
                        tweetsAndMedias={searchResponse.tweetsAndMedias}
                    />
                )
            )
        )}
    </Layout>
    )
}