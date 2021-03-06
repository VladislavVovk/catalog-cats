import {
  Container,
  Box, 
  Heading,
  Flex,
  useColorModeValue
} from '@chakra-ui/react'
import Logo from './Logo'

// theme switch button
import ThemeToggleButton from './Theme-toggle-button'


// Site header
const Navbar = () => {
  return (
    <Box
    position="fixed"
    as="nav"
    w="100%"
    bg={useColorModeValue('#ffffff40', '#20202380')}
    style={{backdropFilter: 'blur(10px)'}}
    zIndex={1}
    >
      <Container display="flex" p={2} maxW="container.lg" wrap="wrap" align="center" justify="space-between">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg"  letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
        <Box flex={1}  align="right">
          <ThemeToggleButton />
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar