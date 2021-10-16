import { ThemeProvider } from 'styled-components'

import Tour from './pages/Tour'

import { themes } from './styles/theme/theme'

const App = () => {
  return (
    <ThemeProvider theme={themes}>
      <Tour />
    </ThemeProvider>
  )
}

export default App
