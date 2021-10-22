import styled from 'styled-components'

export const Container = styled.div`
  & :nth-child(1) {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 40px;
  }

  & > h5 {
    color: ${({ theme }) => theme.colors.whiteLight};
    font-family: ${({ theme }) => theme.text.secundary};
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 0.8rem;
  }

  & > p {
    color: ${({ theme }) => theme.colors.gray};
    font-family: ${({ theme }) => theme.text.secundary};
    font-size: 1.3rem;
  }
`
