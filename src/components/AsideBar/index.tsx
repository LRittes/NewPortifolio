import { NavLink } from 'react-router-dom'
import {
  MdPersonOutline,
  MdBusinessCenter,
  MdMailOutline,
  MdOutlineClose
} from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'

import { useState } from 'react'
import { Container, ToggleOpen, SideBarMobile } from './styles'

const AsideBar = () => {
  const [open, setOpen] = useState(true)

  return (
    <>
      <SideBarMobile>
        <ToggleOpen
          onClick={() => {
            console.log(open)
            return setOpen(!open)
          }}>
          {open ? <MdOutlineClose /> : <GiHamburgerMenu />}
        </ToggleOpen>
      </SideBarMobile>
      <Container tX={open ? '0' : '-100px'}>
        <div>
          <NavLink to="/" exact activeClassName="active">
            <MdPersonOutline style={{ fontSize: 48 }} />
          </NavLink>
          <NavLink to="projetos" exact activeClassName="active">
            <MdBusinessCenter style={{ fontSize: 48 }} />
          </NavLink>
          <NavLink to="contatos" exact activeClassName="active">
            <MdMailOutline style={{ fontSize: 48 }} />
          </NavLink>
        </div>
      </Container>
    </>
  )
}

export default AsideBar
