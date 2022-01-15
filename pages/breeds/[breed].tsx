import React, { useState, useEffect, useRef } from 'react'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import {
  Box,
  IconButton,
  Link,
  Heading,
  useColorModeValue
} from '@chakra-ui/react'

import { ArrowBackIcon } from '@chakra-ui/icons'
import { getListBreed } from '../../api/index'

const Breed = ({ cats }) => {

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
        <Heading>{cats.name}</Heading>
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
    props: {cats}
  }

}
