import { ImageWrapper } from './styled'

export function CardImage ({tweet}) {
  return (
    <ImageWrapper
      imgUrl={tweet.medias[0].url}
    >
      <p>Postado por:<span><a href={'https://twitter.com/' + tweet.user.username} target="_blank" rel="noreferrer">@{tweet.user.username}</a></span></p>
    </ImageWrapper>
  )
}