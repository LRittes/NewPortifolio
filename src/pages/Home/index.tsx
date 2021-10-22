import { AsideBar, Profile, About } from '../../components'

import { Container } from './styles'

const Home = () => {
  return (
    <Container>
      <AsideBar />
      <div>
        <Profile />
        <About />
      </div>
    </Container>
  )
}

export default Home
