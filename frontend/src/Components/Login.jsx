import React, { useState } from 'react'
import { Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  FormHelperText
} from '@chakra-ui/react'

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)


  const submitHandler = () => {
    console.log(email, password)
    console.log('Hello')
  }

  return (
    <div>
      <VStack>
        <FormControl isRequired >
          <FormLabel>Email</FormLabel>
          <Input
            placeholder='Enter your email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired >
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={show ? 'text' : 'password'}
              placeholder='Enter your password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement>
              <Button onClick={() => setShow(!show)} >
                {show ? 'hide' : 'show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>


        <Button w='100%' onClick={submitHandler} >Login</Button>
        <Button w='100%'
          colorScheme='red'
          onClick={() => {
            setEmail('guest@example.com')
            setPassword('123456')
          }} >Get Guest User Credentials</Button>


      </VStack>
    </div>
  )
}
