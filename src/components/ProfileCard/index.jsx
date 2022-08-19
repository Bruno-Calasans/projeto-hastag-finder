
import { Container } from './style'
import {Github} from '@styled-icons/boxicons-logos/Github'

export default function ProfileCard(props) {

    const {url, name, desc} = props.user

    return (
        <Container>

            <figure>
                <img src={url} alt="example" />
                <figcaption>{name}</figcaption>
            </figure>

            <p>{desc}</p>

            <div>
                <Github width='24px'/>
            </div>
    
        </Container>
    )
}