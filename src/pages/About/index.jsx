import { Layout } from '../../Layout';
import { useApi } from './../../hooks/useApi';

import {AboutSection, TeamSection, ProfilesContainer} from './style'
import ProfileCard from '../../components/ProfileCard';


export default function About() {
    const api = useApi()
    
    return (
    <Layout>
        
        <AboutSection>
            <h1>Sobre o projeto</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam ab a debitis quod maiores modi dicta. Accusamus harum blanditiis molestias maxime itaque quasi? Explicabo ex omnis aliquid praesentium tenetur? Reprehenderit.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis doloremque ullam nisi perferendis doloribus. Quaerat, eius dolorum! Quis dolor ex sunt debitis accusamus perspiciatis? Cumque alias illum dicta eveniet consequuntur.
            </p>
            <img src="" alt="example" />
        </AboutSection>

        <TeamSection>
            <h1>Quem Somos</h1>

            <ProfilesContainer>

                <ProfileCard
                user={{
                    url: 'src/imgs/profile.svg',
                    name: 'Teste',
                    desc: 'dsadasdsa'
                }}/>

                <ProfileCard
                user={{
                    url: 'src/imgs/profile.svg',
                    name: 'Teste',
                    desc: 'dsadasdsa'
                }}/>

                <ProfileCard
                user={{
                    url: 'src/imgs/profile.svg',
                    name: 'Teste',
                    desc: 'dsadasdsa'
                }}/>

                <ProfileCard
                user={{
                    url: 'src/imgs/profile.svg',
                    name: 'Teste',
                    desc: 'dsadasdsa'
                }}/>

            </ProfilesContainer>

        </TeamSection>

    </Layout>
    )
}