import { Layout } from '../../Layout';
//import { useApi } from './../../hooks/useApi';

import {AboutSection, TeamSection} from './style'
import ProfileCard from '../../components/ProfileCard';

export default function About() {
    //const api = useApi()
    
    return (
    <Layout>
        
        <AboutSection>
            <div>
                <h1>Sobre o projeto</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam ab a debitis quod maiores modi dicta. Accusamus harum blanditiis molestias maxime itaque quasi? Explicabo ex omnis aliquid praesentium tenetur? Reprehenderit.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis doloremque ullam nisi perferendis doloribus. Quaerat, eius dolorum! Quis dolor ex sunt debitis accusamus perspiciatis? Cumque alias illum dicta eveniet consequuntur.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, vitae. Nobis inventore, repellendus optio nulla quis neque ea, velit perspiciatis, eligendi voluptatibus porro quam aperiam quisquam minus cumque amet mollitia.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam inventore a eligendi ut commodi. Et ducimus cumque nesciunt, quis impedit ad at. Veritatis, fugiat sint excepturi nihil natus eveniet expedita.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, voluptas velit consectetur laboriosam corporis tempora quam ea numquam neque? Quasi earum aperiam architecto, rerum impedit accusamus enim praesentium voluptates error?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis fugit accusamus animi culpa voluptatem, sunt beatae repudiandae maxime laboriosam, architecto dignissimos debitis totam id iusto facere saepe quasi! Fuga, dolore.
                </p>
            </div>
            <img src="public\images\about-ilustration.svg" alt="" />
        </AboutSection>

        <TeamSection>

            <h1>Quem Somos</h1>

            <div className='profilesContainer'>

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

            </div>

        </TeamSection>

    </Layout>
    )
}