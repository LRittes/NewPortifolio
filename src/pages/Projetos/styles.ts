import styled from 'styled-components'

export const Container = styled.div`
  margin-left: 100px;
  height: 100vh;
  display: grid;
  place-items: center;

  & > h1 {
    font-family: ${({ theme }) => theme.text.primary};
    font-size: 6rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};
  }

  & > div {
    display: grid;
    grid: repeat(2, 1fr) / repeat(4, 1fr);
    grid-gap: 20px;
    max-width: 80rem;
  }
`
