
import { Container } from './style'
import {Github} from '@styled-icons/boxicons-logos/Github'
import {Email} from '@styled-icons/material/Email'
import {LinkedinSquare} from '@styled-icons/boxicons-logos/LinkedinSquare'

export default function ProfileCard(props) {

    const size = '28px'
    const {url, name, desc} = props.user

    return (
        <Container>

            <figure>
                <img className='avatar' src={url} alt="example" />
                <figcaption className='name'>{name}</figcaption>
            </figure>

            <p className='desc'>{desc}</p>

            <div className='social-medias'>

                <a href="https://github.com/" target='blank'>
                    <Github width={size} height={size}/>
                </a>
                <a href="https://mail.google.com/mail" target='blank'>
                    <Email width={size} height={size}/>
                </a>
                <a href="https://www.linkedin.com/" target='blank'>
                    <LinkedinSquare width={size} height={size}/>
                </a>
            </div>
    
        </Container>
    )
}