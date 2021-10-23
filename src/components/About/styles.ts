import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 2.4rem;
  padding-bottom: 0;

  & > h1 {
    font-family: ${({ theme }) => theme.text.primary};
    font-size: 6rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};
  }

  & > h4 {
    font-family: ${({ theme }) => theme.text.primary};
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 0.8rem;
  }

  & > p {
    font-family: ${({ theme }) => theme.text.secundary};
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.gray};
    margin-bottom: 1.6rem;
  }

  & > h2 {
    font-family: ${({ theme }) => theme.text.primary};
    font-size: 3.2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 0.8rem;
  }

  & > div {
    display: grid;
    grid: 1fr 1fr/ 1fr 1fr;
    gap: 1.6rem;
  }
`
