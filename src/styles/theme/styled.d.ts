import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    text: {
      primary: string
      secundary: string
    }
    colors: {
      primary: string
      secundary: string
      dark: string
      darkLight: string
      white: string
      whiteLight: string
      sucess: string
      danger: string
      gray: string
    }
  }
}
