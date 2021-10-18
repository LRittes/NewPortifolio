import styled from 'styled-components'

const media = {
  phone: '@media (max-width: 425px)'
}

export const Container = styled.aside<{ tX: string }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: blue;
  width: 10rem;
  display: grid;
  place-items: center;
  background-color: ${({ theme }) => theme.colors.dark};

  ${media.phone} {
    transform: translateX(${(props) => props.tX});
  }

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
export const SideBarMobile = styled.div`
  display: none;

  ${media.phone} {
    display: block;

    & > div {
      color: white;
      position: absolute;
      top: 20px;
      left: 20px;
      font-size: 48px;
    }
  }
`

export const ToggleOpen = styled.div`
  position: absolute;
  margin-left: 10px;
  color: white;
  z-index: 99;

  &:nth-child(1) {
    font-size: 40px;
  }
`
