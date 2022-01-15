import { 
  Text, 
  useColorModeValue,
  Box,
  useRadio,
} from '@chakra-ui/react'

// type Props = {
//  children: string
//  "data-radiogroup": boolean
//  isChecked: boolean
// }

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

export default RadioButton