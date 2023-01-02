import { Box, Heading, FormControl, CircularProgress, InputRightElement, chakra, FormLabel, InputLeftElement, InputGroup, Input, Button, Flex } from '@chakra-ui/react'
import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ErrorMessage } from '../../components/reusable/ErrorMessage'
import { InputAttributeProps, InputDetails } from '../../utils/types/user.type';
import { useRegister } from '../../utils/customhooks/useRegister';
import { Link, useNavigate } from 'react-router-dom';
const CFaEye = chakra(FaEye);
const CFaEyeSlash = chakra(FaEyeSlash);
export const Register = () => {
    const inputs: InputAttributeProps[] = [
        {
            id: "1",
            name: "username",
            type: "text",
            placeholder: "john123",
            label: "Username",
            required: true,
            hasrightelement: "false"
        },
        {
            id: "2",
            name: "email",
            type: "email",
            placeholder: "john@example.com",
            label: "Email",
            required: true,
            hasrightelement: "false"
        },
        {
            id: "3",
            name: "firstName",
            type: "string",
            placeholder: "John",
            label: "Firstname",
            hasrightelement: "false"
        },
        {
            id: "4",
            name: "lastName",
            type: "string",
            placeholder: "Doe",
            label: "Lastname",
            hasrightelement: "false"
        },
        {
            id: "5",
            name: "date",
            type: "date",
            label: "Birthday",
            hasrightelement: "false"
        },
        {
            id: "6",
            name: "phone",
            type: "string",
            label: "Phone",
            required: true,
            placeholder: "+256777777777",
            hasrightelement: "false"
        },
        {
            id: "7",
            name: "password",
            type: "password",
            placeholder: "*****",
            label: "Password",
            required: true,
            hasrightelement: "true",
        }
    ];

    const [values, setValues] = useState<InputDetails>({
        username: '',
        email: '',
        birthday: '',
        firstName: '',
        lastName: '',
        phone: '',
        password: '',

    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const [togglePassword, setTogglePassword] = useState(false)

    const handleTogglePassword = () => {
        setTogglePassword(!togglePassword)
    }

    const { mutate, data, error, isSuccess, isLoading } = useRegister()
    const navigate = useNavigate()
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const user = {
            email: values.email,
            password: values.password,
            username: values.username,
            firstName: values.firstName,
            lastName: values.lastName,
            phone: values.phone,
            birthday: values.birthday
        }
        mutate(user)
        setValues({
            username: '',
            email: '',
            firstName: '',
            lastName: '',
            phone: '',
            birthday: '',
            password: ''
        })
    }
    useEffect(() => {
        isSuccess && navigate('/login')
        // data && localStorage.setItem("token", data.data.token)
        data && console.log(data)
    }, [data?.data.token, isSuccess])

    return (
        <Flex width="full" my={8} height="100vh" align="center" justifyContent="center">
            <Box m={3} p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow={"lg"} textAlign={"left"}>
                <Box textAlign={"center"}>
                    <Heading color="teal">Register</Heading>
                </Box>
                <Box>
                    <form>
                        {error instanceof Error && <ErrorMessage message={error.message} />}
                        {inputs.map((input) => (
                            <FormControl mt={2} key={input.id} alignItems={"center"} flexDirection={"column"}>
                                <FormLabel>{input.label}</FormLabel>
                                <InputGroup>
                                    {/* <InputLeftElement
                                        pointerEvents="none"
                                        color="gray.300"
                                        children={<CFaLock color="gray.300" />}
                                    /> */}
                                    <Input
                                        {...input}
                                        name={input.name}
                                        onChange={onChange}
                                        type={input.name === 'password' ? togglePassword ? 'text' : 'password' : input.type}
                                    />{input.hasrightelement === "true" && <InputRightElement onClick={handleTogglePassword} cursor={"pointer"}
                                        children={togglePassword ? <CFaEyeSlash /> : <CFaEye />} />}
                                </InputGroup>
                            </FormControl>
                        ))}
                        <Button
                            disabled={
                                !values.email
                                || !values.password || !values.username
                                || !values.firstName || !values.lastName
                                || !values.phone} colorScheme="teal" type="submit" onClick={handleSubmit} variant="outline" width="full" mt={4}>
                            {isLoading ? (
                                <CircularProgress isIndeterminate size="24px" color="teal" />
                            ) : (
                                'Sign Up'
                            )}
                        </Button>
                    </form>
                </Box>
                <Box textAlign={"center"} mt={4}>
                    Already have an account?{" "}
                    <Link color="teal.500" to="/login">
                        Sign In
                    </Link>
                </Box>
            </Box>
        </Flex >
    )
}
