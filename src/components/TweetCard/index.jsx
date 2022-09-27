import { CardWrapper, Avatar, InfoWrapper, Username, Description, LinkButton } from './styled'
 
export function TweetCard({tweet}) {
  return (
    <CardWrapper>
      <Avatar src={tweet.user.avatar} alt={tweet.user.username}/>
      <InfoWrapper>
        <Username>{tweet.user.name}<a href={'https://twitter.com/' + tweet.user.username} target="_blank" rel="noreferrer">@{tweet.user.username}</a></Username>
        <Description>{tweet.description}</Description> 
        <LinkButton href={'https://twitter.com/' + tweet.user.username + '/status/' + tweet.id} target="_blank" rel="noreferrer">Ver mais no Twitter</LinkButton>
      </InfoWrapper>
    </CardWrapper>
  )
}