import styled from 'styled-components'

export const Conatiner = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;

  & > h1 {
    font-size: 6rem;
    font-family: ${({ theme }) => theme.text.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`

export const Contact = styled.div`
  & > h4 {
    font-size: 2rem;
    font-family: ${({ theme }) => theme.text.secundary};
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 0.8rem;
  }
  & > p {
    font-size: 2rem;
    font-family: ${({ theme }) => theme.text.primary};
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 5rem;
  }
  & > div {
    display: flex;
    gap: 2rem;
  }
  & > div > a {
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.white};
  }
  & > div > a:hover {
    color: ${({ theme }) => theme.colors.secundary};
  }
`

export const MsgField = styled.form`
  display: flex;
  flex-direction: column;

  & > div {
    height: 0.8rem;
    width: 45rem;
    position: relative;
    margin-bottom: 7rem;

    & > input:focus {
      outline: none;
    }

    & > input:focus ~ p,
    & > input:valid ~ p {
      transform: translateY(-2rem);
      outline: none;
    }
  }

  & > div > input {
    height: 2rem;
    width: 100%;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.dark};
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.text.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  & > div > p {
    position: absolute;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.text.primary};
    font-size: 1.6rem;
    left: 0;
    top: -1rem;
    pointer-events: none;
  }
`
export const Btn = styled.button`
  width: 20rem;
  padding: 1rem 6rem;
  text-align: center;
  border-radius: 40px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.text.primary};
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  cursor: pointer;
  border: none;
  align-self: flex-end;
`
