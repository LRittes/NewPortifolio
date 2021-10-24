import { FormEvent } from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { AsideBar } from '../../components'

import { Conatiner, Contact, Wrapper, MsgField, Btn } from './styles'

const Contatos = () => {
  function sendMessage(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <>
      <AsideBar />
      <Conatiner>
        <h1>Contatos</h1>
        <Wrapper>
          <Contact>
            <h4>E-mail:</h4>
            <p>leandro_rittes@hotmail.com</p>
            <h4>Telefone:</h4>
            <p>(15) 98133-4517</p>
            <div>
              <a href="https://www.linkedin.com/in/leandro-rittes/">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/LRittes">
                <FaGithub />
              </a>
            </div>
          </Contact>
          <MsgField name="contact-form" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact-form" />
            <div>
              <input required type="text" id="name" name="name" />
              <p>Nome</p>
            </div>
            <div>
              <input required type="email" id="email" name="email" />
              <p>E-mail</p>
            </div>
            <div>
              <input required type="text" id="name" name="message" />
              <p>Menssagem</p>
            </div>
            <Btn type="submit" onClick={sendMessage}>
              Enviar
            </Btn>
          </MsgField>
          <div />
        </Wrapper>
      </Conatiner>
    </>
  )
}

export default Contatos
