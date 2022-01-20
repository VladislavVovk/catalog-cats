import { 
  useColorModeValue,
  Box,
  useRadio,
} from '@chakra-ui/react'

type Props = {
  children: string
  isChecked?: boolean
  key: any
  name?: string
  onChange?: (e: any) => void
  value?: any
}

// Pagination button
const RadioButton = (props: Props) => {
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
        sx={{
          '@media (max-width: 375px)': {
            width: "38px"
          },
          '@media (max-width: 320px)': {
            width: "32px",
            height: "35px",
            fontSize: "0.9em",
            px: 3
          },
        }}
        px={{base: 4, md: 5}}
        py={2}
      >
        {props.children}
      </Box>
    </Box>
  )
}

export default RadioButton