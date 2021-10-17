import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Home, Projetos, Contatos } from './pages'

import { themes, GlobalStyles } from './styles'

const App = () => {
  return (
    <ThemeProvider theme={themes}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projetos" component={Projetos} />
          <Route path="/contatos" component={Contatos} />
        </Switch>
      </Router>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
