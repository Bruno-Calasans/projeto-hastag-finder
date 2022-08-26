import { CardWrapper, Avatar, InfoWrapper, Username, Description, LinkButton } from './styled'
 
export function CardUser({avatar, username, twitter, description, link}) {
  return (
    <CardWrapper>
      <Avatar src={avatar} alt={username}/>
      <InfoWrapper>
        <Username>{username}<span>{twitter}</span></Username>
        <Description>{description}</Description> 
        <LinkButton href={link} target="_blank" rel="noreferrer">Ver mais no Twitter</LinkButton>
      </InfoWrapper>
    </CardWrapper>
  )
}