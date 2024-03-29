import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Container, Descrition } from './styles'

import { descrProf } from './motion'

const Profile = () => {
  return (
    <Container>
      <Descrition variants={descrProf} animate="show" exit="hide">
        <motion.h1>Leandro Ribeiro Rittes</motion.h1>
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
