import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.a)`
  width: 180px;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  position: relative;

  & :hover ~ p {
    opacity: 1;
  }

  & img {
    width: 100%;
    height: 100%;
  }

  & > p {
    font-family: ${({ theme }) => theme.text.secundary};
    font-size: 1.6rem;
    background-color: rgba(0, 0, 0, 0.6);
    text-align: center;
    color: ${({ theme }) => theme.colors.whiteLight};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
  }
`
