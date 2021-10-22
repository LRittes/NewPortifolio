import { NavLink } from 'react-router-dom'
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
        <NavLink to="/" exact activeClassName="active">
          <MdPersonOutline size="48" />
        </NavLink>
        <NavLink to="projetos" exact activeClassName="active">
          <MdBusinessCenter size="48" />
        </NavLink>
        <NavLink to="contatos" exact activeClassName="active">
          <MdMailOutline size="48" />
        </NavLink>
      </div>
    </Container>
  )
}

export default AsideBar
