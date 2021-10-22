import styled from 'styled-components'

// const media = {
//   phone: '@media (max-width: 425px)'
// }

export const Container = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: blue;
  width: 10rem;
  display: grid;
  place-items: center;
  background-color: ${({ theme }) => theme.colors.dark};

  & > div {
    display: flex;
    flex-direction: column;
    gap: 7.2rem;
  }

  & > div > a {
    color: ${({ theme }) => theme.colors.white};
  }
  & > div > .active {
    color: ${({ theme }) => theme.colors.primary};
  }
`
