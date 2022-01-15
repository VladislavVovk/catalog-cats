import React, { ReactNode } from 'react'
import Navbar from './Navbar'
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
      <title>Catalog cats</title>
    </Head>
    <Navbar />
    <Container maxW="container.lg" pt={14}>
      {children}
    </Container>
  </Box>
)

export default Layout
