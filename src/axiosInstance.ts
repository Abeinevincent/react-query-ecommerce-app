import axios from "axios"
export const myAPIClient = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
        token: localStorage.getItem("token")
    }
})