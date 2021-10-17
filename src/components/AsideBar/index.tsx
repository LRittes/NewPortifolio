import { Link } from 'react-router-dom'
import {
  MdPersonOutline,
  MdBusinessCenter,
  MdMailOutline
} from 'react-icons/md'

import { Container } from './styles'

const AsideBar = () => {
  return (
    <Container>
      <div>
        <Link to="/">
          <MdPersonOutline style={{ fontSize: 48 }} />
        </Link>
        <Link to="projetos">
          <MdBusinessCenter style={{ fontSize: 48 }} />
        </Link>
        <Link to="contatos">
          <MdMailOutline style={{ fontSize: 48 }} />
        </Link>
      </div>
    </Container>
  )
}

export default AsideBar
