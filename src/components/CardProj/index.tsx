import { Container } from './styles'
import { cardProj } from '../../pages/Projetos/motion'

type banerProps = {
  baner: string
  href: string
  title: string
}

const CardProj = ({ baner, href, title }: banerProps) => {
  return (
    <Container href={href} variants={cardProj}>
      <img src={baner} alt="baner do projeto" />
      <p>{title}</p>
    </Container>
  )
}

export default CardProj
