
import { Container, Profile, Avatar, Name, Description, SocialMidiaContainer, SocialMidia} from './style'

import {ReactComponent as GitHubLogo} from '/public/icons/icon-github.svg'
import {ReactComponent as EmailLogo} from '/public/icons/icon-envelope.svg'
import {ReactComponent as LinkedinLogo} from '/public/icons/icon-awesome-linkedin.svg'

export default function ProfileCard(props) {

    const { url, name, desc } = props.user

    return (
        <Container>

            <Profile>
                <Avatar src={url} alt="example" />
                <Name>{name}</Name>
            </Profile>

            <Description>{desc}</Description>

            <SocialMidiaContainer>

                <SocialMidia href="https://github.com/" target='blank'>
                    <GitHubLogo />
                </SocialMidia>

                <SocialMidia href="https://mail.google.com/mail" target='blank'>
                    <EmailLogo />
                </SocialMidia>

                <SocialMidia href="https://www.linkedin.com/" target='blank'>
                    <LinkedinLogo />
                </SocialMidia>

            </SocialMidiaContainer>
    
        </Container>
    )
}