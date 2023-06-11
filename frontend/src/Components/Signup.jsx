import React from 'react'
import { Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'


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


    const navigate = useNavigate()
    const toast = useToast()

    const [loading, setLoading] = useState(false)


    const submitHandler = async () => {
        setLoading(true)
        const formData = new FormData();
        formData.append('file', pic);
        formData.append('upload_preset', 'ngw7fl2u');

        const response = await fetch(
            'https://api.cloudinary.com/v1_1/dkwrlyeva/image/upload',
            {
                method: 'POST',
                body: formData,
            }
        );

        const data = await response.json();
        console.log(data.secure_url)

        if (!name || !email || !password || !confPassword) {
            toast({
                title: 'Please fill all the details.',
                // description: "We've created your account for you.",
                status: 'warning',
                duration: 5000,
                isClosable: true,
            })
            return;
        }

        if (password !== confPassword) {
            toast({
                title: 'Please match password and confrm password.',
                // description: "We've created your account for you.",
                status: 'warning',
                duration: 5000,
                isClosable: true,
            })
            return;
        }

        let obj = {
            name,
            email,
            password,
            pic: data.secure_url
        }

        await fetch('http://localhost:5000/users', {
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
                    onChange={(e) => setPic(e.target.files[0])}
                />
            </FormControl>

            <Button w='100%' isLoading={loading} onClick={submitHandler} >Sign up</Button>

        </VStack>
    )
}
