import React, { ReactNode } from 'react'
import Navbar from '../Navbar'
import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children }: Props) => (
  <Box as="main" pb={8}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Cat breeds: Discover 78 of the most beautiful, elegant and unique cat breeds. This complete and detailed list will help you choose your puurfect best friend" />
      <meta name="keywords" content="cat breeds, cat breeding, happy cat large breed,cat, породы кошек, породы кошек фото, породы кошек +с названиями, самые породы кошек, описание пород кошек" />
      <meta property="og:title" content="Cat breeds" />
      <meta property="og:description" content="Discover 78 of the most beautiful, elegant and unique cat breeds. This complete and detailed list will help you choose your puurfect best friend"></meta>
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://catalog-cats.vercel.app" />
      <title>Wikipedia of cat breeds</title>
    </Head>
    <Navbar />
    <Container maxW="container.lg" pt={14}>
      {children}
    </Container>
  </Box>
)

export default Layout
