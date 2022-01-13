import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout'
import theme from '../libs/theme'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'

const Website = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps}  key={router.route} />
        </AnimatePresence>
    </ChakraProvider>
  )
}

export default Website