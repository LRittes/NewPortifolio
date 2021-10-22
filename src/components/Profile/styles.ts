import styled from 'styled-components'

import photo from '../../assets/photo.jpg'

export const Container = styled.div`
  height: 100vh;
  width: 62rem;
  background: url(${photo}) center center;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`
export const Descrition = styled.div`
  text-align: center;
  padding-bottom: 20px;

  & h1 {
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.text.primary};
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 1.6rem;
  }

  & h2 {
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.text.primary};
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 1.6rem;
  }

  & div a {
    font-size: 30px;
    color: ${({ theme }) => theme.colors.white};
    margin-left: 10px;
    &:hover {
      color: ${({ theme }) => theme.colors.secundary};
    }
  }
`
