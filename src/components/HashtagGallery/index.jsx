import { useState } from 'react'
import { SearchMessage, SearchWrapper, ColumnCardUser, ColumnCardImage, SwitchWrapper, SwitchButton } from './styled.js'
import { TweetCard } from '../TweetCard'
import { CardImage } from '../CardImage'

export function HashtagGallery ({tweetsAndUsers, tweetsAndMedias}){
    const [ selectedButton, setSelectedButton ] = useState("tweets")
  
    return (
    <>
    <SearchMessage>Exibindo os 10 resultados mais recentes para #natureza</SearchMessage> 
    <SwitchWrapper>
        <SwitchButton 
        className={ selectedButton === "tweets"? "selected" : "" }
        onClick={() => setSelectedButton("tweets")}
        >
            Tweets
        </SwitchButton>
        <SwitchButton
        className={ selectedButton === "imagens"? "selected" : "" }
        onClick={() => setSelectedButton("imagens")}
        >
            Imagens
        </SwitchButton>
    </SwitchWrapper>
    <SearchWrapper>
        
        <ColumnCardImage
        className={ selectedButton !== "imagens"? "disabled" : "" }
        >
            {tweetsAndMedias.map(tweet => (
                <CardImage
                key={tweet.id}
                tweet={tweet} 
                />
            ))}
        </ColumnCardImage>
    
        <ColumnCardUser
        className={ selectedButton !== "tweets"? "disabled" : "" }
        >
            {tweetsAndUsers.map(tweet => (
                <TweetCard
                    key={tweet.id}
                    tweet={tweet} 
                />
            ))}
            
        </ColumnCardUser>
    </SearchWrapper>
    </>
  )
}