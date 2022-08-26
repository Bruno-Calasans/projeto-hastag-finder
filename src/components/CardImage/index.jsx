import { ImageWrapper } from './styled'

export function CardImage ({imgUrl, twitter}) {
  return (
    <ImageWrapper
    imgUrl={imgUrl}
    >
      <p>Postado por: <span>{twitter}</span></p>
    </ImageWrapper>
  )
}