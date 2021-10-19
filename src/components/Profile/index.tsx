import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { Container, Descrition } from './styles'

const Profile = () => {
  return (
    <Container>
      <Descrition>
        <h1>Leandro Ribeiro Rittes</h1>
        <h2>Desenvolvedor</h2>
        <div>
          <a href="https://www.linkedin.com/in/leandro-rittes/">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/LRittes">
            <FaGithub />
          </a>
        </div>
      </Descrition>
    </Container>
  )
}

export default Profile
