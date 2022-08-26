import { useState } from 'react'
import { SearchMessage, SearchWrapper, ColumnCardUser, ColumnCardImage, SwitchWrapper, SwitchButton } from './styled.js'
import { CardUser } from '../CardUser'
import { CardImage } from '../CardImage'

export function HashtagGallery (){
   
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
            <CardImage
            imgUrl='public/images/natureza1.jpg'
            twitter='@twitterdofulano'
            />
            <CardImage
            imgUrl='public/images/natureza2.jpg'
            twitter='@twitterdofulano'
            />
            <CardImage
            imgUrl='public/images/natureza3.jpg'
            twitter='@twitterdofulano'
            />
            <CardImage
            imgUrl='public/images/natureza1.jpg'
            twitter='@twitterdofulano'
            />
            <CardImage
            imgUrl='public/images/natureza1.jpg'
            twitter='@twitterdofulano'
            />
            <CardImage
            imgUrl='public/images/natureza2.jpg'
            twitter='@twitterdofulano'
            />
            <CardImage
            imgUrl='public/images/natureza3.jpg'
            twitter='@twitterdofulano'
            />
            <CardImage
            imgUrl='public/images/natureza1.jpg'
            twitter='@twitterdofulano'
            />
            <CardImage
            imgUrl='public/images/natureza3.jpg'
            twitter='@twitterdofulano'
            />
            <CardImage
            imgUrl='public/images/natureza1.jpg'
            twitter='@twitterdofulano'
            />
        </ColumnCardImage>
        <ColumnCardUser
        className={ selectedButton !== "tweets"? "disabled" : "" }
        >
            <CardUser
                avatar="/images/perfil1.jpg"
                username="Username"
                twitter="@twitterdofulano"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                link="https://www.google.com"
            />
            <CardUser
                avatar="/images/perfil2.jpg"
                username="Username"
                twitter="@twitterdofulano"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                link="https://www.google.com"
            />
            <CardUser
                avatar="/images/perfil3.jpg"
                username="Username"
                twitter="@twitterdofulano"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                link="https://www.google.com"
            />
            <CardUser
                avatar="/images/perfil4.jpg"
                username="Username"
                twitter="@twitterdofulano"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                link="https://www.google.com"
            />
            <CardUser
                avatar="/images/perfil1.jpg"
                username="Username"
                twitter="@twitterdofulano"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                link="https://www.google.com"
            />
            <CardUser
                avatar="/images/perfil2.jpg"
                username="Username"
                twitter="@twitterdofulano"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                link="https://www.google.com"
            />
            <CardUser
                avatar="/images/perfil3.jpg"
                username="Username"
                twitter="@twitterdofulano"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                link="https://www.google.com"
            />
            <CardUser
                avatar="/images/perfil4.jpg"
                username="Username"
                twitter="@twitterdofulano"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                link="https://www.google.com"
            />
            <CardUser
                avatar="/images/perfil3.jpg"
                username="Username"
                twitter="@twitterdofulano"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                link="https://www.google.com"
            />
            <CardUser
                avatar="/images/perfil4.jpg"
                username="Username"
                twitter="@twitterdofulano"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                link="https://www.google.com"
            />
        </ColumnCardUser>
    </SearchWrapper>
    </>
  )
}