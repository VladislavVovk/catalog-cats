import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import {
  Box,
  IconButton,
  Link,
  Heading
} from '@chakra-ui/react'

import { ArrowBackIcon } from '@chakra-ui/icons'
import { getListBreed } from '../../api/index'

const Breed = () => {
  const router = useRouter()
  const { breed } = router.query

  const [appState, setAppState] = useState([]);

  useEffect(() => {
    const data = getListBreed({ breed: breed }).then((breeds) => {
      // setAppState(breeds);
      console.log(appState);
    })
  }, []);

  return (
    <Layout>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Box mt={20} width={"100%"}>
          <Link href="/">
            <IconButton variant="text" aria-label={"back"} icon={<ArrowBackIcon fontSize={60} />} />
          </Link>
        </Box>
        <Heading>{breed}</Heading>
      </motion.div>
    </Layout>
  )
}

export default Breed
