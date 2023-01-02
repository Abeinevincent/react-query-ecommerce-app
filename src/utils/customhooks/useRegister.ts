import { useMutation } from "@tanstack/react-query"
import { myAPIClient } from "../../axiosInstance"
import { InputDetails } from "../types/user.type"

const registerUser = async (user: InputDetails) => {
    return await myAPIClient.post("/auth/register", user)
}

export const useRegister = () => {
    return useMutation(registerUser)
}
