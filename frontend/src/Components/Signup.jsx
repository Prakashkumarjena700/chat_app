import React from 'react'
import { Input, VStack } from '@chakra-ui/react'
import { useState } from 'react'

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'

export default function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const [pic, setPic] = useState('')


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
                <Input
                    placeholder='Enter your password'
                    onChange={(e) => setPassword(e.target.value)}
                />
            </FormControl>
            <FormControl isRequired >
                <FormLabel>Confirm Password</FormLabel>
                <Input
                    placeholder='Enter your conform password'
                    onChange={(e) => confPassword(e.target.value)}
                />
            </FormControl>

        </VStack>
    )
}
