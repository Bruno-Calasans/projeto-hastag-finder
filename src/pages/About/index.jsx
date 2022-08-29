import { Layout } from '../../Layout';
//import { useApi } from './../../hooks/useApi';

import {AboutSection, TeamSection, ProfilesContainer} from './style'
import ProfileCard from '../../components/ProfileCard';

export default function About() {
    //const api = useApi()
    
    return (
    <Layout>
        
        <AboutSection>
            <div>
                <h1>Sobre o projeto</h1>
                <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                </p>
            </div>
            <img src="public\images\about-ilustration.svg" alt="" />
        </AboutSection>

        <TeamSection>

            <h1>Quem Somos</h1>

            <ProfilesContainer>

                <ProfileCard
                user={{
                    url: 'public/icons/icon-user-alt.svg',
                    name: 'James Bakster',
                    desc: 'Tenho mestrado em Ciências da Computação e CEO da empresa TodosFudidos'
                }}/>

                <ProfileCard
                user={{
                    url: 'public/icons/icon-user-alt.svg',
                    name: 'Alex Lupin',
                    desc: 'Formato em Análise e Desenvolvimento de Sistemas pela NoOrg e Entusiasta em Massagens Espirituas Demoníacas'
                }}/>

                <ProfileCard
                user={{
                    url: 'public/icons/icon-user-alt.svg',
                    name: 'Cláudio Baunilha',
                    desc: 'Formado em Gestão de Escravos e fundador do Insituto Todos Podem Ser Escravos'
                }}/>

                <ProfileCard
                user={{
                    url: 'public/icons/icon-user-alt.svg',
                    name: 'Germe Verme',
                    desc: 'Gosto de você. Me nota >.<'
                }}/>

            </ProfilesContainer>

        </TeamSection>

    </Layout>
    )
}