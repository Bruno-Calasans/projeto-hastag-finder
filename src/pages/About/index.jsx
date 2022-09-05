
import { Layout } from '../../Layout';
import useApi from '../../hooks/useApi'

import {AboutSection, TeamSection, ProfilesContainer} from './style'
import ProfileCard from '../../components/ProfileCard';
import { useState, useEffect } from 'react';

export default function About() {

    let [about, setAbout] = useState('')
    let [team, setTeam] = useState([])

    const api = useApi()

    useEffect(() => { 
        api.getTeam().then(setTeam)
        api.getAbout().then(about => setAbout(about.Sobre))

    }, [])


    return (
    <Layout>
        
        <AboutSection>
            <div>
                <h1>Sobre o projeto</h1>
                <p>{about}</p>
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