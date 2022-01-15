import React, { useState, useEffect } from 'react'
import {
  Box,
  Heading,
  Image,
  Link,
  Divider,
  Stack,
  useColorModeValue,
  useRadioGroup,
  InputGroup,
  InputLeftElement,
  Input,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { motion, useAnimation } from 'framer-motion'
import RadioButton from './RadioButton'


import { getListBreedsP, getListBreedsSearch } from '../api/index'


const Cats = () => {
  const [appState, setAppState] = useState([]);
  const [value, setValue] = React.useState('')
  const [page, setPage] = useState("1");

  const options = ["1", "2", "3", "4", "5", "6", "7", "8"]

  const handleChange = (event) => {
    setValue(event.target.value)
  }

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
    })
    controls.set({
      y: 10,
      opacity: 0,
    })
    startAnimation()
  }, [page]);

  useEffect(() => {
    const data = getListBreedsSearch({ breed: value }).then((breeds) => {
      setAppState(breeds);
      console.log(breeds)

    })
    controls.set({
      y: 10,
      opacity: 0,
    })
    startAnimation()
  }, [value]);

  return (
    <Box width={'100%'} justifyContent={{ base: 'normal', md: 'center' }}>

      <InputGroup justifyContent={"center"} mt={20}>
        <InputLeftElement
          pointerEvents='none'
          children={<SearchIcon color={useColorModeValue('gray.500', 'gray.300')} />}
        />
        <Input
          type='text'
          variant='flushed'
          placeholder='Enter the breed of kitty'
          borderColor={useColorModeValue('gray.500', 'gray.600')}
          _focus={{
            borderColor: useColorModeValue('purple', 'orange')
          }}
          value={value}
          onChange={handleChange}
        />
      </InputGroup>

      <Stack  justifyContent="center" mt={10} direction="row"  {...group}>
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
        {appState.length === 0 ?
          <Heading as="h2" mt={10}>
            Похоже ничего не нашлось :(
          </Heading> :
          appState.map(breeds =>

            <Box>
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
                  <Link color={useColorModeValue('purple', 'orange')} href={`/breeds/${breeds.slug}`} _hover={{ opacity: 0.5 }}>
                    <Heading
                      width={"100%"}
                      as="h2"
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