import { Layout } from '../../Layout'
import { Bg, InputWrapper, TitleWrapper } from './styled.js'
import { HashtagGallery } from '../../components/HashtagGallery'

export default function Home() {
    return(
    <Layout route="home" isLoggedIn={true}>
        <Bg>
            <TitleWrapper>
                <h1>Encontre hashtags de maneira fácil.</h1>
                <p>Digite o que deseja no campo de buscas e confira o resultado do
                    Twitter abaixo.
                </p>
            </TitleWrapper>
            <InputWrapper>
                <img src="/icons/icon-search.svg"/>
                <input 
                    type="text"
                    placeholder="Buscar..."
                />
            </InputWrapper>  
        </Bg>
        <HashtagGallery/>
    </Layout>
    )
}