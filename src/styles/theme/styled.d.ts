import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      dark: string
      white: string
      sucess: string
      danger: string
    }
  }
}
