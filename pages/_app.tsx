import { ChakraProvider } from '@chakra-ui/react'
import theme from '../libs/theme'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'

const Website = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default Website