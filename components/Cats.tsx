import React, { useState, useEffect } from 'react'
import {
  Box,
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Divider,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

import { getListBreedsP } from '../api/index'



const Cats = () => {

  const [appState, setAppState] = useState([]);

  useEffect(() => {
    const data = getListBreedsP().then((breeds) => {
      setAppState(breeds);
      console.log(breeds)

    })
  }, [setAppState]);


  return (
    <Box width={'100%'}>
      {
        appState.map(breeds =>
          <Box>
            <Stack
              spacing={{ base: 8, md: 10 }}
              py={{ base: 5, md: 28 }}
              width={"100%"}
              direction={{ base: 'column', md: 'row' }}
              key={breeds.id}
            >
              <Box
                width={{ base: '100%', sm: '85%' }}
                zIndex="2"
                marginLeft={{ base: '0', sm: '5%' }}
                marginTop="5%"
                order={{ base: 1, md: 0 }}
              >
                <Image
                  alt={breeds.slug}
                  borderRadius="lg"
                  objectFit={"contain"}
                  w={'100%'}
                  h={'100%'}
                  minWidth={{ base: '100%', md: "574px" }}
                  src={breeds.image_url}
                />
              </Box>
              <Stack order={{ base: 0, md: 1 }} py={{ base: 10, md: 20 }} direction={'column'}>
                <Link color={useColorModeValue('purple', 'orange')} href={`/${breeds.slug}`} _hover={{ opacity: 0.5 }}>
                  <Heading
                    fontSize={{ base: '3xl', sm: '3xl', lg: '5xl' }}
                    textAlign={{ base: "center", md: "left" }}
                  >
                    {breeds.name}
                  </Heading>
                </Link>
              </Stack>
              
            </Stack>
            <Divider marginTop="5" borderColor={useColorModeValue('purple', 'orange')} />
          </Box>

        )
      }

    </Box>
  )
}

export default Cats