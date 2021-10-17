import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
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
