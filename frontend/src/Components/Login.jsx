import React, { useState } from 'react'
import { Input, InputGroup, InputRightElement, VStack, useToast } from '@chakra-ui/react'

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  FormHelperText
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)

  const toast = useToast()
  const navigate=useNavigate()

  const submitHandler = async () => {
    if (!email || !password) {
      toast({
        title: 'Please fill all the details.',
        // description: "We've created your account for you.",
        status: 'warning',
        duration: 5000,
        isClosable: true,
      })
      return;
    }

    let obj = {
      email,
      password
    }

    await fetch('http://localhost:5000/users/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(obj)
    }).then(res => res.json())
      .then(res => {
        setLoading(false)
        toast({
          title: 'Register sucessful.',
          description: "User has been rigister.",
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
        console.log(res)
        localStorage.setItem('userInfo', JSON.stringify(res))
        navigate('/chats')
      })
      .catch(err => {
        setLoading(false)
        console.log(err)
        toast({
          title: 'Error occers.',
          description: "Error ",
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      })

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
            submitHandler()
          }} >Get Guest User Credentials</Button>


      </VStack>
    </div>
  )
}
