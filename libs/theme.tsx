import { extendTheme, ThemeConfig, localStorageManager } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

// const setMode = () => {
//   const colorModeManager = localStorageManager
//   let colorMode = colorModeManager.get()
//   if (colorMode === undefined) {
//     colorModeManager.set('dark')
//     colorMode = colorModeManager.get()
//     console.log(colorMode)
//     return colorMode
//   } else {
//     colorMode = colorModeManager.get()
//     console.log(colorMode)
//     return colorMode
//   }
// }


const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props)
    }
  })
}

const fonts = {
  Heading: "'M PLUS Rounded 1c'",
}

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({
  config,
  styles,
  fonts
})

export default theme