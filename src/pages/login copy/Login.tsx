import { Box, Heading, FormControl, Link, CircularProgress, InputRightElement, FormHelperText, chakra, FormLabel, InputLeftElement, InputGroup, Input, Button, Flex } from '@chakra-ui/react'
import { useState, useEffect } from "react";
import { FaUserAlt, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
// import { AiFillEyeInvisible } from "react-icons";
import axios from "axios"
import { ErrorMessage } from '../../components/reusable/ErrorMessage'
import { useLogin } from '../../utils/customhooks/useLogin'
// import { Link } from 'react-router-dom';
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const CFaEye = chakra(FaEye);
const CFaEyeSlash = chakra(FaEyeSlash);
export const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [togglePassword, setTogglePassword] = useState(false)

    const handleTogglePassword = () => {
        setTogglePassword(!togglePassword)
    }

    const { mutate, data, error, isLoading } = useLogin()

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const user = {
            email, password
        }
        mutate(user)
        setEmail("")
        setPassword("")
    }
    useEffect(() => {
        data && localStorage.setItem("token", data.data.token)
        data && console.log(data)
    }, [data?.data.token])

    return (
        <Flex width="full" height="100vh" align="center" justifyContent="center">
            <Box my={3} p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow={"lg"} textAlign={"left"}>
                <Box textAlign={"center"}><Heading color="teal">Welcome Back!</Heading></Box>
                <Box my={3}>
                    <form>
                        {error instanceof Error && <ErrorMessage message={axios.isAxiosError(error) && error.response?.data || error.message} />}
                        <FormControl alignItems={"center"}>
                            <FormLabel>Email</FormLabel>
                            <InputGroup alignItems={"center"}>
                                <InputLeftElement
                                    pointerEvents="none" color="gray.300"
                                    children={<FaUserAlt color="gray.300" />}
                                />
                                <Input isRequired value={email} onChange={e => setEmail(e.currentTarget.value)} type={"email"} placeholder="example@gmail.com" />
                            </InputGroup>
                        </FormControl>
                        <FormControl alignItems={"center"} mt={5}>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents="none"
                                    color="gray.300"
                                    children={<CFaLock color="gray.300" />}
                                />
                                <Input value={password} onChange={e => setPassword(e.currentTarget.value)} isRequired type={togglePassword ? "text" : "password"} placeholder="********" />
                                <InputRightElement onClick={handleTogglePassword} cursor={"pointer"} width="2.5rem">
                                    {togglePassword ? <InputLeftElement
                                        children={<CFaEye />}
                                    /> : <InputLeftElement
                                        children={<CFaEyeSlash />}
                                    />}
                                </InputRightElement>
                            </InputGroup>
                            <FormHelperText textAlign="right">
                                <Link>Forgot Password?</Link>
                            </FormHelperText></FormControl>
                        <Button disabled={!email || !password} colorScheme="teal" type="submit" onClick={handleSubmit} variant="outline" width="full" mt={4}>
                            {isLoading ? (
                                <CircularProgress isIndeterminate size="24px" color="teal" />
                            ) : (
                                'Sign In'
                            )}
                        </Button>
                    </form>
                </Box><Box textAlign={"center"}>
                    Don't have an account?{" "}
                    <Link color="teal.500" href="#">
                        Sign Up
                    </Link>
                </Box>
            </Box>
        </Flex>
    )
}
