import { AsideBar, CardProj } from '../../components'

import { Container } from './styles'

import {
  baner1,
  baner2,
  baner3,
  baner4,
  baner5,
  baner6,
  baner7,
  baner8
} from '../../assets'

const Projetos = () => {
  return (
    <>
      <AsideBar />
      <Container>
        <h1>Projetos</h1>
        <div>
          <CardProj
            baner={baner1}
            href="https://leandro-rittes.netlify.app/"
            title="Portfólio 1"
          />
          <CardProj
            baner={baner2}
            href="https://lrittes.github.io/Hackthon-callep/"
            title="Band Site"
          />
          <CardProj
            baner={baner3}
            href="https://lrittes.github.io/Chuva/"
            title="Science Site"
          />
          <CardProj
            baner={baner4}
            href="https://lrittes.github.io/Clone-Netflix/"
            title="Netflix Clone"
          />
          <CardProj
            baner={baner5}
            href="https://lrittes.github.io/Portfolio2/#"
            title="Portfólio 2"
          />
          <CardProj
            baner={baner6}
            href="https://leandro-rittes.netlify.app/"
            title="Game Tipogeo"
          />
          <CardProj
            baner={baner7}
            href="https://leandro-rittes.netlify.app/"
            title="Game Typing"
          />
          <CardProj
            baner={baner8}
            href="https://leandro-rittes.netlify.app/"
            title="LetMeAsk"
          />
        </div>
      </Container>
    </>
  )
}

export default Projetos
