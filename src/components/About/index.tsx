import { MdComputer, MdGroupWork, MdOutlineCheckCircle } from 'react-icons/md'
import Work from '../Work'
import { Container } from './styles'

import { contAbo } from './motion'

const About = () => {
  return (
    <Container variants={contAbo} animate="show" exit="hide">
      <h1>Sobre mim</h1>
      <h4>23 anos / Brasil / Front end developer</h4>
      <p>
        Hoje, estudante de ciência da computação pela Universidade Estadual de
        Santa Catarina e entusiasta de tecnologia como desenvolvimento web
        FrontEnd/BackEnd, entrou na área de TI na universidade em uma equipe de
        competição na área de robótica em um projeto de desenvolvimento de robôs
        de combate e gosta de ir descobrindo seu caminho conforme o percorre.
        Leandro também tem uma crescente presença em comunidades de Front-end
        para estar sempre atualizado e conhecendo novas pessoas, quando não está
        jogando vídeo game ou trocando ideias com amigos.
      </p>
      <h2>Meus Serviços</h2>
      <div>
        <Work
          work="Desenvolvimento"
          descript="Criação de soluções inovadoras para problemas de web design para ajudar a tornar o site mais visualmente atraente e melhorar a usabilidade.">
          <MdComputer />
        </Work>
        <Work
          work="Testing e Debugging"
          descript="Manutenção e optimização de websites e interfaces de utilizador">
          <MdOutlineCheckCircle />
        </Work>
        <Work
          work="UI Design"
          descript="Criação, desenvolvimento e prototipação de layouts de paginas web e mobile.">
          <MdGroupWork />
        </Work>
      </div>
    </Container>
  )
}

export default About
