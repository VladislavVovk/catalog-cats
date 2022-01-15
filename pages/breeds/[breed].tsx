import React, { useState, useEffect, useRef } from 'react'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import {
  Box,
  IconButton,
  Link,
  Heading,
  Stack,
  Image,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

import { ArrowBackIcon } from '@chakra-ui/icons'
import { getListBreed } from '../../api/index'

const Breed = ({ cats }) => {
  console.log(cats)
  return (
    <Layout>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Box mt={20} width={"100%"}>
          <Link href="/">
            <IconButton
              transition="all 0.5s"
              color={useColorModeValue('black', 'white')}
              _hover={{
                color: useColorModeValue('purple', 'orange')
              }}
              variant="text" aria-label={"back"} icon={<ArrowBackIcon fontSize={60} />} />
          </Link>
        </Box>
        <Box>
          <Stack
            spacing={{ base: 8, md: 10 }}
            py={{ base: 5, md: 15 }}
            width={{ base: '100%', md: '100%' }}
            direction={{ base: 'column', md: 'row' }}
            key={cats.id}
          >
            <Box
              width={{ base: '100%', sm: '85%' }}
              zIndex="2"
              marginLeft={{ base: '0', sm: '5%' }}
              marginTop="5%"
            >
              <Image
                alt={cats.slug}
                borderRadius="lg"
                float={"left"}
                objectFit={"contain"}
                w={'100%'}
                h={'auto'}
                sx={{ marginRight: 10, marginBottom: 5 }}
                minWidth={{ base: '100%', md: "370px" }}
                maxWidth={{ base: '100%', md: "370px" }}
                src={cats.image_url}
              />
              <Heading
                width={"100%"}

                fontSize={{ base: '3xl', sm: '3xl', md: '3xl', lg: '4xl' }}
                textAlign={{ base: "center", md: "left" }}
              >
                {cats.name}
              </Heading>
              <Text mt={10}>
                <strong>Описание: </strong>
                {cats.description}
              </Text>

            </Box>
          </Stack>
        </Box>
      </motion.div>
    </Layout>
  )
}

export default Breed

export const getServerSideProps = async (context) => {
  const res = await getListBreed({ breed: context.params.breed }).then((cat) => {
    return cat
  })
  const cats = res
  return {
    props: { cats }
  }

}
