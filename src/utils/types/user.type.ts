import { ChakraComponent } from "@chakra-ui/react"
import { IconType } from "react-icons/lib"

export type InputDetails = {
    username: string,
    email: string,
    password: string,
    coverImage?: string,
    profileImage?: string,
    phone?: string,
    firstName?: string,
    lastName?: string, birthday?: string
}

export type InputAttributeProps = {
    id?: string,
    name?: string,
    type?: string,
    placeholder?: string,
    label?: string,
    required?: true,
    hasrightelement?: string
}