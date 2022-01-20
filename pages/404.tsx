import NextLink from 'next/link'
import {
  Box,
  Heading,
  Container,
  Divider,
  Button,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Страница не найдена</Heading>
      <Text as="h2">Страница устарела, была удалена или не существовала вовсе</Text>
      <Divider my={6} />

      <Box my={6} align="center">
        <NextLink href="/">
          <Button color={useColorModeValue('white', 'white')} bg={useColorModeValue('purple', 'orange')}>Главная</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound;