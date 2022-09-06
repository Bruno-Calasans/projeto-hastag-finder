
import { Container, Profile, Avatar, Name, Description, SocialMidiaContainer, SocialMidia} from './style'

import {ReactComponent as GitHubLogo} from '/public/icons/icon-github.svg'
import {ReactComponent as EmailLogo} from '/public/icons/icon-envelope.svg'
import {ReactComponent as LinkedinLogo} from '/public/icons/icon-awesome-linkedin.svg'

export default function ProfileCard(props) {

    const {
        Nome, 
        Github, 
        Email, 
        LinkedIn,
    } = props.user

    const desc = props.user['Descrição']
    const url = props.user.Imagem?.pop().url ?? 'public/icons/icon-user-alt.svg'
    
    return (
        <Container>

            <Profile>
                <Avatar src={url} alt="example" />
                <Name>{Nome}</Name>
            </Profile>

            <Description>{desc}</Description>

            <SocialMidiaContainer>

                <SocialMidia href={Github} target='blank'>
                    <GitHubLogo />
                </SocialMidia>

                <SocialMidia href={'mailto:' + Email} target='blank'>
                    <EmailLogo />
                </SocialMidia>

                <SocialMidia href={LinkedIn} target='blank'>
                    <LinkedinLogo />
                </SocialMidia>

            </SocialMidiaContainer>
    
        </Container>
    )
}