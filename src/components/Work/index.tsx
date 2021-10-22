import { Container } from './styles'

type workProps = {
  children: React.ReactNode
  work: string
  descript: string
}

const Work = ({ children, work, descript }: workProps) => {
  return (
    <Container>
      {children}
      <h5>{work}</h5>
      <p>{descript}</p>
    </Container>
  )
}

export default Work
