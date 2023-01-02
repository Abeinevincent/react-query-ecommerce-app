import { useMutation } from "@tanstack/react-query"
import { myAPIClient } from "../../axiosInstance"

type UserProps = {
    email: string,
    password: string
}

const loginUser = async (user: UserProps) => {
    return await myAPIClient.post("/auth/login", user)
}
export const useLogin = () => {
    return useMutation(loginUser)
}
