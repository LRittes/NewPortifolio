import { Container } from './styles'

type banerProps = {
  baner: string
  href: string
  title: string
}

const CardProj = ({ baner, href, title }: banerProps) => {
  return (
    <Container href={href}>
      <img src={baner} alt="baner do projeto" />
      <p>{title}</p>
    </Container>
  )
}

export default CardProj
