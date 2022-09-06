
import { Layout } from '../../Layout';
import useApi from '../../hooks/useApi'

import {AboutSection, TeamSection, ProfilesContainer} from './style'
import ProfileCard from '../../components/ProfileCard';
import { useState, useEffect } from 'react';

export default function About() {

    const [page, setpage] = useState({about: '', team: []})

    const api = useApi()

    const loadData = async () => {

        let about = await api.getAbout().then(record => {
            if(record){ return record.Sobre }
        })

        let team = await api.getTeam().then(record => {
            if(record){ return record }
        })

        return {about, team}
    }

    useEffect(() => { 
        loadData().then(setpage)

    }, [])

    const {about, team} = page

    return (
    <Layout>
        
        <AboutSection>
            <div>
                <h1>Sobre o projeto</h1>
                <p>
                    {about != '' ? about :  'Loading...'}
                </p>
            </div>
            <img src="public\images\about-ilustration.svg" alt="" />
        </AboutSection>

        <TeamSection>

            <h1>Quem Somos</h1>

            <ProfilesContainer>

                {
                    (team.length > 0) ? 
                    team.map((member, index) => {
                        return <ProfileCard key={index} user={member}/>
                    })
                    : 'Loading...'
                }
        
            </ProfilesContainer>

        </TeamSection>

    </Layout>
    )
}