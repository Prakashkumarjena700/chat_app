import React from 'react'
import { Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import { useState } from 'react'

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Button,
    FormHelperText
} from '@chakra-ui/react'

export default function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const [pic, setPic] = useState('')
    const [show, setShow] = useState(false)
    const [showConfPas, setshowConfPas] = useState(false)


    const postDetails = () => {

    }

    const submitHandler = () => {

    }

    return (
        <VStack>
            <FormControl isRequired >
                <FormLabel>Name</FormLabel>
                <Input
                    placeholder='Enter your name'
                    onChange={(e) => setName(e.target.value)}
                />
            </FormControl>
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
            <FormControl isRequired >
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                    <Input
                        type={showConfPas ? 'text' : 'password'}
                        placeholder='Enter your password'
                        onChange={(e) => setConfPassword(e.target.value)}
                    />
                    <InputRightElement>
                        <Button onClick={() => setshowConfPas(!showConfPas)} >
                            {showConfPas ? 'hide' : 'show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <FormControl id='pic' >
                <FormLabel>Upload your pic</FormLabel>
                <Input
                    type='file'
                    accept='image/*'
                    onChange={(e) => postDetails(e.target.files[0])}
                />
            </FormControl>

            <Button w='100%' onClick={submitHandler} >Sign up</Button>

        </VStack>
    )
}
