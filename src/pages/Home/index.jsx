import { Layout } from '../../Layout'
import { Bg, InputWrapper, TitleWrapper } from './styled.js'
import { HashtagGallery } from '../../components/HashtagGallery'
import { useState } from 'react'

const TWITTER_URL = "https://cors.eu.org/https://api.twitter.com/2/tweets/search/recent"
const BEARER_TOKEN = "Bearer AAAAAAAAAAAAAAAAAAAAAFlKHgEAAAAApBW4nRyRkiogluzAbXlS4KuHlMU%3DFcR7r8N19LRnMHLVmYlFsod6Be6zUvZD2rxATotl6mLPAh2UEX"

function twitterQuerys(tweet){
    return `
        ${TWITTER_URL}?query=${tweet}
    `
} 

export default function Home() {

    const [ hashtag, setHashtag] = useState('')
    const [ searchResponse, setSearchResponse ] = useState({
        loading: false,
        tweets: {}
    })

    function handleInput(e){
        let hashValue = e.target.value
        hashValue = hashValue.replace(/#/g, "")
        setHashtag(hashValue)
    }

    async function handleSearch(){

        setSearchResponse(prevState => ({
            ...prevState,
            loading: true 
        }))
        fetch(twitterQuerys(hashtag), {
            method: "GET",      
            headers: { 
                "Authorization": BEARER_TOKEN,
            } 
        })
        .then(response => response.json()) 
        .then(json => {
            console.log('oi')
            setSearchResponse({
                loading: false,
                tweets: json
            })
        }) 
        .catch(err => console.log(err))
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

        {/* lógica de renderizaçao */}

        {searchResponse.tweets.meta === undefined ? (
            <div>Faça uma pesquisa virá aqui</div>
        ) : ( 
            searchResponse.loading === true ? (
                <div>Carregando</div>
            ) : (
                searchResponse.tweets.meta.result_count === 0 ? (
                    <div>Nenhum resultado encontrado</div>
                ) : (
                    <HashtagGallery
                        tweets={searchResponse.tweets}
                    />        
                )        
            )  
        )}
    </Layout>
    )
}