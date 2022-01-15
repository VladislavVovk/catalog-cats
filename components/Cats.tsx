import React, { useState, useEffect } from 'react'
import {
  Box,
  Badge,
  Button,
  Center,
  Flex,
  Radio,
  Heading,
  Image,
  Link,
  Divider,
  Stack,
  Text,
  useColorModeValue,
  useRadio,
  useRadioGroup
} from '@chakra-ui/react'

import Section from './Section'
import { motion, useAnimation } from 'framer-motion'


import { getListBreedsP } from '../api/index'


const RadioButton = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as='label'>
      <input {...input} />
      <Box
        {...checkbox}
        width="auto"
        height='var(--chakra-sizes-10)'
        cursor='pointer'
        bg="whiteAlpha.200"
        borderRadius='md'
        boxShadow='md'
        transition='all 0.3s'
        _hover={{
          bg: 'whiteAlpha.400'
        }}
        _checked={{
          bg: useColorModeValue('purple', 'orange'),
          color: 'white',
          borderColor: 'teal.600',
        }}
        px={5}
        py={2}
      >
        {props.children}
      </Box>
    </Box>
  )
}

const Cats = () => {

  const [appState, setAppState] = useState([]);
  const options = ["1", "2", "3", "4", "5", "6", "7", "8"]
  const [page, setPage] = useState("1");

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'pages',
    defaultValue: '1',
    onChange: setPage
  })
  const group = getRootProps()

  const controls = useAnimation();
  const startAnimation = () => {
    controls.start({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.2
      }
    });
  }

  useEffect(() => {
    const data = getListBreedsP({ page: page }).then((breeds) => {
      setAppState(breeds);
      console.log(page)
    })
    controls.set({
      y: 10,
      opacity: 0,
    })
    startAnimation()
  }, [page]);

  return (
    <Box width={'100%'} justifyContent={{ base: 'normal', md: 'center' }}>
      <Stack justifyContent="center" mt={20} direction="row" {...group}>
        {options.map((value) => {
          const radio = getRadioProps({ value })
          return (
            <RadioButton key={value} {...radio}>
              {value}
            </RadioButton>
          )
        })}
      </Stack>
      <motion.div animate={controls}>
        {
          appState.map(breeds =>
            <Box >
              <Stack
                spacing={{ base: 8, md: 10 }}
                py={{ base: 5, md: 15 }}
                width={{ base: '100%', md: '100%' }}
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
                    minWidth={{ base: '100%', md: "370px" }}
                    maxWidth={{ base: '100%', md: "370px" }}
                    src={breeds.image_url}
                  />
                </Box>
                <Stack width={"100%"} order={{ base: 0, md: 1 }} py={{ base: 10, md: 20 }} direction={'column'}>
                  <Link color={useColorModeValue('purple', 'orange')} href={`/${breeds.slug}`} _hover={{ opacity: 0.5 }}>
                    <Heading
                      width={"100%"}
                      fontSize={{ base: '3xl', sm: '3xl', md: '3xl', lg: '4xl' }}
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
      </motion.div>


    </Box>
  )
}

export default Cats